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
  variant?: 'default' | 'career'
}

export default function Timeline({ items, variant = 'default' }: TimelineProps) {
  if (variant === 'career') {
    return (
      <div>
        {items.map((item, index) => {
          const isLast = index === items.length - 1

          return (
            <div
              key={item.id}
              className="grid grid-cols-1 gap-y-2 md:grid-cols-[240px_1.75rem_minmax(0,1fr)] md:gap-x-4"
            >
              <div className={`text-center ${isLast ? '' : 'md:pb-10'}`}>
                <p className="text-sm font-bold tracking-[0.22em] text-[#1b2744]">
                  {item.years}
                </p>
                <h3 className="mt-1 text-sm font-normal text-[#1b2744]">
                  {item.title}
                </h3>
              </div>

              <div className="hidden flex-col items-center md:flex">
                <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#1b2744]" />
                {!isLast && <div className="mt-1 w-px flex-1 bg-gray-300" />}
              </div>

              <div className={isLast ? '' : 'pb-8 md:pb-10'}>
                <p className="text-sm font-normal tracking-[0.2em] text-[#1b2744]">
                  {item.company || item.institution}
                </p>
                <p className="mt-3 text-sm font-normal leading-relaxed text-[#1b2744]">
                  {item.description}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <div className="space-y-8 md:space-y-12">
      {items.map((item) => (
        <div key={item.id} className="grid md:grid-cols-3 gap-6 md:gap-8">
          <div className="text-left">
            <p className="text-sm font-thin tracking-widest text-gray-600 mb-2">
              {item.years}
            </p>
            <h3 className="text-lg font-thin text-gray-900">{item.title}</h3>
          </div>

          <div className="hidden md:flex flex-col items-center">
            <div className="w-3 h-3 bg-gray-900 rounded-full mb-4"></div>
            <div className="flex-1 w-px bg-gray-300"></div>
          </div>

          <div className="text-left md:text-left">
            <p className="text-sm font-normal tracking-wide text-gray-900 mb-3">
              {item.company || item.institution}
            </p>
            <p className="text-sm font-light text-gray-700 leading-relaxed">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
