import { CheckCircle2 } from "lucide-react"

export function WhyChooseSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-brand-primary mb-12">
          Why Partner With B2B Tracks
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Deep Experience Card */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <CheckCircle2 className="w-6 h-6 text-brand-primary mr-2" />
              <h3 className="text-xl font-semibold text-gray-900">Execution Track Record</h3>
            </div>
            <ul className="space-y-3 text-gray-600">
              <li>• Grew SaaS business from $2.4M to $14M as General Manager</li>
              <li>• Grew enterprise sales from $50M to $77M as VP Sales</li>
              <li>• Grew Watson Commerce business from $322M-$394M as CMO</li>
            </ul>
          </div>

          {/* Strategic Insight Card */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <CheckCircle2 className="w-6 h-6 text-brand-primary mr-2" />
              <h3 className="text-xl font-semibold text-gray-900">Strategic Insight</h3>
            </div>
            <p className="text-gray-600">
              Our proprietary 6M™ methodology distills 15 years of GTM excellence. We identify crucial opportunities in minutes that others miss in weeks, focusing only on actionable insights that drive real results.
            </p>
          </div>

          {/* Authentic Partnership Card */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <CheckCircle2 className="w-6 h-6 text-brand-primary mr-2" />
              <h3 className="text-xl font-semibold text-gray-900">Authentic Partnership</h3>
            </div>
            <p className="text-gray-600">
              Having served as CMO, CRO, and team leader across multiple industries globally, we truly understand your challenges. We balance process and content to deliver meaningful outcomes aligned with your mission.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
