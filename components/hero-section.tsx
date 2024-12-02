import Image from "next/image"

export function HeroSection() {
  return (
    <section className="flex flex-col mt-24">
      {/* Hero Image Container */}
      <div className="relative h-[30vh] w-full">
        <Image
          src="/hero-image.jpg"
          alt="B2B Tracks Conference"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Text Content */}
      <div className="max-w-[1400px] mx-auto px-6 py-3">
        <h1 className="text-6xl md:text-6xl font-bold text-brand-primary tracking-tight text-center mb-6">
          FUELING B2B REVENUE ENGINES
        </h1>
        <p className="text-xl md:text-1.4xl text-gray-800 max-w-[1200px] mx-auto leading-relaxed text-center">
          B2B Tracks emerged from our founders&apos; deep-seated passion for harnessing technology&apos;s socio-economic potential. 
          We apply go-to-market strategy, execution, and messaging expertise to maximize innovation&apos;s impact. 
          Our partnerships are exclusively with high-integrity, innovative organizations in the pursuit of monetizing high-impact, high-value offerings.
        </p>
      </div>
    </section>
  )
}

