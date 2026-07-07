// Fetches current wave conditions from the Open-Meteo Marine API for four
// open-ocean reference points. Called server-side; responses are cached for
// one hour so individual page loads never hit the network.

export interface OceanWaveSource {
  location:   string;
  waveHeight: number | null;  // metres, null if fetch failed or data unavailable
  wavePeriod: number | null;  // seconds, null if fetch failed
  amp:        number;         // canvas amplitude in px (mapped from height)
  speed:      number;         // animation speed in rad/frame (mapped from period)
}

// Layer index 0-3 corresponds to DEFAULT_WAVES layers 0-3 in HeroWaves.tsx.
// typicalHeight: representative average conditions used to normalise amplitude
// so the default visual is preserved when seas are typical, and the animation
// grows/shrinks relative to that baseline.
const POINTS = [
  { location: "Atlantic",      lat:  40.0, lon: -40.0, defaultAmp: 55, defaultSpeed: 0.0018, typicalHeight: 2.5 },
  { location: "North Sea",     lat:  56.0, lon:   3.0, defaultAmp: 42, defaultSpeed: 0.0025, typicalHeight: 1.8 },
  { location: "Pacific",       lat:   0.0, lon: -160.0, defaultAmp: 30, defaultSpeed: 0.0014, typicalHeight: 2.0 },
  { location: "Mediterranean", lat:  38.0, lon:  12.0, defaultAmp: 22, defaultSpeed: 0.0032, typicalHeight: 0.7 },
] as const;

// Reference wave period: when real period equals this, animation speed = default.
const TYPICAL_PERIOD_S = 10;

function mapAmp(heightM: number, defaultAmp: number, typicalM: number): number {
  const scale = heightM / typicalM;
  return Math.max(8, Math.min(90, Math.round(defaultAmp * scale)));
}

function mapSpeed(periodS: number, defaultSpeed: number): number {
  const p = Math.max(3, Math.min(30, periodS));
  return Math.max(0.0006, Math.min(0.007, defaultSpeed * (TYPICAL_PERIOD_S / p)));
}

async function fetchPoint(
  lat: number,
  lon: number,
): Promise<{ height: number | null; period: number | null }> {
  const url =
    `https://marine-api.open-meteo.com/v1/marine` +
    `?latitude=${lat}&longitude=${lon}&current=wave_height,wave_period`;

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 4000);

  try {
    const res = await fetch(url, {
      signal: controller.signal,
      next: { revalidate: 3600 },
    });
    clearTimeout(timer);

    if (!res.ok) return { height: null, period: null };

    const json = await res.json();
    const height =
      typeof json?.current?.wave_height === "number"
        ? (json.current.wave_height as number)
        : null;
    const period =
      typeof json?.current?.wave_period === "number"
        ? (json.current.wave_period as number)
        : null;

    return { height, period };
  } catch {
    clearTimeout(timer);
    return { height: null, period: null };
  }
}

export async function fetchOceanWaves(): Promise<OceanWaveSource[]> {
  const results = await Promise.allSettled(
    POINTS.map((p) => fetchPoint(p.lat, p.lon)),
  );

  return POINTS.map((point, i) => {
    const result = results[i];
    const raw =
      result.status === "fulfilled"
        ? result.value
        : { height: null, period: null };

    return {
      location:   point.location,
      waveHeight: raw.height,
      wavePeriod: raw.period,
      amp:
        raw.height !== null
          ? mapAmp(raw.height, point.defaultAmp, point.typicalHeight)
          : point.defaultAmp,
      speed:
        raw.period !== null
          ? mapSpeed(raw.period, point.defaultSpeed)
          : point.defaultSpeed,
    };
  });
}
