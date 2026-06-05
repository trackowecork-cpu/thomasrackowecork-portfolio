import SectionHeader from "@/components/SectionHeader";
import ProjectCard from "@/components/ProjectCard";
import MetricCard from "@/components/MetricCard";
import PullQuote from "@/components/PullQuote";
import CaseStudyHeader from "@/components/CaseStudyHeader";
import DecisionBlock from "@/components/DecisionBlock";
import FlowComparison from "@/components/FlowComparison";

export const metadata = {
  title: "Design System — Thomas Rackowe Cork",
};

export default function DesignSystemPage() {
  return (
    <div className="site-container py-16 sm:py-20 space-y-24">

      {/* ─── Page header ─── */}
      <div className="max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-widest text-ink-faint mb-4">
          Design System
        </p>
        <h1 className="font-serif text-5xl sm:text-6xl text-ink leading-tight mb-6">
          Warm Editorial
        </h1>
        <p className="text-base text-ink-muted leading-relaxed">
          Visual language for the portfolio. Playfair Display for display and headlines.
          Inter for body and UI. Geist Mono for labels, metadata, and structural elements.
          Warm off-white surface, restrained rust accent, no decorative effects.
        </p>
      </div>

      {/* ─── Typography ─── */}
      <section aria-labelledby="section-typography">
        <SectionHeader label="Typography" className="mb-10" />

        <div className="space-y-12">
          {/* Display */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
            <div className="sm:col-span-2">
              <p className="font-mono text-xs text-ink-faint">Display serif</p>
              <p className="font-mono text-xs text-ink-faint mt-1">Playfair Display</p>
            </div>
            <div className="sm:col-span-10 space-y-4">
              <p className="font-serif text-7xl leading-none text-ink">The brief is</p>
              <p className="font-serif text-5xl leading-tight text-ink">rarely the problem.</p>
              <p className="font-serif text-3xl leading-snug text-ink">
                Scaling for the eSIM Era
              </p>
              <p className="font-serif text-2xl leading-snug text-ink italic">
                &ldquo;Design is not just about improving experiences, but about redefining them.&rdquo;
              </p>
            </div>
          </div>

          {/* Body */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
            <div className="sm:col-span-2">
              <p className="font-mono text-xs text-ink-faint">Body sans</p>
              <p className="font-mono text-xs text-ink-faint mt-1">Inter</p>
            </div>
            <div className="sm:col-span-10 space-y-4 prose-width">
              <p className="text-lg text-ink leading-relaxed">
                Proximus was experiencing a sustained decline in its digital sales
                share, alongside an increase in support calls, signalling a breakdown
                in the digital ordering experience.
              </p>
              <p className="text-base text-ink-secondary leading-relaxed">
                The redesign was anchored in a clear principle: radical simplification.
                Rather than designing for edge cases, the focus shifted to the majority
                of users — removing unnecessary complexity, aligning flows with mental
                models, and creating a more predictable experience.
              </p>
              <p className="text-sm text-ink-muted leading-relaxed">
                This resulted in a more coherent, scalable ordering model, improving
                conversion, reducing reliance on support channels, and repositioning
                digital as the primary sales channel.
              </p>
            </div>
          </div>

          {/* Mono */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
            <div className="sm:col-span-2">
              <p className="font-mono text-xs text-ink-faint">Mono labels</p>
              <p className="font-mono text-xs text-ink-faint mt-1">Geist Mono</p>
            </div>
            <div className="sm:col-span-10 space-y-3">
              <p className="font-mono text-xs uppercase tracking-widest text-ink-muted">
                Selected work
              </p>
              <p className="font-mono text-xs uppercase tracking-widest text-ink-faint">
                Product Design · Service Design · Strategy
              </p>
              <p className="font-mono text-xs uppercase tracking-widest text-rust">
                In progress
              </p>
              <p className="font-mono text-sm text-ink-secondary">
                01 — 04
              </p>
            </div>
          </div>

          {/* Colour on type */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
            <div className="sm:col-span-2">
              <p className="font-mono text-xs text-ink-faint">Type colours</p>
            </div>
            <div className="sm:col-span-10 space-y-2">
              <p className="text-base text-ink">ink — #1A1714 — Primary body text</p>
              <p className="text-base text-ink-secondary">ink-secondary — #4A4542 — Supporting text</p>
              <p className="text-base text-ink-muted">ink-muted — #6B6560 — Captions, nav links</p>
              <p className="text-base text-ink-faint">ink-faint — #A8A09A — Labels, rules, meta</p>
              <p className="text-base text-rust">rust — #B5614A — Accent, links, metrics</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Colour fields ─── */}
      <section aria-labelledby="section-colours">
        <SectionHeader label="Colour Palette" className="mb-10" />

        {/* Surface colours */}
        <div className="mb-8">
          <p className="font-mono text-xs text-ink-faint mb-4">Surface</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { name: "canvas", hex: "#F5F1EC", bg: "bg-canvas border border-border" },
              { name: "canvas-alt", hex: "#EDE9E3", bg: "bg-canvas-alt" },
              { name: "rust", hex: "#B5614A", bg: "bg-rust" },
              { name: "rust-dark", hex: "#9A4D3A", bg: "bg-rust-dark" },
            ].map(({ name, hex, bg }) => (
              <div key={name}>
                <div className={`${bg} h-16 w-full mb-2`} />
                <p className="font-mono text-xs text-ink-secondary">{name}</p>
                <p className="font-mono text-xs text-ink-faint">{hex}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Color fields */}
        <div>
          <p className="font-mono text-xs text-ink-faint mb-4">
            Project color fields
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { name: "field-brown", hex: "#4A3728", bg: "bg-field-brown", label: "Arteïa" },
              { name: "field-sage", hex: "#4A5547", bg: "bg-field-sage", label: "eSIM" },
              { name: "field-tan", hex: "#C4A882", bg: "bg-field-tan", label: "eShare" },
              { name: "field-terracotta", hex: "#C96444", bg: "bg-field-terracotta", label: "Proximus+" },
            ].map(({ name, hex, bg, label }) => (
              <div key={name}>
                <div className={`${bg} h-16 w-full mb-2`} />
                <p className="font-mono text-xs text-ink-secondary">{name}</p>
                <p className="font-mono text-xs text-ink-faint">{hex}</p>
                <p className="font-mono text-xs text-ink-faint mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SectionHeader ─── */}
      <section>
        <SectionHeader label="SectionHeader component" className="mb-10" />

        <div className="space-y-8 max-w-2xl">
          <SectionHeader label="Selected work" />
          <SectionHeader label="Background" />
          <SectionHeader label="Currently" />
          <SectionHeader label="Product Design · Service Design · Strategy" />
        </div>
      </section>

      {/* ─── ProjectCard ─── */}
      <section>
        <SectionHeader label="ProjectCard component" className="mb-2" />
        <p className="text-sm text-ink-muted mt-3 mb-4">
          Work overview list — each project as a bordered row.
        </p>

        <div>
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
            description="Repositioned an NFT-dependent art platform around private collectors — redefining the product model, value proposition, and market focus rather than extending features that no longer served the right audience."
            href="/work/arteia"
          />
          <ProjectCard
            number="04"
            title="Rebuilding the Foundations of Proximus+"
            company="Proximus"
            year="2024–present"
            disciplines={["Product Design", "Systems"]}
            description="Redefining product management, support, and self-service for the future of Proximus+. Full case study on completion."
            status="in-progress"
          />
        </div>
      </section>

      {/* ─── MetricCard ─── */}
      <section>
        <SectionHeader label="MetricCard component" className="mb-10" />

        <p className="text-sm text-ink-muted mb-6">Light variant</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          <MetricCard
            value="+17%"
            label="Completed orders"
            context="End-to-end conversion improvement after ordering model redesign."
          />
          <MetricCard
            value="+15%"
            label="Identification completion"
            context="Drop-off at a critical step significantly reduced."
          />
          <MetricCard
            value="+100%"
            label="Self-installation adoption"
            context="Reducing retail channel dependency."
          />
        </div>

        <p className="text-sm text-ink-muted mb-6">Dark / color field variants</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricCard
            value="Days → Minutes"
            label="Time to activation"
            context="Physical QR post delivery replaced by in-app provisioning."
            fieldColor="sage"
          />
          <MetricCard
            value="14,000+"
            label="eSIM activations"
            context="In the first month following Quick Transfer launch."
            fieldColor="brown"
          />
          <MetricCard
            value="55 / day"
            label="Digital SIM swaps"
            context="Reached without store visits or technician involvement."
            dark={true}
          />
          <MetricCard
            value="+100%"
            label="Self-installation"
            context="Customers independently managing their switch in-app."
            fieldColor="terracotta"
          />
        </div>
      </section>

      {/* ─── PullQuote ─── */}
      <section>
        <SectionHeader label="PullQuote component" className="mb-10" />

        <div className="space-y-12 prose-width">
          <PullQuote
            quote="Design is not just about improving experiences, but about redefining them when the underlying assumptions no longer hold."
            attribution="Arteïa — Reflection"
          />
          <PullQuote
            quote="Design is not just about responding to user needs, but about anticipating them — especially when change is driven by forces beyond the user."
            attribution="eSIM — Reflection"
          />
          <PullQuote
            quote="Design is not just about reducing friction, but about aligning systems, strategy, and experience to create meaningful, scalable impact."
          />
        </div>
      </section>

      {/* ─── CaseStudyHeader ─── */}
      <section>
        <SectionHeader label="CaseStudyHeader component" className="mb-10" />

        <div className="border border-border p-8 sm:p-12">
          <CaseStudyHeader
            title="Scaling Onboarding for the eSIM Era"
            subtitle="How we built the foundations for eSIM at Proximus and enabled digital-first onboarding at scale."
            company="Proximus"
            role="Senior UX/UI & Service Designer"
            year="2023"
            disciplines={["Product Design", "Service Design", "Systems"]}
            principleQuote="Design is not just about responding to user needs, but about anticipating them — especially when change is driven by forces beyond the user."
          />
        </div>
      </section>

      {/* ─── DecisionBlock ─── */}
      <section>
        <SectionHeader label="DecisionBlock component" className="mb-10" />

        <div className="space-y-6">
          <DecisionBlock
            number={1}
            decision="Simplifying the identification step"
            question="The identification step had the highest drop-off in the funnel. But it was externally managed — we had limited control. What could we actually change?"
            tension="Presenting all available ID methods equally felt neutral, but it was burying the method that almost everyone used. Redesigning an external step risked scope creep."
            choice="Prioritise itsme as the default and primary option. Analysis of successful checkouts showed over 80% used itsme. We redesigned the step around the majority case, not the full range of edge cases."
            result="+15% increase in identification completion."
          />
          <DecisionBlock
            number={2}
            decision="Recentring the product around collectors"
            question="Should Arteïa continue serving galleries, collectors, and artists equally — or commit to a primary user and redesign around them?"
            tension="Galleries were the loudest stakeholder and had driven early product decisions. But they were not the majority user and the product was not meeting anyone's needs well."
            choice="Recentre the product entirely around collectors. Reframe galleries and artists as supporting roles within the collector's ecosystem — not co-equal users with equal interface weight."
            result="Defined a clear product direction and removed the structural ambiguity that was diluting every design decision."
          />
        </div>
      </section>

      {/* ─── FlowComparison ─── */}
      <section>
        <SectionHeader label="FlowComparison component" className="mb-10" />

        <div className="space-y-10">
          <FlowComparison
            before={{
              label: "Before — eSIM activation",
              steps: [
                { text: "Purchase mobile plan online" },
                { text: "Wait for QR code by post", annotation: "3–5 business days" },
                { text: "Receive physical QR code" },
                { text: "Manually scan and activate" },
                {
                  text: "Visit store to switch existing SIM to eSIM",
                  annotation: "Required for all existing customers",
                },
              ],
              metric: "Time to activation: days",
            }}
            after={{
              label: "After — eSIM activation",
              steps: [
                { text: "Purchase mobile plan online" },
                { text: "In-app eSIM provisioning", annotation: "Immediate — no postal delivery" },
                { text: "Guided activation with real-time feedback" },
                { text: "Self-service SIM → eSIM switch in-app" },
                { text: "Quick Transfer for device migration", annotation: "Device-to-device, no store required" },
              ],
              metric: "Time to activation: minutes",
            }}
          />

          <FlowComparison
            before={{
              label: "Before — eShare checkout",
              steps: [
                { text: "Enter address" },
                { text: "Browse full product catalogue", annotation: "All products visible regardless of eligibility" },
                { text: "Select product" },
                { text: "Discover fiber not available at address", isDropOff: true },
                { text: "Switch product, re-enter selection", isDropOff: true },
                { text: "External identification step", annotation: "Poorly optimised for mobile" },
                { text: "Confirm order" },
              ],
              metric: "Completion: declining",
            }}
            after={{
              label: "After — eShare checkout",
              steps: [
                { text: "Enter address with personalised check" },
                { text: "See only eligible, relevant products" },
                { text: "Select product" },
                { text: "itsme identification (prioritised)", annotation: "Used by 80%+ of successful checkouts" },
                { text: "Choose installation type" },
                { text: "Confirm order" },
              ],
              metric: "Completion: +17%",
            }}
          />
        </div>
      </section>

      {/* ─── Spacing ─── */}
      <section>
        <SectionHeader label="Spacing & layout" className="mb-10" />

        <div className="space-y-4 max-w-2xl">
          {[4, 6, 8, 10, 12, 16, 20, 24].map((size) => (
            <div key={size} className="flex items-center gap-6">
              <span className="font-mono text-xs text-ink-faint w-16">
                p-{size} / {size * 4}px
              </span>
              <div
                className="bg-rust/20 h-4"
                style={{ width: `${size * 4}px` }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* ─── Border radius ─── */}
      <section>
        <SectionHeader label="Border radius" className="mb-10" />

        <div className="flex items-end gap-8">
          {[
            { label: "none", cls: "rounded-none" },
            { label: "xs / 2px", cls: "rounded-xs" },
            { label: "sm / 4px", cls: "rounded-sm" },
          ].map(({ label, cls }) => (
            <div key={label} className="flex flex-col items-center gap-2">
              <div className={`w-16 h-16 bg-canvas-alt border border-border ${cls}`} />
              <span className="font-mono text-xs text-ink-faint">{label}</span>
            </div>
          ))}
        </div>
        <p className="text-sm text-ink-muted mt-6">
          The design system uses sharp corners by default. No decorative radius on cards or containers.
          Radius is reserved for pill tags or interactive elements if needed.
        </p>
      </section>

    </div>
  );
}
