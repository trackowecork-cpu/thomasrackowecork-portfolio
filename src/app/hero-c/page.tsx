import SectionHeader from "@/components/SectionHeader";
import ProjectCard from "@/components/ProjectCard";

export const metadata = { title: "Hero C — Impact" };

const metrics = [
  {
    value: "14,000+",
    label: "eSIM activations",
    sub: "in month one",
  },
  {
    value: "+17%",
    label: "Completed orders",
    sub: "after ordering model redesign",
  },
  {
    value: "Days → Min.",
    label: "Activation time",
    sub: "physical to fully digital",
  },
  {
    value: "+100%",
    label: "Self-installation",
    sub: "adoption increase",
  },
];

export default function HeroC() {
  return (
    <>
      {/* ── Hero: Impact ────────────────────────────────────────────── */}
      <section
        className="site-container flex flex-col"
        style={{ minHeight: "calc(100vh - 3.5rem)" }}
      >
        {/* Option label */}
        <div className="flex justify-end pt-5">
          <span className="font-mono text-xs uppercase tracking-widest text-ink-faint">
            Option C — Impact
          </span>
        </div>

        {/* Headline block — takes upper portion */}
        <div className="flex-1 flex flex-col justify-center">
          <div className="max-w-4xl">
            <p className="font-mono text-xs uppercase tracking-widest text-ink-faint mb-8">
              Senior Product Designer
            </p>
            <h1
              className="font-serif text-ink leading-none"
              style={{ fontSize: "clamp(3.5rem, 7vw, 6rem)" }}
            >
              The brief is
              <br />
              rarely the
              <br />
              problem.
            </h1>
          </div>

          {/* Impact bar — anchored to bottom of the flex region */}
          <div className="mt-auto pt-16">
            {/* Full-width rule + attribution on the right */}
            <div className="flex items-baseline justify-between border-t border-border pt-4 mb-8">
              <span className="font-mono text-xs uppercase tracking-widest text-ink-faint">
                Selected outcomes
              </span>
              <span className="font-mono text-xs text-ink-faint">
                4 projects · 2022–present
              </span>
            </div>

            {/* Four metrics in a row */}
            <div className="grid grid-cols-4 gap-x-8 pb-16">
              {metrics.map((m) => (
                <div key={m.label} className="border-l border-border pl-6">
                  <p
                    className="font-serif text-ink leading-none mb-3"
                    style={{ fontSize: "clamp(1.75rem, 3vw, 2.75rem)" }}
                  >
                    {m.value}
                  </p>
                  <p className="font-mono text-xs uppercase tracking-widest text-ink-muted mb-1">
                    {m.label}
                  </p>
                  <p className="text-xs text-ink-faint leading-snug">{m.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Selected work ───────────────────────────────────────────── */}
      <div className="site-container">
        <SectionHeader label="Selected work" />
        <ProjectCard
          number="01"
          title="Scaling for the eSIM Era"
          company="Proximus"
          year="2023"
          disciplines={["Product Design", "Service Design"]}
          description="Redesigned mobile onboarding from a physical, postal process into a fully digital activation system — connecting provisioning, activation, SIM swap, and device transfer into a single scalable model."
          metric="14,000+"
          href="/work/esim"
        />
        <ProjectCard
          number="02"
          title="Recovering Declining eShare"
          company="Proximus"
          year="2022–23"
          disciplines={["Product Design", "Strategy"]}
          description="Restructured the end-to-end digital ordering experience — simplifying journeys, introducing personalised entry points, and redesigning identification and installation steps."
          metric="+17%"
          href="/work/eshare"
        />
        <ProjectCard
          number="03"
          title="Redefining Product Strategy at Arteïa"
          company="Arteïa"
          year="2022"
          disciplines={["Product Strategy", "Service Design"]}
          description="Repositioned an NFT-dependent art platform around private collectors — redefining the product model rather than extending features that no longer served the right audience."
          href="/work/arteia"
        />
      </div>
    </>
  );
}
