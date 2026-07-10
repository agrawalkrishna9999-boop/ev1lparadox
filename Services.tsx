import { Button } from "@/components/ui/button"

interface Tier {
  name: string
  price: string
  features: string[]
}

const TIERS: Tier[] = [
  {
    name: "Vanguard",
    price: "₹1,499",
    features: [
      "1-Page Landing",
      "72hr Delivery",
      "Netlify Deployment",
      "Basic CRM",
    ],
  },
  {
    name: "Centurion",
    price: "₹2,999",
    features: ["5-Page Suite", "WhatsApp CRM", "Premium UI/UX", "SEO Ready"],
  },
  {
    name: "Apex",
    price: "₹4,999+",
    features: [
      "Custom Branding",
      "Firebase Backend",
      "SEO Mastery",
      "Priority Support",
    ],
  },
]

function whatsappLinkFor(tier: string, price: string) {
  const message = `Hi Krishna, I'm interested in the ${tier} package (${price}).`
  return `https://wa.me/919329013989?text=${encodeURIComponent(message)}`
}

export function Services() {
  return (
    <section id="services" className="relative z-10 px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            className="text-4xl text-foreground sm:text-5xl"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Choose your{" "}
            <em className="not-italic text-muted-foreground">arsenal.</em>
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Three tiers. One standard: no average work.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {TIERS.map((tier) => (
            <div
              key={tier.name}
              className="liquid-glass flex flex-col rounded-2xl p-8"
            >
              <h3
                className="text-2xl text-foreground"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                {tier.name}
              </h3>
              <p className="mt-2 text-3xl font-normal text-foreground">
                {tier.price}
              </p>

              <ul className="mt-8 flex-1 space-y-3">
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-sm text-muted-foreground"
                  >
                    <span className="h-1 w-1 shrink-0 rounded-full bg-muted-foreground/50" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                variant="glass"
                size="card"
                className="mt-8"
                onClick={() =>
                  window.open(
                    whatsappLinkFor(tier.name, tier.price),
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
              >
                Choose {tier.name}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
