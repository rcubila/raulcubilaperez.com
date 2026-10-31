'use client'

import Image from 'next/image'
import { Link2, Globe2, Camera, Code2 } from 'lucide-react'
import { socialLinks } from '@/data/social'

export default function Hero() {
  return (
    <section className="relative z-10 w-full pt-20">
      {/* Building stops at the blue bar so the next white section can slide under it */}
      <div className="absolute inset-x-0 top-0 bottom-[72px] overflow-hidden bg-gray-900">
        <Image
          src="/images/hero-building.png"
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[900px] px-4 sm:px-0">
        <div className="relative pb-[72px] md:pb-0">
        <div className="grid md:grid-cols-2 gap-0 items-stretch">
          {/* Left side - Profile Image */}
          <div className="relative aspect-[4/5] md:aspect-auto md:row-span-2">
            <Image
              src="/images/profile.jpg"
              alt="Raul Cubila Perez"
              fill
              className="object-cover object-[center_22%]"
              priority
            />
          </div>

          {/* Right side - Profile Info */}
          <div className="bg-gray-100 p-6 md:min-h-[440px] md:p-10 flex flex-col justify-center md:col-start-2">
            <h1 className="text-3xl md:text-4xl font-thin tracking-tight text-gray-900 mb-2">
              Raul Cubila Perez
            </h1>
            <p className="text-lg font-thin text-gray-600 mb-8">
              Software Engineer
            </p>
            <p className="text-gray-700 font-light leading-relaxed mb-8">
              Full-stack engineer specializing in scalable web applications
              <br />
              (React, Java/Spring Boot, FastAPI)
            </p>

            <div className="space-y-3 text-sm font-thin text-gray-800">
              <div>
                <span className="font-normal tracking-wide">Phone:</span>
                <br />
                +41 77 509 31 33
              </div>
              <div>
                <span className="font-normal tracking-wide">Email:</span>
                <br />
                rcubila@gmail.com
              </div>
              <div>
                <span className="font-normal tracking-wide">Location:</span>
                <br />
                Zurich, Switzerland
              </div>
            </div>
          </div>
          <div className="hidden h-[72px] md:col-start-2 md:block" aria-hidden="true" />
        </div>

        {/* Blue bar sits on the white section below and across the bottom of the photo */}
        <div className="absolute inset-x-0 bottom-0 z-20 flex h-[72px] items-center justify-center gap-8 bg-[#17245A]">
            {socialLinks.map((link) => {
              const iconMap: { [key: string]: React.ReactNode } = {
                Github: <Code2 size={20} />,
                Linkedin: <Link2 size={20} />,
                Facebook: <Globe2 size={20} />,
                Instagram: <Camera size={20} />,
              }
              return (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-purple-400 transition-colors"
                  aria-label={link.name}
                >
                  {iconMap[link.icon]}
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
