import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const methodologyPillars = [
  {
    title: "Means",
    description: "Offering Readiness for Value Creation and Capture?",
    items: [
      "Offering Overview (current & planned)",
      "Investment Framework",
      "Referenceable customer stories",
      "Distribution channels",
      "GTM Organization structure"
    ]
  },
  {
    title: "Market",
    description: "Resources Focused on Winnable Pursuits at Scale?",
    items: [
      "TAM/SAM with Segmentation & Prioritization",
      "Market Position analysis",
      "Opportunity scoring framework",
      "Product-market fit assessment"
    ]
  },
  {
    title: "Math",
    description: "Do the Numbers Add Up?",
    items: [
      "Market Size by segment",
      "Conversion metrics and timelines",
      "Average Deal Sizes",
      "Scalable cost modeling"
    ]
  },
  {
    title: "Message",
    description: "Relevant? Differentiated? Defensible? Aligned?",
    items: [
      "Relevant to targeted segments?",
      "Differentiated from competing alternatives",
      "Defensible for new reps?",
      "Aligned cross-functionally?"
    ]
  },
  {
    title: "Medium",
    description: "Enabled to Monetize the Message Effectively?",
    items: [
      "Enablement content and tools",
      "Brand building effectiveness",
      "Pipeline progression and channels",
      "Customer success operations"
    ]
  },
  {
    title: "Management",
    description: "Can we Execute with Discipline?",
    items: [
      "GTM Performance metrics",
      "Goals and compensation alignment",
      "Operating rhythm",
      "Technology stack optimization"
    ]
  }
]

export default function TAMPage() {
  return (
    <main className="min-h-screen py-16">
      {/* Hero Section */}
      <section className="relative min-h-[200px] bg-brand-primary flex items-center justify-center mb-16">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            TAM: Create and Implement
          </h1>
          <p className="text-xl md:text-2xl animate-fade-in-delay">
        Integrate your strategy with market execution.
          </p>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white pt-1 pb-1">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {/* Create TAM Section */}
            <div className="transform hover:scale-105 transition-all duration-300">
              <div className="bg-white rounded-2xl shadow-lg p-8 h-full border border-gray-100 hover:border-brand-primary/30">
                <h2 className="text-3xl font-bold text-brand-primary mb-8 pb-4 border-b border-brand-primary/20">
                  Bottom Up Market Sizing
                </h2>
                <ul className="space-y-6 text-lg">
                  {[
                    "Identify segments",
                    "Turn segments into account lists",
                    "Identify the value capture potential in the lists",
                    "Demarcate Serviceable Addressable Market (SAM) and Serviceable Obtainable Market (SOM)"
                  ].map((item, index) => (
                    <li key={index} 
                      className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg
                        transform transition-all duration-300
                        hover:bg-brand-primary/5 hover:translate-x-2">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-primary text-white flex items-center justify-center text-sm">
                        {index + 1}
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Deploy Section */}
            <div className="transform hover:scale-105 transition-all duration-300">
              <div className="bg-white rounded-2xl shadow-lg p-8 h-full border border-gray-100 hover:border-brand-primary/30">
                <h2 className="text-3xl font-bold text-brand-primary mb-8 pb-4 border-b border-brand-primary/20">
                  Deploy and Execute
                </h2>
                <ul className="space-y-6 text-lg">
                  {[
                    "Turn lists into territories for field execution",
                    "Turn lists into target lists for marketing programs",
                    "Create a bottoms up valuation for TAM, SAM, and SOM that can be used with investors"
                  ].map((item, index) => (
                    <li key={index} 
                      className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg
                        transform transition-all duration-300
                        hover:bg-brand-primary/5 hover:translate-x-2">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-primary text-white flex items-center justify-center text-sm">
                        {index + 1}
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 