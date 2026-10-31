import Timeline from './Timeline'
import { educationData } from '@/data/education'

export default function Education() {
  return (
    <section id="education" className="bg-white py-10">
      <div data-section-title className="bg-gray-100 py-8">
        <h2 className="text-center text-lg font-normal tracking-[0.3em] text-[#1b2744] uppercase">
          Education
        </h2>
      </div>

      <div className="mx-auto max-w-4xl px-6 pt-10 [--career-label:280px]">
        <Timeline items={educationData} variant="career" />
      </div>
    </section>
  )
}
