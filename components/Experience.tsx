import Timeline from './Timeline'
import { experienceData } from '@/data/experience'

export default function Experience() {
  return (
    <section id="experience" className="bg-white py-20 lg:py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl lg:text-5xl font-thin text-center text-gray-900 mb-16 tracking-widest uppercase">
          Experience
        </h2>

        <Timeline items={experienceData} />
      </div>
    </section>
  )
}
