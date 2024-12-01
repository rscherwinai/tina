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
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-[1400px] mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white">
              <CardContent className="p-6">
                <Quote className="h-6 w-6 text-brand-primary mb-3" />
                <p className="text-gray-700 mb-4 text-base italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center">
                  <div className="relative h-10 w-10 rounded-full overflow-hidden mr-3">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.role}</div>
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
    quote: "Russell is a dynamic executive leader, A-Player, mentor, and has my utmost respect. He is a polished, intelligent, knowledgeable, trustworthy, and driven sales and marketing pro. Russell has a solid track-record of success, a mind for strategy and can also get hyper-tactical",
    name: "Mike Cicollela",
    role: "VP Business Development",
    avatar: "/testimonials/avatar-1.jpg"
  },
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

