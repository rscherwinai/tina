import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"
import { Testimonial } from "./interfaces/testimonial"

interface TestimonialsSectionProps {
  testimonials: Testimonial[]
}

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  console.log('Testimonials received:', testimonials);
  
  if (!testimonials) {
    return null;
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-brand-primary mb-12">
          What Our Clients Say
        </h2>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 place-items-center">
            {testimonials.map((testimonial, index) => (
              <div key={index} 
                className="relative bg-white rounded-3xl p-8 max-w-md w-full
                  transform transition-all duration-300 hover:scale-105
                  shadow-[0_0_20px_rgba(0,0,0,0.1)]
                  hover:shadow-[0_0_30px_rgba(20,20,150,0.2)]
                  border border-gray-100">
                
                {/* Avatar centered at top */}
                <div className="flex justify-center -mt-12 mb-6">
                  <div className="w-24 h-24 rounded-full border-4 border-white overflow-hidden
                    ring-4 ring-brand-primary shadow-xl
                    transform transition-all duration-300 hover:scale-110">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={96}
                      height={96}
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Testimonial content */}
                <div className="text-center space-y-4">
                  <p className="text-gray-600 italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  
                  {/* Name and role */}
                  <div className="pt-4">
                    <h3 className="font-bold text-lg text-brand-primary">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-600">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

