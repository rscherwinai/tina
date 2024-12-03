import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { WhyChooseSection } from "@/components/why-choose-section"

const messagingSteps = [
  {
    step: "1",
    title: "Market Opportunity",
    description: "Business and Market Review to identify opportunities and strategies for differentiation."
  },
  {
    step: "2",
    title: "Buying Audiences",
    description: "Identifying prioritized segments and audiences, and their drivers."
  },
  {
    step: "3",
    title: "Differentiated Value",
    description: "Define offering capabilities and how they attach to the targeted audience’s drivers."
  },
  {
    step: "4",
    title: "Start with Why",
    description: "Inspired by Simon Sinek, get to the heart of your DNA and communicate it for impact."
  },
  {
    step: "5",
    title: "Strategic Narrative",
    description: "Tell a winning story.  For marketing to drive campaigns and the field to engage buyers."
  },
  {
    step: "6",
    title: "Field Activation",
    description: "Activate messaging to drive needed outcomes. For you and your buyers."
  }
]

export default function MessagingPositioningPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[400px] md:min-h-[350px] bg-brand-primary flex items-center justify-center pt-16 md:pt-20">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center text-white max-w-4xl mx-auto space-y-4 md:space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
              Compelling Messaging
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Create messaging that is relevant to your audience, differentiated from the competition, defensible by market-facing representatives, and aligned cross-functionally.
            </p>
          </div>
        </div>
      </section>

      {/* Messaging Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-brand-primary mb-12">
            The Compelling Messaging Workshop Process
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {messagingSteps.map((step, index) => (
              <div key={index} className="text-center bg-white shadow-md rounded-lg p-6">
                <h3 className="text-2xl font-bold text-brand-primary mb-4">
                  {step.step} - {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      {/* <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-brand-primary mb-12">
            Deliverables
          </h2>
          <ul className="list-disc list-inside text-gray-700 max-w-3xl mx-auto space-y-4">
            <li>Create a compelling message that is relevant, differentiated, and defensible.</li>
            <li>Align messaging across sales, marketing, and product management teams.</li>
            <li>Develop a strategic narrative that drives customer engagement and trust.</li>
            <li>Deliver actionable messaging frameworks for campaigns and buyer conversations.</li>
          </ul>
        </div>
      </section> */}

      {/* Why Choose Us */}
    
      <WhyChooseSection />
    </main>
  )
  
}
