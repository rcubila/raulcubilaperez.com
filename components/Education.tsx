import Timeline from './Timeline'
import { educationData } from '@/data/education'

export default function Education() {
  return (
    <section id="education" className="bg-gray-100 py-20 lg:py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl lg:text-5xl font-thin text-center text-gray-900 mb-16 tracking-widest uppercase">
          Education
        </h2>

        <Timeline items={educationData} />
      </div>
    </section>
  )
}
