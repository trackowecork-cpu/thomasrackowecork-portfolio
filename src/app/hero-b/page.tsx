import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import ProjectCard from "@/components/ProjectCard";

export const metadata = { title: "Hero B — Featured Work" };

export default function HeroB() {
  return (
    <>
      {/* ── Hero: Featured Work ─────────────────────────────────────── */}
      <section
        className="site-container flex flex-col"
        style={{ minHeight: "calc(100vh - 3.5rem)" }}
      >
        {/* Option label */}
        <div className="flex justify-end pt-5">
          <span className="font-mono text-xs uppercase tracking-widest text-ink-faint">
            Option B — Featured Work
          </span>
        </div>

        {/* Identity + headline block */}
        <div className="pt-14 pb-12">
          <p className="font-mono text-xs uppercase tracking-widest text-ink-faint mb-6">
            Senior Product Designer
          </p>
          <h1
            className="font-serif text-ink leading-tight max-w-2xl"
            style={{ fontSize: "clamp(2.5rem, 4.5vw, 4rem)" }}
          >
            The brief is rarely the problem.
          </h1>
        </div>

        {/* Featured project panel — full container width, field-sage */}
        <div className="flex-1 flex flex-col">
          <Link href="/work/esim" className="group block flex-1">
            <div
              className="h-full grid grid-cols-12 gap-x-8"
              style={{
                backgroundColor: "#4A5547",
                padding: "3.5rem 0",
                // Extend to container edges using negative margin trick
                marginLeft: "calc(-1 * (100vw - 100%) / 2)",
                marginRight: "calc(-1 * (100vw - 100%) / 2)",
                paddingLeft: "calc(5rem + (100vw - 100%) / 2)",
                paddingRight: "calc(5rem + (100vw - 100%) / 2)",
              }}
            >
              {/* Left — project details (8 cols) */}
              <div className="col-span-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-6 mb-8">
                    <span
                      className="font-mono text-xs uppercase tracking-widest"
                      style={{ color: "rgba(240,237,232,0.45)" }}
                    >
                      01
                    </span>
                    <span
                      className="font-mono text-xs uppercase tracking-widest"
                      style={{ color: "rgba(240,237,232,0.45)" }}
                    >
                      Proximus · Product Design · Service Design · 2023
                    </span>
                  </div>
                  <h2
                    className="font-serif leading-tight mb-5"
                    style={{
                      fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                      color: "#F0EDE8",
                    }}
                  >
                    Scaling for the eSIM Era
                  </h2>
                  <p
                    className="text-base leading-relaxed max-w-lg"
                    style={{ color: "rgba(240,237,232,0.7)" }}
                  >
                    Redesigned mobile onboarding from a physical, postal process
                    into a fully digital activation system — connecting
                    provisioning, activation, SIM swap, and device transfer into
                    a single scalable model. Reduced activation time from days
                    to minutes.
                  </p>
                </div>
                <p
                  className="text-sm flex items-center gap-2 mt-10 group-hover:gap-3 transition-all duration-200"
                  style={{ color: "rgba(240,237,232,0.5)" }}
                >
                  View case study
                  <span style={{ color: "rgba(240,237,232,0.5)" }}>→</span>
                </p>
              </div>

              {/* Right — impact metrics (4 cols) */}
              <div className="col-span-4 flex flex-col justify-between pl-12 border-l" style={{ borderColor: "rgba(240,237,232,0.1)" }}>
                <div className="space-y-10">
                  <div>
                    <p
                      className="font-serif leading-none mb-3"
                      style={{ fontSize: "3rem", color: "#F0EDE8" }}
                    >
                      14,000+
                    </p>
                    <p
                      className="font-mono text-xs uppercase tracking-widest"
                      style={{ color: "rgba(240,237,232,0.5)" }}
                    >
                      eSIM activations
                    </p>
                    <p
                      className="text-xs mt-1"
                      style={{ color: "rgba(240,237,232,0.4)" }}
                    >
                      in the first month
                    </p>
                  </div>
                  <div
                    className="border-t pt-10"
                    style={{ borderColor: "rgba(240,237,232,0.1)" }}
                  >
                    <p
                      className="font-serif leading-tight mb-3"
                      style={{ fontSize: "2.75rem", color: "#F0EDE8" }}
                    >
                      Days →<br />Minutes
                    </p>
                    <p
                      className="font-mono text-xs uppercase tracking-widest"
                      style={{ color: "rgba(240,237,232,0.5)" }}
                    >
                      Activation time
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* ── Remaining work ──────────────────────────────────────────── */}
      <div className="site-container">
        <SectionHeader label="Selected work" />
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
