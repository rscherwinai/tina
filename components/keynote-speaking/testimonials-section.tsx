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
    quote: "As someone who’s experienced 3 days with Russell …  I came in a skeptic, especially because of the price of Russell.  I came out astonished about how many small things that, maybe, seem trivial to me, when put into a process made total sense and already applied some of them myself talking to customers, and it does work.",
    name: "",
    role: "Chief Executive Officer",
    avatar: "/testimonials/avatar-1.jpg"
  },
  {
    quote: "Russell knows his stuff and acts on it. If you want a no-nonsense guy who cuts through the extraneous stuff and gets the job done, he's the one you want. He and I worked very closely together, and I could count on him to help me think through plans, politely challenge me where needed, and execute once the decisions were made.",
    name: "Jake Freivald",
    role: "VP of Product Marketing",
    avatar: "/testimonials/avatar-2.jpg"
  }
]

