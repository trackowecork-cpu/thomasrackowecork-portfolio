import { GR } from "./_tokens";

export default function DirectionELayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <style>{`
        :root { --color-canvas: ${GR}; }
        body { overflow: hidden; height: 100%; }
      `}</style>
      {children}
    </>
  );
}
