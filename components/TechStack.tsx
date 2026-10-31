'use client'

import Image from 'next/image'
import { skillsData } from '@/data/skills'

export default function TechStack() {
  return (
    <section id="tech-stack" className="relative w-full overflow-hidden py-10 lg:py-12">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/tech-background.png"
          alt="Tech background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gray-900/75"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        <h2 data-section-title className="text-4xl lg:text-5xl font-thin text-center text-white mb-16 tracking-widest uppercase">
          Technical Proficiencies
        </h2>

        <div className="space-y-16">
          {skillsData.map((skillGroup) => (
            <div key={skillGroup.category}>
              <h3 className="text-2xl font-thin text-center text-white mb-8 tracking-wider uppercase">
                {skillGroup.category}
              </h3>

              <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4">
                {skillGroup.skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex min-h-14 items-center justify-center border border-white/20 bg-white/10 px-6 py-4 text-center backdrop-blur-sm transition-colors hover:bg-white/20"
                  >
                    <p className="font-light text-white">{skill}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
