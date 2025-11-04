import { Github, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 py-20">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-semibold text-black mb-2">Chandan</h3>
            <p className="text-gray-600">
              Crafting secure digital experiences
            </p>
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com/ChChandan"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 transition-apple hover:border-black hover:text-black hover:bg-gray-50"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="mailto:chandansyd9@gmail.com"
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 transition-apple hover:border-black hover:text-black hover:bg-gray-50"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="divider-apple h-px mb-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
          <p>Built with React, TypeScript & Tailwind</p>
          <p>{currentYear} Chandan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
