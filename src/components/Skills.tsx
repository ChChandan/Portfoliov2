interface SkillCategory {
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Web Development',
    skills: [
      'HTML',
      'JavaScript',
      'TypeScript',
      'CSS',
      'React',
      'Bootstrap',
      'Tailwind CSS',
      '.NET',
      'PHP',
      'Apache',
    ],
  },
  {
    title: 'Databases',
    skills: [
      'MySQL',
      'PostgreSQL',
      'Microsoft SQL Server',
      'MongoDB',
    ],
  },
  {
    title: 'Tools & Platforms',
    skills: [
      'Git & GitHub',
      'ESXi',
      'VCenter & VSphere',
      'Linux',
      'Docker',
      'Kali Linux',
      'Wireshark',
      'Metasploit',
      'Nmap',
      'Vmware',
      'cloudsimplus',
      'Selenium',
      'Bash',
      'Figma',
      'Cisco Networking',
      'Zendesk',
      'Salesforce',

    ],
  },
  {
    title: 'ARR Stack',
    skills: [
      'Jellyfin',
      'Jellyseer',
      'Flaresolverr',
      'Prowlarr',
      'Sonarr',
      'Radarr',
      'Lidarr',
      'Bazarr',
      'Gluetun',
      'Qbittorrent',
      'NGX Proxy Manager',
      'Cloudflare',
      'DuckDNS',
      "Let's Encrypt",
      'Grafana',
      'Prometheus',
      'InfluxDB',
      'Telegraf',
      'cAdvisor',
      

    ],
    
  },
  {
    title: 'Programming',
    skills: ['Python', 'Java', 'C++', 'C#','Flask','Bash' ],
  },

];

export default function Skills() {
  return (
    <section className="py-24 bg-white" id="skills">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-4">
            Skills
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            A comprehensive toolkit built through years of hands-on experience across multiple domains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold text-black mb-6">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 bg-gray-100 text-gray-900 rounded-full text-sm font-medium transition-apple hover:bg-black hover:text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

       

          {/*
           <div className="divider-apple h-px mb-20"></div>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="animate-fade-in-up">
            <p className="text-gray-600 text-sm mb-2">Specialization</p>
            <h4 className="text-2xl font-semibold text-black">
              Cybersecurity & Full-Stack
            </h4>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <p className="text-gray-600 text-sm mb-2">Expertise Level</p>
            <h4 className="text-2xl font-semibold text-black">
              Advanced
            </h4>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-gray-600 text-sm mb-2">Available For</p>
            <h4 className="text-2xl font-semibold text-black">
              Opportunities
            </h4>
          </div>
        </div>
          
          */}
        
    
     
      </div>
    </section>
  );
}
