interface TimelineEntry {
  id: number
  years: string
  title: string
  company?: string
  institution?: string
  description: string
}

interface TimelineProps {
  items: TimelineEntry[]
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="space-y-8 md:space-y-12">
      {items.map((item) => (
        <div key={item.id} className="grid md:grid-cols-3 gap-6 md:gap-8">
          {/* Left: Years and Title */}
          <div className="text-left">
            <p className="text-sm font-thin tracking-widest text-gray-600 mb-2">
              {item.years}
            </p>
            <h3 className="text-lg font-thin text-gray-900">
              {item.title}
            </h3>
          </div>

          {/* Center: Line and dot (desktop only) */}
          <div className="hidden md:flex flex-col items-center">
            <div className="w-3 h-3 bg-gray-900 rounded-full mb-4"></div>
            <div className="flex-1 w-px bg-gray-300"></div>
          </div>

          {/* Right: Company/Institution and Description */}
          <div className="text-left md:text-left">
            <p className="text-sm font-normal tracking-wide text-gray-900 mb-3">
              {item.company || item.institution}
            </p>
            <p className="text-sm font-light text-gray-700 leading-relaxed">
              {item.description}
            </p>
          </div>

          {/* Mobile line (mobile only) */}
          <div className="md:hidden absolute left-0 top-0 bottom-0 w-px bg-gray-300 ml-2"></div>
        </div>
      ))}
    </div>
  )
}
