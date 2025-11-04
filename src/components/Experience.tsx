interface TimelineItem {
  type: 'work' ;
  title: string;
  organization: string;
  location: string;
  period: string;
  highlights: string[];
}

const experiences: TimelineItem[] = [
  {
    type: 'work',
    title: 'Sales Team Member',
    organization: 'The Good Guys',
    location: 'Erina, NSW',
    period: 'May 2024 - Present',
    highlights: [
      'Achieved 43% increase above year-to-date budget through proactive sales strategies',
      'Increased weekly agency product range sales by 30% and achieving over $10,000 in daily turnover',
      'Outperformed in key KPIs: highest items per docket, highest average sales price',
      'Demonstrated consistent top performance by surpassing monthly goals in 100% of reporting periods',
    ],
  },
  {
    type: 'work',
    title: 'Front Desk Receptionist',
    organization: 'HEAL Medical Centre',
    location: 'San Remo, NSW',
    period: 'Feb 2024 - Jul 2024',
    highlights: [
      'Managed high-volume phone system with efficient patient service',
      'Provided exceptional customer service addressing patient inquiries',
      'Maintained accurate electronic health records (EHR) ensuring confidentiality',
    ],
  },
  {
    type: 'work',
    title: 'PHP Backend Developer',
    organization: 'Winfra Technologies',
    location: 'Hyderabad, India',
    period: 'Jun 2022 - Aug 2022',
    highlights: [
      'Optimized database performance, improving application speed by 20%',
      'Collaborated with cross-functional teams to implement scalable solutions',
      'Ensured seamless integration with React front-end components',
    ],
  },
  {
    type: 'work',
    title: 'Full Stack Web Developer',
    organization: 'SRMAP University',
    location: 'Andhra Pradesh, India',
    period: 'Jul 2021 - Jul 2022',
    highlights: [
      'Built a dynamic platform from ground-up serving 800+ active daily users',
      'Led a team of 10+ developers during development process',
      'Designed, developed, and deployed using HTML5, CSS3, Bootstrap, PHP, MySQL, and Apache',
    ],
  },
  
];

export default function Experience() {
  return (
    <section className="py-24 bg-white" id="experience">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-4">
            Experience
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            A timeline of roles that shaped my career in technology and security.
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((item, index) => (
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
