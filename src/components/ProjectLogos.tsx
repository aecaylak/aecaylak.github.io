import React from 'react';

// Proje logosu tipi
interface ProjectLogo {
  id: string;
  name: string;
  logoUrl: string;
  link: string;
}

// Proje logoları - Yeni proje eklemek için bu diziye ekleme yap
const projectLogos: ProjectLogo[] = [
  
  {
    id: 'sorio',
    name: 'Sorio',
    logoUrl: '/logos/sorio.png',
    link: 'https://www.sorio.app'
  },
  {
    id: 'kalsin',
    name: 'Kalsin',
    logoUrl: '/logos/kalsin.png',
    link: 'https://play.google.com/store/apps/details?id=com.cebinekalsin.app'
  },
  // Yeni proje eklemek için yukarıdaki formatı kullan
  // {
  //   id: 'project-3',
  //   name: 'Proje Adı',
  //   logoUrl: '/logos/proje.png',
  //   link: 'https://link.com'
  // },
];

const ProjectLogos: React.FC = () => {
  return (
    <section className="py-0 bg-bg-primary relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Logos Container - Subtle Reference Style */}
        <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-16 py-6">
          {projectLogos.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative opacity-40 hover:opacity-100 transition-opacity duration-500"
              title={project.name}
            >
              <img
                src={project.logoUrl}
                alt={project.name}
                className="h-24 lg:h-30 w-auto object-contain transition-all duration-500 group-hover:scale-110"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectLogos;