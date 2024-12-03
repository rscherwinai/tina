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

export default function CoachingPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      
      <section className="relative min-h-[300px] bg-brand-primary flex items-center justify-center py-12 pb-0">
  {/* Gradient Background */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20" />
  
  {/* Content */}
  <div className="relative z-10 container mx-auto px-4 text-center text-white">
    <div className="max-w-6xl mx-auto">
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold leading-none">
        Leadership and Sales Coaching
      </h1>
      {/* Subheading */}
      <p className="text-xl md:text-2xl mt-4">
        Take your game to the next level with personalized guidance and support
      </p>
    </div>
  </div>
</section>




      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              <div className=" transition-all duration-300">
                <h2 className="text-3xl font-bold text-brand-primary mb-4">
                  Let's Connect and Grow Together
                </h2>
                <p className="text-lg text-gray-700">
                 
                </p>
              </div>
              <div >
                <h3 className="text-xl font-semibold text-brand-primary mb-3">
                  Who This Is For
                </h3>
                <p className="text-lg text-gray-700">
                  Individuals hungry to grow, and who relentlessly balance ego and humility.  
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl transform hover:scale-105 transition-all duration-300">
                <p className="text-lg text-gray-700 italic">
                  "Humility is growth's secret. I believe my impact on others is how my life will be measured."
                </p>
              </div>

              
              <div>
                <h3 className="text-xl font-semibold text-brand-primary mb-3">
                Investment
                </h3>
                <p className="text-lg text-gray-700">
                Coaching rates will depend upon your goals, my energy required, and how much I believe I'll learn from teaming.
                </p>
              </div>



              
            </div>

            {/* Right Column - Image */}
            <div className="relative h-[400px] transform hover:scale-105 transition-all duration-300">
              <div className="rounded-2xl overflow-hidden h-full w-full shadow-xl">
                <Image
                  src="/humble.jpg"
                  
                  alt="Humble - colorful letters on canvas"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 