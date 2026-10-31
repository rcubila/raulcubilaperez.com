import Image from 'next/image'
import { projectsData } from '@/data/projects'

export default function Projects() {
  return (
    <section id="projects" className="bg-white pb-16">
      <div className="bg-gray-100 py-8">
        <h2 className="text-center text-lg font-normal tracking-[0.3em] text-[#1b2744] uppercase">
          Personal Projects
        </h2>
      </div>

      <div className="mx-auto max-w-6xl space-y-16 px-6 pt-12 lg:px-8">
        {projectsData.map((project, index) => {
          const imageFirst = index % 2 === 0

          return (
            <article
              key={project.id}
              className="grid items-center gap-8 md:grid-cols-2 md:gap-14"
            >
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative block aspect-[16/10] overflow-hidden bg-gray-200 ${
                  imageFirst ? '' : 'md:order-2'
                }`}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                />
              </a>

              <div className={imageFirst ? '' : 'md:order-1'}>
                <h3 className="text-2xl font-normal text-[#1b2744]">{project.title}</h3>
                <p className="mt-4 text-base font-normal leading-relaxed text-[#1b2744]">
                  {project.description}
                </p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-block text-sm tracking-wide text-[#17245A] underline-offset-4 hover:underline"
                >
                  {project.label}
                </a>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
