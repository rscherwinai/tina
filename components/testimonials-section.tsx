import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-primary mb-16">
          What Our Clients Say
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white">
              <CardContent className="p-8">
                <Quote className="h-8 w-8 text-brand-primary mb-4" />
                <p className="text-gray-700 mb-6 text-lg italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

const testimonials = [
  {
    quote: "B2B Tracks transformed our go-to-market strategy, resulting in a 3x increase in qualified opportunities within six months.",
    name: "Sarah Chen",
    role: "Chief Revenue Officer, TechCorp",
    avatar: "/testimonials/avatar-1.jpg"
  },
  {
    quote: "Their deep understanding of B2B dynamics and innovative approach to revenue generation has been instrumental to our growth.",
    name: "Michael Rodriguez",
    role: "VP of Sales, InnovateNow",
    avatar: "/testimonials/avatar-2.jpg"
  }
]

