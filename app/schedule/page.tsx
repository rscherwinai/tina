import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { LogoGrid } from "@/components/logo-grid"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"
import { StatsSection } from "@/components/stats-section"
import { CalendarWidget } from "@/components/calendar-widget"
import { Testimonial } from "@/components/interfaces/testimonial"
import Image from "next/image"

const testimonials: Testimonial[] = [
  {
    quote: "Russell is a dynamic executive leader, A-Player, mentor, and has my utmost respect. He is a polished, intelligent, knowledgeable, trustworthy, and driven sales and marketing pro.",
    name: "Mike Cicollela",
    role: "VP Business Development",
    avatar: "/testimonials/avatar-1.jpg"
  },
  {
    quote: "As someone who's experienced 3 days with Russell …  I came in a skeptic, especially because of the price of Russell.  I came out astonished about how many small things that, maybe, seem trivial to me, when put into a process made total sense.",
    name: "",
    role: "Chief Executive Officer",
    avatar: "/testimonials/avatar-1.jpg"
  },
  {
    quote: "Russell knows his stuff and acts on it. If you want a no-nonsense guy who cuts through the extraneous stuff and gets the job done, he's the one you want.",
    name: "Jake Freivald",
    role: "VP of Product Marketing",
    avatar: "/testimonials/avatar-2.jpg"
  }
]

export default function SchedulePage() {
  return (
    <main className="min-h-screen py-16">
      {/* Hero Section */}
      <section className="relative min-h-[200px] md:min-h-[200px] bg-brand-primary flex items-center justify-center">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 container mx-auto px-100 flex items-center justify-center h-full">
          <div className="text-center text-white max-w-4xl mx-auto space-y-4 md:space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
              Let's Chat
            </h1>
          </div>
        </div>
      </section>

      {/* Calendar Section - reduced padding */}
      <section className="max-w-7xl mx-auto px-4 py-6">
        <div className="relative overflow-hidden pt-[56.25%] rounded-lg shadow-lg">
          <iframe 
            src="https://calendarbridge.com/book/rscherwin/"
            className="absolute top-0 left-0 w-full h-full border-0"
            allow="camera; microphone; fullscreen; display-capture"
          />
        </div>
      </section>
    </main>
  )
}

