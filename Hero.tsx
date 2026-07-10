import { Navbar } from "@/components/Navbar"
import { Button } from "@/components/ui/button"

const WHATSAPP_URL =
  "https://wa.me/919329013989?text=Hi%20Krishna%2C%20I%20want%20to%20build%20a%20website"

const VIDEO_SRC =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"

function scrollToServices() {
  document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
}

function openWhatsApp() {
  window.open(WHATSAPP_URL, "_blank", "noopener,noreferrer")
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full flex-col overflow-hidden"
    >
      <video
        className="absolute inset-0 z-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        src={VIDEO_SRC}
      />

      <Navbar />

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pt-32 pb-40 py-[90px] text-center">
        <h1
          className="max-w-7xl animate-fade-rise text-5xl font-normal leading-[0.95] tracking-[-2.46px] sm:text-7xl md:text-8xl"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Engineering{" "}
          <em className="not-italic text-muted-foreground">
            Digital Dominance
          </em>{" "}
          for those who build{" "}
          <em className="not-italic text-muted-foreground">beyond limits.</em>
        </h1>

        <p className="mt-8 max-w-2xl animate-fade-rise-delay text-base leading-relaxed text-muted-foreground sm:text-lg">
          High-performance digital systems, lightning-fast deployment, and
          conversion-focused design. Built for creators who refuse average.
        </p>

        <Button
          variant="glass"
          size="hero"
          className="mt-12 animate-fade-rise-delay-2"
          onClick={scrollToServices}
        >
          Begin Journey
        </Button>

        <Button
          variant="glass"
          size="hero"
          className="mt-4 animate-fade-rise-delay-2"
          onClick={openWhatsApp}
        >
          Chat on WhatsApp
        </Button>
      </div>

      <div className="absolute inset-x-0 bottom-6 z-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 px-6 text-center text-[11px] uppercase tracking-[0.2em] text-muted-foreground sm:bottom-10 sm:text-xs">
        <span>Load Time: &lt; 1s</span>
        <span className="hidden h-1 w-1 rounded-full bg-muted-foreground/30 sm:block" />
        <span>Uptime: 99.9%</span>
        <span className="hidden h-1 w-1 rounded-full bg-muted-foreground/30 sm:block" />
        <span>Deployment: Global Edge</span>
      </div>
    </section>
  )
}
