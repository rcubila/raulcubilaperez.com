const languages = [
  { name: 'English', level: 'Native', flag: '🇬🇧' },
  { name: 'Spanish', level: 'Native', flag: '🇪🇸' },
  { name: 'German', level: 'A2', flag: '🇩🇪' },
]

export default function Languages() {
  return (
    <section id="languages" className="bg-white py-10">
      <div className="bg-gray-100 py-8">
        <h2 className="text-center text-lg font-normal tracking-[0.3em] text-[#1b2744] uppercase">
          Languages
        </h2>
      </div>

      <div className="mx-auto max-w-4xl px-6 pt-10">
        <div className="grid md:grid-cols-3 gap-8">
          {languages.map((lang) => (
            <div key={lang.name} className="text-center">
              <div className="mb-6 flex h-16 items-center justify-center [perspective:800px]">
                <span className="inline-flex h-16 w-16 origin-center items-center justify-center text-6xl [animation:flag-spin_7s_linear_infinite]">
                  {lang.flag}
                </span>
              </div>
              <h3 className="text-xl font-thin text-gray-900 mb-2">
                {lang.name}
              </h3>
              <p className="text-sm font-light text-gray-600">
                {lang.level}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
