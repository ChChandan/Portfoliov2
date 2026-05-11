import { ExternalLink } from 'lucide-react';
import secplus from '../Assets/Sec+.png';
interface Certs {
  name: string;
  description: string;
  language: string;
  logo: string;
  url: string;
  tags: string[];
}

const certs: Certs[] = [
  {
    name: 'Comptia Security+ Certification',
    description: 'Verification ID:195a95a8bdaa4696b83a31214d521840',
    language: 'Valid until:2029',
    logo: secplus,
    url: 'https://cp.certmetrics.com/comptia/en/public/verify/credential/195a95a8bdaa4696b83a31214d521840',
    tags: ['Cybersecurity', 'Networking', 'Risk management'],
  }
];

/**const languageColors: { [key: string]: string } = {
  Python: 'bg-blue-500',
  HTML: 'bg-orange-500',
  JavaScript: 'bg-yellow-500',
  'Jupyter Notebook': 'bg-amber-500',
};**/

export default function Certifications() {
  return (
    <section className="py-24 bg-gray-50" id="certificates">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-4">
            Certifications
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            Proof of expertise, officially verified.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certs.map((cert, index) => (
            <a
              key={index}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl p-8 border border-gray-200 transition-apple hover:border-black hover:shadow-lg animate-fade-in-up"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className="mb-4 flex items-start justify-between">
                <h3 className="text-xl font-semibold text-black group-hover:text-gray-700 transition-colors max-w-xs">
                  {cert.name}
                </h3>
                <img src={cert.logo} alt={cert.name} style={{width:"150px",height:"150px"}} />
                <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors flex-shrink-0" />
              </div>
                
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                {cert.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {cert.tags.map((tag, tagIndex) => (
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
                  {cert.language}
                </span>
                <span className="text-sm font-medium text-gray-900 group-hover:text-black transition-colors">
                  Verify →
                </span>
              </div>
            </a>
          ))}
        </div>

        
      </div>
    </section>
  );
}
