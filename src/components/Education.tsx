interface TimelineItem {
  type: 'education';
  title: string;
  organization: string;
  location: string;
  period: string;
  highlights: string[];
}

const degrees: TimelineItem[] = [
  {
    type: 'education',
    title: 'Master of Cybersecurity (Extension)',
    organization: 'University of Technology Sydney',
    location: 'Sydney, Australia',
    period: 'Jan 2024 - Nov 2025',
    highlights: [
      'Awarded 30% postgraduate academic excellence scholarship',
      'Designed and developed Zero-Trust architecture framework for small & medium scale businesses',
    ],
  },
  {
    type: 'education',
    title: 'Bachelor in Cybersecurity & Minor in Business Administration',
    organization: 'SRMAP University',
    location: 'Andhra Pradesh, India',
    period: 'Jun 2019 - Aug 2023',
    highlights: [
      'Conferred a 25% Academic Excellence Scholarship',
      'Published and presented an original encryption technique in a peer-reviewed research journal',
    ],
  },
];

export default function Education() {
  return (
    <section className="py-24 bg-white" id="education">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-4">
            Education
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            Academic journey highlighting degrees and achievements in cybersecurity.
          </p>
        </div>

        <div className="space-y-12">
          {degrees.map((item, index) => (
            <div
              key={index}
              className="pb-12 border-b border-gray-200 last:border-b-0 last:pb-0 group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between md:gap-8">
                <div className="flex-1 mb-4 md:mb-0">
                  <div className="flex items-start gap-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-black mb-1">
                        {item.title}
                      </h3>
                      <p className="text-lg text-gray-900 font-medium mb-2">
                        {item.organization}
                      </p>
                      <p className="text-sm text-gray-600 mb-4">
                        {item.location}
                      </p>
                      <ul className="space-y-2 list-disc">
                        {item.highlights.map((highlight, idx) => (
                         
                         <li key={idx} className="text-gray-700 text-sm leading-relaxed">
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="md:text-right flex-shrink-0">
                  <span className="inline-block px-4 py-2 bg-gray-100 text-gray-900 rounded-full text-sm font-medium">
                    {item.period}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
