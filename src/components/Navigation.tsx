import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Experience', id: 'experience' },
    { label: 'Education', id: 'education' },
    { label: 'Projects', id: 'projects' },
    { label: 'Skills', id: 'skills' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-apple ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-apple shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 py-4">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <button
            onClick={() => scrollToSection('home')}
            className={`text-lg font-semibold transition-apple ${
              isScrolled ? 'text-black' : 'text-black'
            }`}
          >
            Portfolio
          </button>

          <div className="hidden md:flex items-center gap-12">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-apple ${
                  isScrolled ? 'text-gray-700 hover:text-black' : 'text-gray-700 hover:text-black'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden transition-apple ${
              isScrolled ? 'text-black' : 'text-black'
            }`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-700 hover:text-black transition-apple text-sm font-medium text-left"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
