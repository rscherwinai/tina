import { TestimonialsSection } from '@/components/testimonials-section'
import VideoShowcase from '@/components/keynote-speaking/video-showcase'
import { Testimonial } from '@/components/interfaces/testimonial'

const testimonials: Testimonial[] = [
  {
    quote: "Russell, I can't begin to tell you how much I appreciate your efforts this week! I've been through many sales trainings and GoM was the best I've ever attended, much due to you. My team is pumped!",
    name: "Denny Fischer",
    role: "Sales Director, Mark43",
    avatar: "/images/testimonials/denny-fischer.jpg"
  },
  {
    quote: "I was not exaggerating when I told you, and several others, that I have been in many training classes over the years, and this will absolutely stand out as the best one, bar none.",
    name: "Stephen Sunshine",
    role: "RVP Sales, Alert Media",
    avatar: "/images/testimonials/stephen-sunshine.jpg"
  },
  {
    quote: "Russell, I teared up at the end of your session b/c you reminded me of why I loved sales strategy so much. Thank you for your warmth, the kindness you exuded, and the passion you shared.",
    name: "Joyce Yi",
    role: "Sales Leader, Gainsight",
    avatar: "/images/testimonials/joyce-yi.jpg"
  }
]

const videos = [
  {
    title: "Disrupt or be Disrupted: Retail Global Austrailia",
    youtubeUrl: "https://youtu.be/WTS5jO-ckBs"
  },
  {
    title: "B2B Commerce: 5 Critical Considerations",
    youtubeUrl: "https://www.youtube.com/watch?v=BfS21X5ZtuI"
  }
  
]

export default function KeynoteSpeakingPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px]">
        <div className="absolute inset-0">
          <img
            src="/keynote/hero.jpg" 
            alt="Keynote speaking event"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/50 flex items-end justify-center pb-14">
          <h1 className="text-5xl font-bold text-white text-center">
            MAXIMIZE EVENT IMPACT
          </h1>
        </div>
      </section>

      {/* Subheading Section */}
      <section className="py-12 text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold mb-4">
            Top Ranked Speaker on Multiple Continents
          </h2>
          <p className="text-xl text-gray-600">
            Perfect for kickoffs and all sales and marketing events
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection testimonials={testimonials} />

      {/* Video Showcase */}
      <VideoShowcase videos={videos} />
    </main>
  )
}
