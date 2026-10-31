import Timeline from './Timeline'
import { experienceData } from '@/data/experience'

export default function Experience() {
  return (
    <section id="experience" className="bg-white py-10">
      <div className="mx-auto max-w-4xl px-6">
        <h2 data-section-title className="text-lg font-normal text-center text-[#1b2744] tracking-[0.3em] uppercase">
          Experience
        </h2>
        <div className="mt-5 mb-5 border-t border-gray-300" />

        <Timeline items={experienceData} variant="career" />
      </div>
    </section>
  )
}
