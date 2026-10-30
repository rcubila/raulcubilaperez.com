const languages = [
  { name: 'English', level: 'Native', flag: '🇬🇧' },
  { name: 'Spanish', level: 'Native', flag: '🇪🇸' },
  { name: 'German', level: 'A2', flag: '🇩🇪' },
]

export default function Languages() {
  return (
    <section id="languages" className="bg-gray-100 py-20 lg:py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl lg:text-5xl font-thin text-center text-gray-900 mb-16 tracking-widest uppercase">
          Languages
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {languages.map((lang) => (
            <div key={lang.name} className="text-center">
              <div className="text-6xl mb-6 flex justify-center">
                {lang.flag}
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
