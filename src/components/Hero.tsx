import { Github, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white pt-20">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="flex flex-col items-center text-center">
          <div className="animate-fade-in-up mb-6">
            <p className="text-base md:text-lg text-gray-600 font-medium tracking-wide">
              Hi, I'm
            </p>
          </div>

          <h1 className="animate-fade-in-up-1 text-6xl md:text-8xl font-bold mb-6 text-black leading-tight">
            Chandan
          </h1>

          <p className="animate-fade-in-up-2 text-xl md:text-2xl text-gray-500 max-w-2xl mb-8 leading-relaxed font-light">
            Cybersecurity professional and full-stack developer crafting secure, elegant digital experiences. Cybersecurity Graduate from UTS with a focus on Zero-Trust architecture.
          </p>

          <div className="animate-fade-in-up-3 flex flex-col sm:flex-row gap-4 mb-16">
            <a
              href="mailto:chandansyd9@gmail.com"
              className="px-8 py-3 bg-black text-white rounded-full font-medium text-sm transition-apple hover:bg-gray-800 flex items-center justify-center gap-2"
            >
              Get in touch
              <ArrowRight size={16} />
            </a>
            <a
              href="https://github.com/ChChandan"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-gray-300 text-black rounded-full font-medium text-sm transition-apple hover:border-black hover:bg-gray-50 flex items-center justify-center gap-2"
            >
              <Github size={16} />
              GitHub
            </a>
          </div>

          <div className="grid grid-cols-3 gap-12 w-full max-w-md animate-fade-in-up-3" style={{ animationDelay: '0.4s' }}>
            <div className="text-center">
              <div className="text-3xl font-bold text-black mb-1">5+</div>
              <p className="text-sm text-gray-500">Years Exp.</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-black mb-1">50+</div>
              <p className="text-sm text-gray-500">Technologies mastered.</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-black mb-1">25+</div>
              <p className="text-sm text-gray-500">Projects.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-subtle-float">
        <svg className="w-6 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
