import Image from "next/image"

const logos = [
    { name: "Monday.com", src: "/logos/monday.png", size: "normal" },
    { name: "Digital Asset", src: "/logos/digital-asset.png", size: "normal" },
  { name: "Figma", src: "/logos/figma.png", size: "normal" },
  { name: "Gainsight", src: "/logos/gainsight.png", size: "normal" },
  { name: "Apollo.io", src: "/logos/apollo.png", size: "normal" },
  { name: "T2 Biosystems", src: "/logos/t2-biosystems.png", size: "normal" },
  { name: "Chainalysis", src: "/logos/chainalysis.png", size: "normal" },
  { name: "AlertMedia", src: "/logos/alert-media.png", size: "normal" },
  { name: "Capintel", src: "/logos/capintel.png", size: "normal" },
  { name: "Synopsys", src: "/logos/synopsys.png", size: "normal" },
  { name: "nCino", src: "/logos/ncino.png", size: "normal" },
  { name: "UL", src: "/logos/ul.png", size: "large" },
  { name: "Vanta", src: "/logos/vanta.png", size: "normal" },
  { name: "Lacework", src: "/logos/lacework.png", size: "normal" },
  { name: "Starburst", src: "/logos/starburst.png", size: "large" },
  { name: "Mark43", src: "/logos/mark43.png", size: "normal" },
  { name: "Betterworks", src: "/logos/betterworks.png", size: "normal" },
  { name: "Aptean", src: "/logos/aptean.png", size: "normal" },
  { name: "ThoughtLogic", src: "/logos/thoughtlogic.png", size: "normal" },
  { name: "Foursquare", src: "/logos/foursquare.png", size: "normal" },
  { name: "BFG", src: "/logos/blue-force-gear.svg", size: "normal" },
  { name: "Envista", src: "/logos/envista.png", size: "large" }
]

export function LogoGrid() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-primary mb-8">
          Trusted By Industry Leaders
        </h2>
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-8 gap-4">
          {logos.map((logo) => (
            <div key={logo.name} className="flex items-center justify-center p-3">
              <div className={`relative ${logo.size === 'large' ? 'w-[160px]' : 'w-[100px]'} h-10`}>
                <Image
                  src={logo.src}
                  alt={logo.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

