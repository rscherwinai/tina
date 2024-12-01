import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { LogoGrid } from "@/components/logo-grid"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"
import { StatsSection } from "@/components/stats-section"
import { CalendarWidget } from "@/components/calendar-widget"

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ServicesSection />
      <LogoGrid />
      <StatsSection />
      <TestimonialsSection />
      {/* <CalendarWidget /> */}
      <CTASection />
    </div>
  )
}

