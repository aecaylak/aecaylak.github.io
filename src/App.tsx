import React, { useState, useEffect, useRef } from 'react';
import { Mail, Linkedin, ExternalLink, Calendar, MapPin, Globe, ArrowUpRight, ChevronDown, Sparkles, Cpu, Zap, Code, Briefcase, GraduationCap, Award, Building } from 'lucide-react';
import { useLanguage } from './hooks/useLanguage';
import { content } from './data/content';

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');
  const [isNavCollapsed, setIsNavCollapsed] = useState(false);
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());
  const { language, toggleLanguage } = useLanguage();
  const t = content[language];
  
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
      setIsNavCollapsed(scrollTop > 100);
      
      const sections = ['hero', 'about', 'experience', 'education', 'skills', 'certifications', 'projects', 'contact'];
      for (const section of sections) {
        const element = sectionRefs.current[section];
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollTop >= offsetTop - 200 && scrollTop < offsetTop + offsetHeight - 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('[data-reveal]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isVisible = (id: string) => visibleElements.has(id);

  return (
    <div className="bg-bg-primary min-h-screen">
      {/* Scroll Progress Bar */}
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 bg-bg-primary/95 backdrop-blur-md border-b border-border transition-all duration-300 ${isNavCollapsed ? 'py-3 shadow-sm' : 'py-5'}`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => scrollToSection('hero')}>
              <div className="relative">
                <img src="/favicon.ico" alt="Logo" className="w-9 h-9 transition-transform duration-300 group-hover:scale-110" />
                <div className="absolute inset-0 bg-accent/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <span className="font-serif text-xl font-bold text-text-primary tracking-tight group-hover:text-accent transition-colors">
                Ali Emre Çaylak
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {[
                { id: 'hero', label: t.navigation.home },
                { id: 'about', label: t.navigation.about },
                { id: 'experience', label: t.navigation.experience },
                { id: 'education', label: t.navigation.education },
                { id: 'skills', label: t.navigation.skills },
                { id: 'projects', label: t.navigation.projects },
                { id: 'contact', label: t.navigation.contact }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`nav-link text-sm font-medium transition-colors ${activeSection === item.id ? 'text-text-primary' : 'text-text-tertiary hover:text-text-primary'}`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={toggleLanguage}
                className="group flex items-center space-x-1 px-4 py-2 border border-border rounded-lg hover:border-accent hover:bg-accent/5 transition-all duration-300"
              >
                <Globe className="w-4 h-4 text-text-tertiary group-hover:text-accent transition-colors" />
                <span className="text-sm font-mono text-text-tertiary group-hover:text-accent transition-colors">{language.toUpperCase()}</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        id="hero" 
        ref={(el) => { sectionRefs.current['hero'] = el; }}
        className="min-h-screen flex items-center py-32 relative overflow-hidden"
      >
        <div className="absolute top-20 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-accent-light/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`space-y-8 ${isVisible('hero-title') ? 'reveal visible' : 'reveal'}`} id="hero-title" data-reveal>
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                  <p className="text-sm font-mono text-accent tracking-wide font-medium">
                    {t.hero.subtitle}
                  </p>
                </div>
                <h1 className="font-serif text-5xl lg:text-7xl font-bold text-text-primary leading-tight">
                  <span className="block relative">
                    Ali Emre
                    <div className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-accent to-accent-light rounded-full"></div>
                  </span>
                  <span className="block text-text-secondary mt-2">Çaylak</span>
                </h1>
              </div>
              
              <p className="text-lg text-text-secondary leading-relaxed max-w-lg">
                {t.hero.description}
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <button
                  onClick={() => scrollToSection('about')}
                  className="group btn-primary inline-flex items-center px-8 py-4 bg-text-primary text-bg-primary rounded-lg font-semibold hover:bg-accent transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-text-primary/20"
                >
                  {t.hero.exploreButton}
                  <ArrowUpRight className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
                <a
                  href="mailto:hello@aliemre.xyz"
                  className="inline-flex items-center px-8 py-4 border-2 border-text-primary rounded-lg font-semibold hover:bg-text-primary hover:text-bg-primary transition-all duration-300"
                >
                  {t.hero.contactButton}
                </a>
              </div>
            </div>

            <div className={`relative ${isVisible('hero-image') ? 'reveal-right visible' : 'reveal-right'}`} id="hero-image" data-reveal>
              <div className="relative aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-accent-light/10 rounded-3xl transform rotate-6"></div>
                <div className="absolute inset-4 bg-bg-secondary rounded-2xl transform -rotate-3"></div>
                <img
                  src="/profil.png"
                  alt={t.hero.imageAlt}
                  className="relative w-full h-full object-cover rounded-2xl shadow-2xl image-rotate"
                />
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent/20 rounded-2xl backdrop-blur-sm flex items-center justify-center animate-float">
                  <Cpu className="w-8 h-8 text-accent" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <button 
            onClick={() => scrollToSection('about')} 
            className="flex flex-col items-center text-text-tertiary hover:text-accent transition-colors"
          >
            <span className="text-xs font-mono mb-2 tracking-widest">SCROLL</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section 
        id="about" 
        ref={(el) => { sectionRefs.current['about'] = el; }}
        className="py-32 bg-bg-secondary relative overflow-hidden"
      >
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-x-1/2"></div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className={`mb-16 ${isVisible('about-title') ? 'reveal visible' : 'reveal'}`} id="about-title" data-reveal>
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-sm font-mono text-accent font-medium">01</span>
              <div className="w-8 h-px bg-accent"></div>
              <span className="text-sm font-mono text-text-tertiary">{t.navigation.about}</span>
            </div>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-text-primary">{t.about.title}</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className={`space-y-6 ${isVisible('about-text') ? 'reveal-left visible' : 'reveal-left'}`} id="about-text" data-reveal>
              {t.about.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-text-secondary leading-relaxed text-lg">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className={`space-y-6 ${isVisible('about-info') ? 'reveal-right visible' : 'reveal-right'}`} id="about-info" data-reveal>
              <div className="card p-6 border border-border rounded-2xl bg-bg-primary">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-sm font-medium text-text-secondary">{t.about.location}</span>
                </div>
                <p className="text-text-primary font-semibold text-lg">Ankara, Türkiye</p>
              </div>

              <div className="card p-6 border border-border rounded-2xl bg-bg-primary">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-sm font-medium text-text-secondary">{t.about.interests.title}</span>
                </div>
                <div className="space-y-2">
                  {t.about.interests.items.map((interest, index) => (
                    <div key={index} className="flex items-center group">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 group-hover:scale-150 transition-transform"></div>
                      <span className="text-text-primary text-sm">{interest}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card p-6 border border-border rounded-2xl bg-bg-primary">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center">
                    <Globe className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-sm font-medium text-text-secondary">{t.about.languages.title}</span>
                </div>
                <div className="space-y-3">
                  {[
                    { name: t.about.languages.turkish, level: t.about.languages.native },
                    { name: t.about.languages.english, level: t.about.languages.advanced },
                    { name: t.about.languages.german, level: t.about.languages.beginner }
                  ].map((lang, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-text-primary text-sm font-medium">{lang.name}</span>
                      <span className="text-xs font-mono bg-accent/10 text-accent px-3 py-1.5 rounded-full">{lang.level}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section 
        id="experience" 
        ref={(el) => { sectionRefs.current['experience'] = el; }}
        className="py-32 relative"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className={`mb-16 ${isVisible('experience-title') ? 'reveal visible' : 'reveal'}`} id="experience-title" data-reveal>
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-sm font-mono text-accent font-medium">02</span>
              <div className="w-8 h-px bg-accent"></div>
              <span className="text-sm font-mono text-text-tertiary">{t.navigation.experience}</span>
            </div>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-text-primary">{t.experience.title}</h2>
          </div>

          <div className="space-y-6">
            {t.experience.positions.map((exp, index) => (
              <div 
                key={index} 
                className={`group card p-8 border border-border rounded-2xl bg-bg-primary ${isVisible(`exp-${index}`) ? 'reveal visible' : 'reveal'}`} 
                id={`exp-${index}`}
                data-reveal
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center">
                        <Briefcase className="w-4 h-4 text-accent" />
                      </div>
                      <h3 className="text-xl font-bold text-text-primary">{exp.title}</h3>
                    </div>
                    <p className="text-accent font-semibold text-lg mb-1">{exp.company}</p>
                    {exp.role && <p className="text-text-secondary text-sm mb-3">{exp.role}</p>}
                    {exp.duration && (
                      <span className="inline-flex items-center text-xs font-mono bg-accent/10 text-accent px-3 py-1.5 rounded-full">
                        <Zap className="w-3 h-3 mr-1" />
                        {exp.duration}
                      </span>
                    )}
                  </div>
                  <div className="text-right text-sm text-text-tertiary">
                    <div className="flex items-center justify-end space-x-2 mb-1">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center justify-end space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-border">
                  {exp.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="tag text-xs font-mono text-text-secondary bg-bg-secondary px-3 py-1.5 rounded-lg">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section 
        id="education" 
        ref={(el) => { sectionRefs.current['education'] = el; }}
        className="py-32 bg-bg-secondary relative"
      >
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className={`mb-16 ${isVisible('education-title') ? 'reveal visible' : 'reveal'}`} id="education-title" data-reveal>
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-sm font-mono text-accent font-medium">03</span>
              <div className="w-8 h-px bg-accent"></div>
              <span className="text-sm font-mono text-text-tertiary">{t.navigation.education}</span>
            </div>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-text-primary">{t.education.title}</h2>
          </div>

          <div className="space-y-6">
            {t.education.degrees.map((edu, index) => (
              <div 
                key={index} 
                className={`group card p-8 border border-border rounded-2xl bg-bg-primary ${isVisible(`edu-${index}`) ? 'reveal visible' : 'reveal'}`} 
                id={`edu-${index}`}
                data-reveal
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center">
                        <GraduationCap className="w-4 h-4 text-accent" />
                      </div>
                      <h3 className="text-xl font-bold text-text-primary">{edu.degree}</h3>
                    </div>
                    <p className="text-accent font-semibold">{edu.school}</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {edu.note && (
                        <span className="text-xs font-mono bg-text-primary text-bg-primary px-3 py-1 rounded-full">
                          {edu.note}
                        </span>
                      )}
                      {edu.gpa && (
                        <span className="text-xs font-mono bg-accent/10 text-accent px-3 py-1 rounded-full border border-accent/20">
                          GPA: {edu.gpa}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="text-right text-sm text-text-tertiary">
                    <div className="flex items-center justify-end space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                </div>
                {edu.skills && (
                  <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-border">
                    {edu.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="tag text-xs font-mono text-text-secondary bg-bg-secondary px-3 py-1.5 rounded-lg">
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section 
        id="skills" 
        ref={(el) => { sectionRefs.current['skills'] = el; }}
        className="py-32 relative"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className={`mb-16 ${isVisible('skills-title') ? 'reveal visible' : 'reveal'}`} id="skills-title" data-reveal>
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-sm font-mono text-accent font-medium">04</span>
              <div className="w-8 h-px bg-accent"></div>
              <span className="text-sm font-mono text-text-tertiary">{t.navigation.skills}</span>
            </div>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-text-primary">{t.skills.title}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className={`card p-8 border border-border rounded-2xl bg-bg-primary ${isVisible('skills-prog') ? 'reveal-left visible' : 'reveal-left'}`} id="skills-prog" data-reveal>
              <h3 className="text-lg font-bold text-text-primary mb-6 flex items-center">
                <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center mr-3">
                  <Code className="w-5 h-5 text-accent" />
                </div>
                {t.skills.programming.title}
              </h3>
              <div className="space-y-4">
                {t.skills.programming.languages.map((lang) => (
                  <div key={lang.name} className="flex items-center justify-between group">
                    <span className="text-text-secondary text-sm group-hover:text-text-primary transition-colors font-medium">{lang.name}</span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            i < lang.level ? 'bg-accent' : 'bg-bg-tertiary'
                          }`}
                        ></div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={`card p-8 border border-border rounded-2xl bg-bg-primary ${isVisible('skills-tech') ? 'reveal visible' : 'reveal'}`} id="skills-tech" data-reveal>
              <h3 className="text-lg font-bold text-text-primary mb-6 flex items-center">
                <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center mr-3">
                  <Zap className="w-5 h-5 text-accent" />
                </div>
                {t.skills.technologies.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {t.skills.technologies.items.map((tech) => (
                  <span key={tech} className="tag text-xs font-mono text-text-secondary bg-bg-secondary px-3 py-2 rounded-lg">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className={`card p-8 border border-border rounded-2xl bg-bg-primary ${isVisible('skills-exp') ? 'reveal-right visible' : 'reveal-right'}`} id="skills-exp" data-reveal>
              <h3 className="text-lg font-bold text-text-primary mb-6 flex items-center">
                <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center mr-3">
                  <Award className="w-5 h-5 text-accent" />
                </div>
                {t.skills.expertise.title}
              </h3>
              <div className="space-y-3">
                {t.skills.expertise.items.map((skill) => (
                  <div key={skill} className="flex items-center group">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3 group-hover:scale-150 transition-transform"></div>
                    <span className="text-text-secondary text-sm group-hover:text-text-primary transition-colors">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section 
        id="certifications" 
        ref={(el) => { sectionRefs.current['certifications'] = el; }}
        className="py-32 bg-bg-secondary relative"
      >
        <div className="absolute top-20 left-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className={`mb-16 ${isVisible('cert-title') ? 'reveal visible' : 'reveal'}`} id="cert-title" data-reveal>
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-sm font-mono text-accent font-medium">05</span>
              <div className="w-8 h-px bg-accent"></div>
              <span className="text-sm font-mono text-text-tertiary">{t.navigation.skills}</span>
            </div>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-text-primary">{t.certifications.title}</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.certifications.items.map((cert, index) => (
              <div 
                key={index} 
                className={`card p-6 border rounded-2xl bg-bg-primary ${cert.featured ? 'border-accent shadow-lg' : 'border-border'} ${isVisible(`cert-${index}`) ? 'reveal-scale visible' : 'reveal-scale'}`}
                id={`cert-${index}`}
                data-reveal
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {cert.featured && (
                  <div className="flex items-center mb-3">
                    <span className="text-xs font-mono bg-accent text-bg-primary px-2 py-1 rounded-full flex items-center">
                      <Sparkles className="w-3 h-3 mr-1" />
                      {t.certifications.featured}
                    </span>
                  </div>
                )}
                <h3 className="text-base font-bold text-text-primary mb-2">{cert.title}</h3>
                <p className="text-accent text-sm font-semibold mb-1">{cert.issuer}</p>
                <p className="text-text-tertiary text-xs mb-4">{cert.date}</p>
                <div className="flex flex-wrap gap-1.5">
                  {cert.skills.map((skill) => (
                    <span key={skill} className="text-xs font-mono text-text-secondary bg-bg-secondary px-2 py-1 rounded">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section 
        id="projects" 
        ref={(el) => { sectionRefs.current['projects'] = el; }}
        className="py-32 relative"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className={`mb-16 ${isVisible('projects-title') ? 'reveal visible' : 'reveal'}`} id="projects-title" data-reveal>
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-sm font-mono text-accent font-medium">06</span>
              <div className="w-8 h-px bg-accent"></div>
              <span className="text-sm font-mono text-text-tertiary">{t.navigation.projects}</span>
            </div>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-text-primary">{t.projects.title}</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {t.projects.items.map((project, index) => (
              <div 
                key={index} 
                className={`card p-8 border rounded-2xl bg-bg-primary ${project.featured ? 'border-accent shadow-lg' : 'border-border'} ${isVisible(`project-${index}`) ? 'reveal visible' : 'reveal'}`}
                id={`project-${index}`}
                data-reveal
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {project.featured && project.badgeText && (
                  <div className="flex items-center mb-4">
                    <span className="text-xs font-mono bg-accent text-bg-primary px-3 py-1 rounded-full flex items-center">
                      <Award className="w-3 h-3 mr-1" />
                      {project.badgeText}
                    </span>
                  </div>
                )}
                <h3 className="text-xl font-bold text-text-primary mb-3">{project.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill) => (
                    <span key={skill} className="tag text-xs font-mono text-text-secondary bg-bg-secondary px-3 py-2 rounded-lg">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        id="contact" 
        ref={(el) => { sectionRefs.current['contact'] = el; }}
        className="py-32 bg-bg-secondary relative overflow-hidden"
      >
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-x-1/2"></div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className={`mb-16 text-center ${isVisible('contact-title') ? 'reveal visible' : 'reveal'}`} id="contact-title" data-reveal>
            <div className="flex items-center justify-center space-x-3 mb-4">
              <span className="text-sm font-mono text-accent font-medium">07</span>
              <div className="w-8 h-px bg-accent"></div>
              <span className="text-sm font-mono text-text-tertiary">{t.navigation.contact}</span>
            </div>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-text-primary mb-4">{t.contact.title}</h2>
            <p className="text-text-secondary max-w-2xl mx-auto text-lg">{t.contact.description}</p>
          </div>

          <div className={`flex flex-col sm:flex-row justify-center items-center gap-4 mb-16 ${isVisible('contact-buttons') ? 'reveal visible' : 'reveal'}`} id="contact-buttons" data-reveal>
            <a
              href="https://www.linkedin.com/in/aliemrecaylak"
              target="_blank"
              rel="noopener noreferrer"
              className="group btn-primary inline-flex items-center px-8 py-4 bg-text-primary text-bg-primary rounded-xl font-semibold hover:bg-accent transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Linkedin className="w-5 h-5 mr-3" />
              {t.contact.linkedinProfile}
              <ExternalLink className="w-4 h-4 ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
            <a
              href="mailto:hello@aliemre.xyz"
              className="group inline-flex items-center px-8 py-4 border-2 border-text-primary rounded-xl font-semibold hover:bg-text-primary hover:text-bg-primary transition-all duration-300"
            >
              <Mail className="w-5 h-5 mr-3" />
              {t.contact.sendEmail}
            </a>
          </div>

          <div className={`grid md:grid-cols-3 gap-6 max-w-4xl mx-auto ${isVisible('contact-info') ? 'reveal visible' : 'reveal'}`} id="contact-info" data-reveal>
            <div className="card p-6 border border-border rounded-2xl bg-bg-primary text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Mail className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-sm font-bold text-text-primary mb-1">{t.contact.email}</h3>
              <p className="text-text-secondary text-sm">hello@aliemre.xyz</p>
              <p className="text-text-tertiary text-xs mt-1">aliemrecaylak@gmail.com</p>
            </div>
            <div className="card p-6 border border-border rounded-2xl bg-bg-primary text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-sm font-bold text-text-primary mb-1">{t.contact.location}</h3>
              <p className="text-text-secondary text-sm">Ankara, Türkiye</p>
            </div>
            <div className="card p-6 border border-border rounded-2xl bg-bg-primary text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Linkedin className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-sm font-bold text-text-primary mb-1">{t.contact.linkedin}</h3>
              <p className="text-text-secondary text-sm">aliemrecaylak</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-text-tertiary text-sm">{t.footer.copyright}</p>
        </div>
      </footer>

      {/* Back to Top */}
      <button
        onClick={() => scrollToSection('hero')}
        className={`fixed bottom-8 right-8 p-4 bg-text-primary text-bg-primary rounded-full shadow-lg hover:bg-accent transition-all duration-300 hover:scale-110 ${scrollProgress > 50 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
      >
        <ChevronDown className="w-5 h-5 rotate-180" />
      </button>
    </div>
  );
}

export default App;