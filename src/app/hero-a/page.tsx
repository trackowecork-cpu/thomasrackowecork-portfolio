import SectionHeader from "@/components/SectionHeader";
import ProjectCard from "@/components/ProjectCard";

export const metadata = { title: "Hero A — Editorial Split" };

export default function HeroA() {
  return (
    <>
      {/* ── Hero: Editorial Split ───────────────────────────────────── */}
      <section
        className="site-container flex flex-col"
        style={{ minHeight: "calc(100vh - 3.5rem)" }}
      >
        {/* Option label — sits flush at the top, disappears visually */}
        <div className="flex justify-end pt-5 pb-0">
          <span className="font-mono text-xs uppercase tracking-widest text-ink-faint">
            Option A — Editorial Split
          </span>
        </div>

        {/* Two-column composition — vertically centred */}
        <div className="grid grid-cols-12 gap-x-8 flex-1 items-center py-16">

          {/* Left: display headline — 7 of 12 columns */}
          <div className="col-span-7 pr-12">
            <p className="font-mono text-xs uppercase tracking-widest text-ink-faint mb-8">
              Senior Product Designer
            </p>
            <h1
              className="font-serif text-ink leading-tight"
              style={{ fontSize: "clamp(3rem, 5.5vw, 5rem)" }}
            >
              The brief is rarely the problem.
            </h1>
          </div>

          {/* Right: narrative — 5 of 12 columns */}
          <div className="col-span-5 border-l border-border pl-12">
            <div className="mb-8">
              <p className="text-lg text-ink-secondary leading-relaxed">
                I design products, services, and systems from the point where
                the real challenge becomes clear.
              </p>
            </div>

            <div className="border-t border-border pt-8 mb-8">
              <p className="text-base text-ink-muted leading-relaxed">
                My work starts where the brief ends — questioning assumptions,
                redesigning operational models, and building the foundations
                that let organisations scale. Before product design, I studied
                social anthropology and spent years in the contemporary art
                world. Both disciplines taught me to look beneath the surface.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {[
                "Product Design",
                "Service Design",
                "Systems Thinking",
                "Digital Strategy",
              ].map((t) => (
                <span
                  key={t}
                  className="font-mono text-xs uppercase tracking-widest text-ink-faint border border-border px-2 py-1"
                >
                  {t}
                </span>
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
