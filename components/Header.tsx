'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'EXPERIENCE', href: '#experience' },
  { label: 'EDUCATION', href: '#education' },
  { label: 'LANGUAGES', href: '#languages' },
  { label: 'TECH STACK', href: '#tech-stack' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'CONTACT', href: '#contact' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* Top magenta line */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-fuchsia-500 to-purple-500 z-50"></div>

      {/* Navigation bar */}
      <header className="fixed top-1 left-0 right-0 bg-white z-40 shadow-sm">
        <nav className="max-w-7xl mx-auto px-6 py-4 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo/Name */}
            <div className="text-[30px] leading-tight font-thin tracking-wide text-gray-900">
              Raul Cubila Perez
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-8 items-center">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href)}
                  className="text-sm font-thin tracking-wider text-gray-900 hover:text-purple-600 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-gray-900"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden pt-4 pb-4 border-t border-gray-200 mt-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href)}
                  className="block py-2 text-sm font-thin tracking-wider text-gray-900 hover:text-purple-600 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </nav>
      </header>
    </>
  )
}
