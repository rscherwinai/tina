import { ArrowRight, Rocket, Target, Users } from "lucide-react"
import Link from "next/link"

export function ServicesSection() {
  return (
    <section className="py-24 bg-gray-50 pb-6 pt-6">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-primary pb-8 pt-8">
          Go-to-Market Strategy, Execution, Messaging
        </h2>
        
        <div className="grid md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative p-8 bg-gray-50 rounded-xl hover:bg-brand-primary transition-all duration-300"
            >
              <div className="mb-4 text-brand-primary group-hover:text-white">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 group-hover:text-white">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 group-hover:text-gray-200">
                {service.description}
              </p>
              <Link 
                href={service.link}
                className="inline-flex items-center text-brand-primary group-hover:text-white"
              >
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const services = [
  {
    icon: <Rocket className="h-8 w-8" />,
    title: "Go-to-Market Strategy",
    description: "Develop comprehensive strategies that align your innovation with market demands and opportunities.",
    link: "/offerings#strategy"
  },
  {
    icon: <Target className="h-8 w-8" />,
    title: "Revenue Execution",
    description: "Transform strategy into action with our proven methodologies for revenue generation and growth.",
    link: "/offerings#execution"
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Messaging & Positioning",
    description: "Craft compelling narratives that resonate with your target audience and drive engagement.",
    link: "/offerings#messaging"
  }
] 