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

export default function GtmAuditPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - reduced height */}
      <section className="relative min-h-[400px] md:min-h-[350px] bg-brand-primary flex items-center justify-center pt-16 md:pt-20">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center text-white max-w-4xl mx-auto space-y-4 md:space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
              Messaging Audit
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
             Start with Why (Simon Sinek Motivated)
            </p>
            <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
             Devise messaging that is relevant, differentiated, defensible, and cross-functionally aligned.
             And is actionable by sales/CS as conversations. And actionalble by marketing in campaigns.
            </p>
          </div>
        </div>
      </section>

      {/* 6M Methodology Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-brand-primary mb-12">
            Powered by the 6M GTM Methodology
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {methodologyPillars.map((pillar, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-brand-primary mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {pillar.description}
                  </p>
                  <ul className="space-y-2">
                    {pillar.items.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-brand-primary mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
} 