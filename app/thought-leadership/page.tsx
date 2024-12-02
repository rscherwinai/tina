import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { LogoGrid } from "@/components/logo-grid"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"
import { StatsSection } from "@/components/stats-section"
import { CalendarWidget } from "@/components/calendar-widget"
import { Testimonial } from "@/components/interfaces/testimonial"
/* test */
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

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ServicesSection />
      <LogoGrid />
      <StatsSection />
      <TestimonialsSection testimonials={testimonials} />
      {/* <CalendarWidget /> */}
      <CTASection />
    </div>
  )
}

