import { ExternalLink } from 'lucide-react';

interface Project {
  name: string;
  description: string;
  language: string;
  url: string;
  tags: string[];
}

const projects: Project[] = [
  {
    name: 'Intrusion Detection System Analysis',
    description: 'Machine Learning-based IDS with advanced threat detection and pattern recognition capabilities',
    language: 'Python',
    url: 'https://github.com/ChChandan/Intrusion-Detection-System-Analysis',
    tags: ['ML', 'Security', 'Python'],
  },
  {
    name: 'Hybrid DNA Based Encryption',
    description: 'A hybrid encryption algorithm combining DNA-based shift protection with AES to enhance data security in edge–cloud systems.',
    language: 'Java',
    url: 'https://github.com/ChChandan/HybridDNABasedEncryption',
    tags: ['Cloudsimplus', 'Java', 'Publication'],
  },
  {
    name: 'Zero Trust Architecture for SME Businesses',
    description: 'Client-server model implementing digital signature authentication for secure communication',
    language: 'Python',
    url: 'An identity-driven Zero Trust security framework integrating Keycloak, OpenZiti, and Flask to deliver secure, segmented, and continuous access control for SMEs.',
    tags: ['Cryptography', 'Authentication', 'Docker'],
  },
  {
    name: 'Coles Web Scraper',
    description: 'Advanced Python tool that extracts product data from Coles Australia with human-like behavior patterns',
    language: 'Python',
    url: 'https://github.com/ChChandan/Coles-Scraper',
    tags: ['Web Scraping', 'Automation', 'Data Extraction'],
  },
  {
    name: 'Secure password web toolkit',
    description: 'A lightweight, client-side toolkit for generating and analyzing ultra-secure passwords — keeping your accounts safe from hackers in seconds.',
    language: 'Typescript',
    url: 'https://github.com/ChChandan/Secure-password-web-toolkit',
    tags: ['Cryptography', 'Web development', 'Security'],
  },
  {
    name: 'Secret Company Network',
    description: 'OA secure, scalable enterprise network design integrating VLANs, OSPF, VPN, ACLs, and a Cisco ASA firewall to ensure efficient, protected communication across main, sales, and DMZ zones.',
    language: 'Cisco Packet Tracer',
    url: 'https://github.com/ChChandan/Secret-Company-Network-',
    tags: ['Cisco Networking', 'Packet Tracer', 'Network Security'],
  },
  {
    name: 'Collatz Conjecture Visualization',
    description: 'Graphical representation of the infamous mathematical conjecture with interactive visualizations',
    language: 'Python',
    url: 'https://github.com/ChChandan/Colatz-Conjecture',
    tags: ['Mathematics', 'Visualization', 'Python'],
  },
  {
    name: 'Automated Zoom Login',
    description: 'Python application that automates the Zoom login process for seamless meeting access',
    language: 'Python',
    url: 'https://github.com/ChChandan/Automated-Zoom-login',
    tags: ['Automation', 'Python', 'Productivity'],
  },
  {
    name: 'Captcha Generator',
    description: 'Dynamic CAPTCHA generation system for enhanced web security and bot prevention',
    language: 'HTML',
    url: 'https://github.com/ChChandan/Captcha-generator',
    tags: ['Security', 'Web Development', 'HTML'],
  },
];

const languageColors: { [key: string]: string } = {
  Python: 'bg-blue-500',
  HTML: 'bg-orange-500',
  JavaScript: 'bg-yellow-500',
  'Jupyter Notebook': 'bg-amber-500',
};

export default function Projects() {
  return (
    <section className="py-24 bg-gray-50" id="projects">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-4">
            Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            Selected work showcasing expertise in security, machine learning, and full-stack development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl p-8 border border-gray-200 transition-apple hover:border-black hover:shadow-lg animate-fade-in-up"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className="mb-4 flex items-start justify-between">
                <h3 className="text-xl font-semibold text-black group-hover:text-gray-700 transition-colors max-w-xs">
                  {project.name}
                </h3>
                <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors flex-shrink-0" />
              </div>

              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <span className="text-xs font-medium text-gray-500">
                  {project.language}
                </span>
                <span className="text-sm font-medium text-gray-900 group-hover:text-black transition-colors">
                  View →
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://github.com/ChChandan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 border border-black text-black rounded-full font-medium transition-apple hover:bg-black hover:text-white"
          >
            View all projects
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
