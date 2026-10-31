const languages = [
  { name: 'English', level: 'Native', flag: '🇬🇧' },
  { name: 'Spanish', level: 'Native', flag: '🇪🇸' },
  { name: 'German', level: 'A2', flag: '🇩🇪' },
]

export default function Languages() {
  return (
    <section id="languages" className="bg-white py-10">
      <div data-section-title className="bg-gray-100 py-8">
        <h2 className="text-center text-lg font-normal tracking-[0.3em] text-[#1b2744] uppercase">
          Languages
        </h2>
      </div>

      <div className="mx-auto max-w-4xl px-4 pt-10 md:px-6">
        <div className="grid grid-cols-3 gap-2 md:gap-8">
          {languages.map((lang) => (
            <div key={lang.name} className="text-center">
              <div className="mb-3 flex h-14 items-center justify-center [perspective:800px] md:mb-6 md:h-16">
                <span className="inline-flex h-14 w-14 origin-center items-center justify-center text-5xl [animation:flag-spin_7s_linear_infinite] md:h-16 md:w-16 md:text-6xl">
                  {lang.flag}
                </span>
              </div>
              <h3 className="mb-1 text-sm font-thin text-gray-900 md:mb-2 md:text-xl">
                {lang.name}
              </h3>
              <p className="text-xs font-light text-gray-600 md:text-sm">
                {lang.level}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
