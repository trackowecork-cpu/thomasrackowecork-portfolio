import { GR } from "./_tokens";

export default function DirectionELayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <style>{`
        html { background-color: ${GR}; color-scheme: dark; }
        body {
          --color-canvas: ${GR};
          background-color: ${GR} !important;
          overflow: hidden;
          height: 100%;
        }
        body > header, body > footer { display: none; }
      `}</style>
      {children}
    </>
  );
}
