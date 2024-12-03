import Image from "next/image"

export function HeroSection() {
  return (
    <section className="flex flex-col mt-10 pb-8 bg-gray-100">
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
      <div className="max-w-[1400px] mx-auto pt-8 px-6 py-3">
        <h1 className="text-6xl md:text-6xl font-bold text-brand-primary tracking-tight text-center mb-1">
          FUELING B2B REVENUE ENGINES
        </h1>
        <h2 className="text-2xl md:text-3xl text-center text-brand-primary mb-8 italic max-w-[1200px] mx-auto">
          Partnering exclusively with high-integrity, innovative organizations
        </h2>
        <p className="text-xl md:text-2xl text-gray-800 max-w-[900px] mx-auto leading-relaxed text-center">
          B2B Tracks emerged from our founders&apos; passion for harnessing technology&apos;s socio-economic potential. 
          We apply go-to-market strategy, execution, and messaging expertise to maximize innovation&apos;s impact. 
        </p>
      </div>
    </section>
  )
}

