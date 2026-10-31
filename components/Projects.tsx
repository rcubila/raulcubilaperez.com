'use client'

import Image from 'next/image'
import { projectsData } from '@/data/projects'

export default function Projects() {
  return (
    <section id="projects" className="bg-gray-100 pt-10 pb-20 lg:pt-12 lg:pb-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl lg:text-5xl font-thin text-center text-gray-900 mb-16 tracking-widest uppercase">
          Personal Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {projectsData.map((project) => (
            <div key={project.id} className="flex flex-col">
              {/* Project Image */}
              <div className="relative h-64 md:h-80 mb-6 bg-gray-200">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Project Info */}
              <div>
                <a
                  href={`https://${project.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-thin text-purple-600 hover:text-purple-700 tracking-wide mb-2 inline-block"
                >
                  {project.url}
                </a>

                <h3 className="text-xl lg:text-2xl font-thin text-gray-900 mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-700 font-light leading-relaxed mb-4">
                  {project.description}
                </p>

                <div>
                  <p className="text-sm font-normal text-gray-600 tracking-wide mb-2">
                    Tech Stack:
                  </p>
                  <p className="text-sm font-light text-gray-700">
                    {project.tech}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
