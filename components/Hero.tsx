export default function Hero() {
  return (
    <section id="hero" className="pt-32 pb-20 bg-gradient-to-b from-blue-50/50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-blue-600 bg-blue-100 text-sm font-semibold px-4 py-1.5 rounded-full inline-block mb-4">
          Empower Your Workforce
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-900 tracking-tight max-w-4xl mx-auto leading-tight">
          Transform Your Team with Enterprise Grade Learning
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
          Scale skills in AI, Product Management, and Data Analytics with industry-led cohort programs built for tech-driven teams.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a href="#lead-form" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold shadow-md transition-all">
            Request Demo
          </a>
          <a href="#features" className="bg-white border border-gray-300 hover:border-gray-400 text-gray-700 px-6 py-3 rounded-xl font-semibold transition-all">
            Explore Programs
          </a>
        </div>
      </div>
    </section>
  );
}