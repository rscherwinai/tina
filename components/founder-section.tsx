import Image from "next/image"

export function FounderSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <Image
              src="/founder.jpg"
              alt="Russell Scherwin on a mountain peak"
              fill
              className="object-cover"
              priority
            />
          </div>
          
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-brand-primary/10 rounded-full">
              <h2 className="text-brand-primary font-medium">MEET THE FOUNDER</h2>
            </div>
            
            <h3 className="text-4xl font-bold text-gray-900">RUSSELL SCHERWIN</h3>
            
            <div className="space-y-4 text-gray-600 text-lg">
              <p>
                A former CRO and CMO, Russell has a passion for growing innovative businesses. 
                A high-energy and high-integrity operator, he&apos;s grown businesses from $2M-$14M, 
                $45-$77M, and $324-$391M.
              </p>
              
              <p>
                Russell created B2B Tracks as an outlet for his passion for go-to-market and innovation. 
                He takes pride in aligning sales, marketing, product, and CS with buyer-centric 
                go-to-market messaging and motions.
              </p>
              
              <p>
                A computer scientist by training, Russell learned early on that creating and capturing 
                value from technology innovation was his passion. Since then, he&apos;s led product, sales, 
                marketing, and CS teams.
              </p>
              
              <p>
                He gets great joy partnering with Force Management and their clients, facilitating 
                Command of the Message and Command of the Sale transformational programs. In this 
                capacity, he&apos;s helped more than 30 B2B organizations and thousands of GTM leaders 
                and representatives transform their go-to-market execution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 