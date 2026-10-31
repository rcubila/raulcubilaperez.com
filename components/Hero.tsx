'use client'

import Image from 'next/image'
import { socialLinks } from '@/data/social'
import SocialIcon from '@/components/SocialIcon'

export default function Hero() {
  return (
    <section className="relative z-10 w-full pt-32">
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
          <div className="bg-gray-100 p-6 md:min-h-[440px] md:p-10 flex flex-col justify-center text-[#1b2744] md:col-start-2">
            <h1 className="text-3xl md:text-4xl font-normal tracking-tight mb-1">
              Raul Cubila Perez
            </h1>
            <p className="text-base font-bold mb-6">
              Software Engineer
            </p>
            <p className="text-sm font-normal leading-relaxed mb-8">
              Full-stack engineer specializing in scalable web applications (React, Java/Spring Boot, FastAPI)
            </p>

            <div className="space-y-5 text-sm font-normal">
              <div>
                <span className="font-bold">Phone:</span>
                <br />
                +41 77 509 31 33
              </div>
              <div>
                <span className="font-bold">Email:</span>
                <br />
                rcubila@gmail.com
              </div>
              <div>
                <span className="font-bold">Address:</span>
                <br />
                Dottikon, Aargau, Switzerland
              </div>
              <div>
                <span className="font-bold">Date of Birth:</span>
                <br />
                May 8, 1984
              </div>
            </div>
          </div>
          <div className="hidden h-[72px] md:col-start-2 md:block" aria-hidden="true" />
        </div>

        {/* Blue bar sits on the white section below and across the bottom of the photo */}
        <div className="absolute inset-x-0 bottom-0 z-20 flex h-[72px] items-center justify-center gap-8 bg-[#17245A]">
            {socialLinks.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition-colors hover:text-purple-400"
                aria-label={link.name}
              >
                <SocialIcon name={link.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
