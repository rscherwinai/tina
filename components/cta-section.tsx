import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-24 bg-brand-primary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Accelerate Your Growth?
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Let&apos;s discuss how B2B Tracks can help you maximize your revenue potential and drive sustainable growth.
        </p>
        <Button 
          asChild
          size="lg"
          variant="default"
          className="bg-white text-brand-primary hover:bg-gray-100"
        >
          <Link href="/schedule">Schedule a Strategic Consultation</Link>
        </Button>
      </div>
    </section>
  )
}

