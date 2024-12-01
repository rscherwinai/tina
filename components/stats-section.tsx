export function StatsSection() {
  return (
    <section className="py-20 bg-brand-primary text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold">{stat.value}</div>
              <div className="text-lg text-gray-300">{stat.label}</div>
              <p className="text-sm text-gray-400 max-w-xs mx-auto">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const stats = [
  {
    value: "$2B+",
    label: "Revenue Impact",
    description: "Generated for our clients through strategic initiatives and execution"
  },
  {
    value: "150+",
    label: "Enterprise Clients",
    description: "Trust us with their go-to-market strategy and execution"
  },
  {
    value: "94%",
    label: "Client Satisfaction",
    description: "Of our clients report exceeding their revenue goals"
  }
] 