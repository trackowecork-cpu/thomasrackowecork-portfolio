export default function DirectionGLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <style>{`
        :root { --color-canvas: #0E0D0C; }
        body { overflow: hidden; height: 100%; }
      `}</style>
      {children}
    </>
  );
}
