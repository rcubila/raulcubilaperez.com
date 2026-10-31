'use client'

import Image from 'next/image'
import { skillsData } from '@/data/skills'

export default function TechStack() {
  return (
    <section id="tech-stack" className="relative w-full overflow-hidden pt-10 pb-20 lg:pt-12 lg:pb-32">
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
        <h2 className="text-4xl lg:text-5xl font-thin text-center text-white mb-16 tracking-widest uppercase">
          Technical Proficiencies
        </h2>

        <div className="space-y-16">
          {skillsData.map((skillGroup) => (
            <div key={skillGroup.category}>
              <h3 className="text-2xl font-thin text-center text-white mb-8 tracking-wider uppercase">
                {skillGroup.category}
              </h3>

              <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                {skillGroup.skills.map((skill) => (
                  <div
                    key={skill}
                    className="bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-4 text-center hover:bg-white/20 transition-colors"
                  >
                    <p className="text-white font-light">
                      {skill}
                    </p>
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
