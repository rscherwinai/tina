import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const logos = [
  { name: "Digital Asset", src: "/logos/digital-asset.png" },
  { name: "Figma", src: "/logos/figma.png" },
  { name: "Gainsight", src: "/logos/gainsight.png" },
  { name: "Apollo.io", src: "/logos/apollo.png" },
  { name: "T2 Biosystems", src: "/logos/t2-biosystems.png" },
  { name: "Chainalysis", src: "/logos/chainalysis.png" },
  { name: "AlertMedia", src: "/logos/alert-media.png" },
  { name: "nCino", src: "/logos/ncino.png" },
  { name: "Capintel", src: "/logos/capintel.png" },
  { name: "Synopsys", src: "/logos/synopsys.png" },
  { name: "UL", src: "/logos/ul.png", scale: "large" },
  { name: "Vanta", src: "/logos/vanta.png" },
  { name: "Lacework", src: "/logos/lacework.png" },
  { name: "Starburst", src: "/logos/starburst.png", scale: "large" },
  { name: "Mark43", src: "/logos/mark43.png" },
  { name: "Betterworks", src: "/logos/betterworks.png" },
  { name: "Aptean", src: "/logos/aptean.png" },
  { name: "ThoughtLogic", src: "/logos/thoughtlogic.png" },
  { name: "Foursquare", src: "/logos/foursquare.png" },
  { name: "Monday.com", src: "/logos/monday.png" },
  { name: "BFG", src: "/logos/blue-force-gear.svg" },
]

export function LogoGrid() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-6">
        <Card className="border-none shadow-none bg-transparent">
          <CardContent className="p-0">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-brand-primary mb-3">
                Trusted by Industry Leaders
              </h2>
              <p className="text-gray-600">
                Partnering with innovative organizations to drive meaningful impact
              </p>
            </div>
            <div 
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 
                gap-x-8 gap-y-10 items-center justify-items-center"
            >
              {logos.map((logo) => (
                <div
                  key={logo.name}
                  className={`relative w-full ${logo.scale === "large" ? "h-10" : "h-8"}`}
                >
                  <Image
                    src={logo.src}
                    alt={`${logo.name} logo`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 45vw, 
                           (max-width: 768px) 30vw, 
                           (max-width: 1024px) 25vw, 
                           15vw"
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

