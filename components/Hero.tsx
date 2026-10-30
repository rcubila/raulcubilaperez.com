'use client'

import Image from 'next/image'
import { Link2, Globe2, Camera, Code2 } from 'lucide-react'
import { socialLinks } from '@/data/social'

export default function Hero() {
  return (
    <section className="relative w-full pt-20 pb-12 lg:pb-20 bg-gray-900 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
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
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-0 items-stretch">
          {/* Left side - Profile Image */}
          <div className="relative h-96 md:h-auto">
            <Image
              src="/images/profile.png"
              alt="Raul Cubila Perez"
              fill
              className="object-cover"
            />
          </div>

          {/* Right side - Profile Info */}
          <div className="bg-gray-100 p-8 lg:p-12 flex flex-col justify-center">
            <h1 className="text-4xl lg:text-5xl font-thin tracking-tight text-gray-900 mb-2">
              Raul Cubila Perez
            </h1>
            <p className="text-lg font-thin text-gray-600 mb-8">
              Software Engineer
            </p>
            <p className="text-gray-700 font-light leading-relaxed mb-8 max-w-md">
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
        </div>

        {/* Social Media Bar */}
        <div className="bg-gray-900 grid md:grid-cols-2 gap-0">
          <div></div>
          <div className="px-8 lg:px-12 py-6 flex gap-6 bg-gray-900">
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
