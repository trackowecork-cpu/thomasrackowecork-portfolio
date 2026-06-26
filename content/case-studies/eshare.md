---
title: "Recovering Declining eShare"
subtitle: "How we redesigned the end-to-end ordering experience — simplifying journeys, addressing structural points of friction, and realigning the experience with user behaviour and business strategy."
company: "Proximus"
role: "UX/UI & Service Designer"
timeframe: "2023–2025"

heroImage: "/assets/case-studies/eshare/eshare_hero_7.png"
heroImageAlt: "eShare digital ordering experience"
heroBackground: "#0E0D0C"

status: null
inProgressBadge: false

overview: |
  Proximus was experiencing a sustained decline in its digital sales share (eShare), alongside an increase in support calls, signalling a breakdown in the digital ordering experience. As customer expectations shifted toward seamless, self-service journeys, the existing checkout remained fragmented, inconsistent, and misaligned with both user behaviour and business goals.

  I led the strategy and design of four core threads of the new ordering model: aligning the full funnel with Proximus's fibre-first strategy, redesigning identification around the most digital-first method, defining the patterns that let the checkout scale across product increments, and leading the self-installation initiative. This work spanned service design, product strategy, and detailed UX, in close collaboration with product, engineering, analysts, and the wider design team.

  This led to a more coherent, scalable ordering model, improving conversion, reducing reliance on support channels, and repositioning digital as the primary sales channel.

challenge:
  body: |
    The decline in eShare was not driven by a single issue, but by a structural mismatch between the digital experience, user expectations, and business strategy. The ordering flows were inconsistent across products and dense with conditional logic, producing journeys that were exhausting to move through. Most users hit the same kinds of friction in different places, depending on what they were trying to buy.

    Fibre-first strategy was not translated into the digital journey. Users would enter the flow expecting one product and find themselves switched to another mid-funnel — a recurring source of drop-off, particularly for the large share of users who weren't fibre-eligible.

    Several critical steps in the funnel were performing poorly. Identification and installation, in particular, were among the highest sources of drop-off, friction, and support demand. The causes varied across them, and neither lent itself to straightforward optimisation.
    
  items: []
  statement: "The challenge was not to optimise the checkout, but to redefine the ordering model to improve conversion while aligning with both user behaviour and business strategy."

solution:
  intro: |
    We aligned on transforming the ordering model, rather than continuing to optimise individual flows. The objective was to create a simpler, more coherent system that could support both conversion and long-term scalability.
    
    The redesign was anchored in a clear principle: radical simplification. Rather than designing for edge cases, the focus shifted to the majority of users — removing unnecessary complexity, aligning flows with mental models, and creating a more predictable and consistent experience.
  decisions:
    - n: "01"
      title: "Aligning product strategy with the experience"
      body: "Rather than framing the experience around fibre eligibility, I designed a personalised entry point through a reworked address check, allowing users to see relevant offers from the start and eliminating disruptive product switches later in the funnel — a major source of drop-off in the legacy experience. This kept the experience aligned with the fibre-first strategy while avoiding the friction that had previously affected non-fibre users."
      visual:
        src: "/assets/case-studies/eshare/Alpha/eshare_decision_01.png"
        alt: "Personalised address check entry point showing relevant offers from the start"
        layout: "full-natural"
    - n: "02"
      title: "Redesigning identification around the most digital-first method"
      body: "Analysing usage patterns showed that over 80% of successful checkouts used itsme, Belgium's leading digital ID method. I led the case for redesigning the step around itsme as the default — both as a design decision and as an organisational one, since the step had previously been built and maintained by an external vendor. Bringing the work into the internal team gave us direct control over performance and iteration. The redesigned step improved clarity and control and made what had been an opaque part of the journey continuously optimisable."
      visual:
        src: "/assets/case-studies/eshare/Alpha/eshare_decision_03.png"
        alt: "Redesigned itsme identification step with improved clarity and control"
        layout: "full-natural"
    - n: "03"
      title: "Building patterns that scale across products"
      body: "The experience had evolved into a fragmented ecosystem, with inconsistent patterns across acquisition, checkout, and customer journeys. We introduced a unified design framework and a set of reusable patterns, simplifying content and removing underperforming elements based on data analysis. The framework was built to scale: the same patterns now carry packs, mobile, and standalone internet flows across both mass-market and small-enterprise customers, from upper funnel to checkout and order confirmation making future products and offers integrable without rebuilding the experience each time."
      visual:
        src: "/assets/case-studies/eshare/Alpha/eshare_decision_02.png"
        alt: "Unified design framework showing consistent patterns across the ordering journey"
        layout: "full-natural"
    - n: "04"
      title: "Leading self-service for installation"
      body: "Installation was a major source of friction for fibre customers facing long delays and uncertainty. I initiated the work on a self-install option, opening the discussions with analysts to understand the backend logic, running workshops to align the team, and shaping how and when the option should surface so it would feel like a confident choice rather than a fallback. The resulting model only presented self-install when valid, combined clearer communication with improved system logic, and aligned with the wider operational strategy to reduce assisted-channel costs."
      visual:
        src: "/assets/case-studies/eshare/Alpha/eshare_decision_04.png"
        alt: "Self-installation flow showing eligibility-aware options and step-by-step guidance"
        layout: "full-natural"

impact:
  intro: "This resulted in a redefined digital ordering model — improving conversion, reducing friction, and restoring the role of digital as a primary sales channel. Beyond performance, the initiative introduced a more collaborative governance model, strengthening alignment across product, tech, and design, and positioning design as a strategic partner in shaping business outcomes — not just execution."
  metrics:
    - value: "+17%"
      label: "Completed orders"
      note: "Improved end-to-end conversion"
    - value: "+15%"
      label: "Identification completion"
      note: "Drop-off at a critical step reduced"
    - value: "+100%"
      label: "Self-installation adoption"
      note: "Accelerating self-service behaviours"
  items: []
  statement: "The redesign also led to a measurable reduction in support calls — a signal of clearer journeys, greater customer confidence, and reduced reliance on assisted channels."

pullQuote: "What looked like a conversion problem turned out to be a product strategy, organisational, and vendor problem. Conversion was where it showed up, not where it lived."

reflection: |
  Proximus' eShare decline read a checkout issue; the funnel was leaking, support calls were rising, and the digital channel was underperforming. Working through it surfaced a different picture. Users were being downgraded mid-flow because fibre-first strategy lived in commercial decisions but not in product structure.

  A critical conversion step was opaque and unimproveable because it was built and maintained by an external vendor. Installation friction was a journey design problem masquerading as a logistics one. None of these were checkout issues. They were upstream issues that the checkout was inheriting.

  The project's real work was tracing the symptoms back to their sources and addressing them where they actually lived.

visuals:
  - src: "/assets/case-studies/eshare/Alpha/eshare_challenge_5.png"
    alt: "Illustration of the eShare conversion funnel showing fibre eligibility being revealed too late in the journey"
    layout: "full"
    placement: "after-challenge"

nextProject:
  title: "Scaling Onboarding for the eSIM Era"
  slug: "esim"
  company: "Proximus"
  timeframe: "2023"
---
