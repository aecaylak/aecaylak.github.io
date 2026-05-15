import React, { useState, useEffect, useRef } from 'react';
import { Mail, Linkedin, ExternalLink, Calendar, MapPin, Globe, ArrowUpRight, ChevronDown, Sparkles, Cpu, Zap, Code, Briefcase, GraduationCap, Award, Star, TrendingUp, Rocket, Settings } from 'lucide-react';
import { useLanguage } from './hooks/useLanguage';
import { content } from './data/content';
import Admin from './pages/Admin';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'admin'>('home');
  
  if (currentPage === 'admin') {
    return <Admin />;
  }
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
      <nav className={`fixed top-0 left-0 right-0 z-50 bg-bg-primary/95 backdrop-blur-md border-b-2 border-border transition-all duration-300 ${isNavCollapsed ? 'py-3 shadow-lg' : 'py-5'}`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => scrollToSection('hero')}>
              <span className="font-serif text-xl font-bold text-text-primary tracking-tight group-hover:text-accent transition-all duration-300">
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
                  className={`nav-link text-sm font-bold transition-colors ${activeSection === item.id ? 'text-text-primary' : 'text-text-tertiary hover:text-accent'}`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={toggleLanguage}
                className="group flex items-center space-x-1 px-4 py-2 border-2 border-border rounded-lg hover:border-accent hover:bg-accent/10 transition-all duration-300"
              >
                <Globe className="w-4 h-4 text-text-tertiary group-hover:text-accent transition-colors" />
                <span className="text-sm font-mono font-bold text-text-tertiary group-hover:text-accent transition-colors">{language.toUpperCase()}</span>
              </button>
              <button
                onClick={() => setCurrentPage('admin')}
                className="group flex items-center space-x-1 px-4 py-2 border-2 border-border rounded-lg hover:border-accent hover:bg-accent/10 transition-all duration-300"
                title="Admin Paneli"
              >
                <Settings className="w-4 h-4 text-text-tertiary group-hover:text-accent transition-colors" />
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
        {/* Background Decorations */}
        <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-[400px] h-[400px] bg-accent-light/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Decorative Lines */}
        <div className="absolute top-32 left-10 w-px h-48 bg-gradient-to-b from-transparent via-accent/30 to-transparent"></div>
        <div className="absolute top-32 right-10 w-px h-48 bg-gradient-to-b from-transparent via-accent/30 to-transparent"></div>
        
        <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`space-y-8 ${isVisible('hero-title') ? 'reveal visible' : 'reveal'}`} id="hero-title" data-reveal>
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="accent-dot w-3 h-3 bg-accent rounded-full"></div>
                  <p className="text-sm font-mono text-accent tracking-widest font-bold">
                    {t.hero.subtitle}
                  </p>
                </div>
                <h1 className="font-serif text-6xl lg:text-8xl font-black text-text-primary leading-none">
                  <span className="block relative">
                    Ali Emre
                    <div className="absolute -bottom-3 left-0 w-24 h-1.5 bg-gradient-to-r from-accent via-accent-light to-transparent rounded-full shadow-lg shadow-accent/50"></div>
                  </span>
                  <span className="block text-text-secondary mt-4">Çaylak</span>
                </h1>
              </div>
              
              <p className="text-xl text-text-secondary leading-relaxed max-w-lg font-medium">
                {t.hero.description}
              </p>

              <div className="flex flex-wrap gap-4 pt-6">
                <button
                  onClick={() => scrollToSection('about')}
                  className="group btn-primary ripple inline-flex items-center px-10 py-5 bg-text-primary text-bg-primary rounded-xl font-bold hover:bg-accent transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-accent/30"
                >
                  {t.hero.exploreButton}
                  <ArrowUpRight className="w-5 h-5 ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
                <a
                  href="mailto:hello@aliemre.xyz"
                  className="inline-flex items-center px-10 py-5 border-2 border-text-primary rounded-xl font-bold hover:bg-text-primary hover:text-bg-primary transition-all duration-300"
                >
                  {t.hero.contactButton}
                </a>
              </div>
              
              {/* Stats Row */}
              <div className="flex items-center space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-black text-accent">3</div>
                  <div className="text-xs font-mono text-text-tertiary">STAJ</div>
                </div>
                <div className="w-px h-12 bg-border"></div>
                <div className="text-center">
                  <div className="text-3xl font-black text-accent">210</div>
                  <div className="text-xs font-mono text-text-tertiary">İŞ GÜNÜ</div>
                </div>
                <div className="w-px h-12 bg-border"></div>
                <div className="text-center">
                  <div className="text-3xl font-black text-accent">7</div>
                  <div className="text-xs font-mono text-text-tertiary">SERTİFİKA</div>
                </div>
              </div>
            </div>

            <div className={`relative ${isVisible('hero-image') ? 'reveal-right visible' : 'reveal-right'}`} id="hero-image" data-reveal>
              <div className="relative aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-accent-light/20 to-transparent rounded-3xl transform rotate-6 shadow-2xl"></div>
                <div className="absolute inset-4 bg-gradient-to-br from-bg-secondary to-bg-tertiary rounded-2xl transform -rotate-3"></div>
                <img
                  src="/profil.png"
                  alt={t.hero.imageAlt}
                  className="relative w-full h-full object-cover rounded-2xl shadow-2xl image-rotate"
                />
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-accent to-accent-light rounded-2xl backdrop-blur-sm flex items-center justify-center animate-float shadow-xl shadow-accent/30">
                  <Cpu className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-14 h-14 bg-text-primary rounded-xl flex items-center justify-center animate-float shadow-lg" style={{ animationDelay: '1s' }}>
                  <Rocket className="w-7 h-7 text-bg-primary" />
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
            <span className="text-xs font-mono mb-2 tracking-widest font-bold">SCROLL</span>
            <ChevronDown className="w-6 h-6 animate-bounce" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section 
        id="about" 
        ref={(el) => { sectionRefs.current['about'] = el; }}
        className="py-32 bg-bg-secondary relative overflow-hidden"
      >
        <div className="absolute top-0 left-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl -translate-x-1/2"></div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className={`mb-16 ${isVisible('about-title') ? 'reveal visible' : 'reveal'}`} id="about-title" data-reveal>
            <div className="flex items-center space-x-4 mb-6">
              <span className="section-number text-2xl font-black text-accent">01</span>
              <div className="decorative-line"></div>
              <span className="text-sm font-mono text-text-tertiary font-bold">{t.navigation.about}</span>
            </div>
            <h2 className="font-serif text-5xl lg:text-6xl font-black text-text-primary">{t.about.title}</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className={`space-y-8 ${isVisible('about-text') ? 'reveal-left visible' : 'reveal-left'}`} id="about-text" data-reveal>
              {t.about.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-text-secondary leading-relaxed text-lg font-medium border-l-4 border-accent pl-6">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className={`space-y-6 ${isVisible('about-info') ? 'reveal-right visible' : 'reveal-right'}`} id="about-info" data-reveal>
              <div className="card p-8 border-2 border-border rounded-2xl bg-bg-primary hover:border-accent">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-accent to-accent-light rounded-xl flex items-center justify-center shadow-lg shadow-accent/30">
                    <MapPin className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-sm font-bold text-text-secondary">{t.about.location}</span>
                </div>
                <p className="text-text-primary font-black text-2xl">Ankara, Türkiye</p>
              </div>

              <div className="card p-8 border-2 border-border rounded-2xl bg-bg-primary hover:border-accent">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-accent to-accent-light rounded-xl flex items-center justify-center shadow-lg shadow-accent/30">
                    <Sparkles className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-sm font-bold text-text-secondary">{t.about.interests.title}</span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {t.about.interests.items.map((interest, index) => (
                    <div key={index} className="flex items-center group">
                      <div className="w-3 h-3 bg-accent rounded-full mr-3 group-hover:scale-150 transition-transform"></div>
                      <span className="text-text-primary text-sm font-medium">{interest}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card p-8 border-2 border-border rounded-2xl bg-bg-primary hover:border-accent">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-accent to-accent-light rounded-xl flex items-center justify-center shadow-lg shadow-accent/30">
                    <Globe className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-sm font-bold text-text-secondary">{t.about.languages.title}</span>
                </div>
                <div className="space-y-4">
                  {[
                    { name: t.about.languages.turkish, level: t.about.languages.native },
                    { name: t.about.languages.english, level: t.about.languages.advanced },
                    { name: t.about.languages.german, level: t.about.languages.beginner }
                  ].map((lang, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-text-primary text-sm font-bold">{lang.name}</span>
                      <span className="text-xs font-mono font-bold bg-gradient-to-r from-accent to-accent-light text-white px-4 py-2 rounded-full">{lang.level}</span>
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
            <div className="flex items-center space-x-4 mb-6">
              <span className="section-number text-2xl font-black text-accent">02</span>
              <div className="decorative-line"></div>
              <span className="text-sm font-mono text-text-tertiary font-bold">{t.navigation.experience}</span>
            </div>
            <h2 className="font-serif text-5xl lg:text-6xl font-black text-text-primary">{t.experience.title}</h2>
          </div>

          <div className="space-y-8">
            {t.experience.positions.map((exp, index) => (
              <div 
                key={index} 
                className={`group card p-10 border-2 border-border rounded-3xl bg-bg-primary hover:border-accent hover:shadow-2xl hover:shadow-accent/20 ${isVisible(`exp-${index}`) ? 'reveal visible' : 'reveal'}`} 
                id={`exp-${index}`}
                data-reveal
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent-light rounded-xl flex items-center justify-center shadow-lg shadow-accent/30">
                        <Briefcase className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-black text-text-primary">{exp.title}</h3>
                    </div>
                    <p className="text-accent font-bold text-xl mb-2">{exp.company}</p>
                    {exp.role && <p className="text-text-secondary text-sm mb-4 font-medium">{exp.role}</p>}
                    {exp.duration && (
                      <span className="inline-flex items-center text-xs font-mono font-bold bg-gradient-to-r from-accent to-accent-light text-white px-4 py-2 rounded-full shadow-lg">
                        <Zap className="w-4 h-4 mr-2" />
                        {exp.duration}
                      </span>
                    )}
                  </div>
                  <div className="text-right text-sm text-text-tertiary">
                    <div className="flex items-center justify-end space-x-2 mb-2 font-medium">
                      <Calendar className="w-5 h-5" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center justify-end space-x-2 font-medium">
                      <MapPin className="w-5 h-5" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 mt-6 pt-6 border-t-2 border-border">
                  {exp.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="tag text-sm font-mono font-medium text-text-secondary bg-bg-secondary px-4 py-2 rounded-xl">
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
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl"></div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className={`mb-16 ${isVisible('education-title') ? 'reveal visible' : 'reveal'}`} id="education-title" data-reveal>
            <div className="flex items-center space-x-4 mb-6">
              <span className="section-number text-2xl font-black text-accent">03</span>
              <div className="decorative-line"></div>
              <span className="text-sm font-mono text-text-tertiary font-bold">{t.navigation.education}</span>
            </div>
            <h2 className="font-serif text-5xl lg:text-6xl font-black text-text-primary">{t.education.title}</h2>
          </div>

          <div className="space-y-8">
            {t.education.degrees.map((edu, index) => (
              <div 
                key={index} 
                className={`group card p-10 border-2 border-border rounded-3xl bg-bg-primary hover:border-accent hover:shadow-2xl hover:shadow-accent/20 ${isVisible(`edu-${index}`) ? 'reveal visible' : 'reveal'}`} 
                id={`edu-${index}`}
                data-reveal
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent-light rounded-xl flex items-center justify-center shadow-lg shadow-accent/30">
                        <GraduationCap className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-black text-text-primary">{edu.degree}</h3>
                    </div>
                    <p className="text-accent font-bold text-xl">{edu.school}</p>
                    <div className="flex flex-wrap gap-3 mt-4">
                      {edu.note && (
                        <span className="text-sm font-mono font-bold bg-text-primary text-bg-primary px-4 py-2 rounded-full shadow-lg">
                          {edu.note}
                        </span>
                      )}
                      {edu.gpa && (
                        <span className="text-sm font-mono font-bold bg-gradient-to-r from-accent/20 to-accent-light/20 text-accent px-4 py-2 rounded-full border-2 border-accent/30">
                          GPA: {edu.gpa}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="text-right text-sm text-text-tertiary">
                    <div className="flex items-center justify-end space-x-2 font-medium">
                      <Calendar className="w-5 h-5" />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                </div>
                {edu.skills && (
                  <div className="flex flex-wrap gap-3 mt-6 pt-6 border-t-2 border-border">
                    {edu.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="tag text-sm font-mono font-medium text-text-secondary bg-bg-secondary px-4 py-2 rounded-xl">
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
            <div className="flex items-center space-x-4 mb-6">
              <span className="section-number text-2xl font-black text-accent">04</span>
              <div className="decorative-line"></div>
              <span className="text-sm font-mono text-text-tertiary font-bold">{t.navigation.skills}</span>
            </div>
            <h2 className="font-serif text-5xl lg:text-6xl font-black text-text-primary">{t.skills.title}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className={`card p-10 border-2 border-border rounded-3xl bg-bg-primary hover:border-accent hover:shadow-2xl hover:shadow-accent/20 ${isVisible('skills-prog') ? 'reveal-left visible' : 'reveal-left'}`} id="skills-prog" data-reveal>
              <h3 className="text-xl font-black text-text-primary mb-8 flex items-center">
                <div className="w-14 h-14 bg-gradient-to-br from-accent to-accent-light rounded-xl flex items-center justify-center mr-4 shadow-lg shadow-accent/30">
                  <Code className="w-7 h-7 text-white" />
                </div>
                {t.skills.programming.title}
              </h3>
              <div className="space-y-5">
                {t.skills.programming.languages.map((lang) => (
                  <div key={lang.name} className="flex items-center justify-between group">
                    <span className="text-text-secondary text-base font-bold group-hover:text-accent transition-colors">{lang.name}</span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-4 h-4 rounded-full transition-all duration-300 ${
                            i < lang.level ? 'bg-gradient-to-r from-accent to-accent-light shadow-lg shadow-accent/50' : 'bg-bg-tertiary'
                          }`}
                        ></div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={`card p-10 border-2 border-border rounded-3xl bg-bg-primary hover:border-accent hover:shadow-2xl hover:shadow-accent/20 ${isVisible('skills-tech') ? 'reveal visible' : 'reveal'}`} id="skills-tech" data-reveal>
              <h3 className="text-xl font-black text-text-primary mb-8 flex items-center">
                <div className="w-14 h-14 bg-gradient-to-br from-accent to-accent-light rounded-xl flex items-center justify-center mr-4 shadow-lg shadow-accent/30">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                {t.skills.technologies.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {t.skills.technologies.items.map((tech) => (
                  <span key={tech} className="tag text-sm font-mono font-medium text-text-secondary bg-bg-secondary px-4 py-3 rounded-xl">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className={`card p-10 border-2 border-border rounded-3xl bg-bg-primary hover:border-accent hover:shadow-2xl hover:shadow-accent/20 ${isVisible('skills-exp') ? 'reveal-right visible' : 'reveal-right'}`} id="skills-exp" data-reveal>
              <h3 className="text-xl font-black text-text-primary mb-8 flex items-center">
                <div className="w-14 h-14 bg-gradient-to-br from-accent to-accent-light rounded-xl flex items-center justify-center mr-4 shadow-lg shadow-accent/30">
                  <Award className="w-7 h-7 text-white" />
                </div>
                {t.skills.expertise.title}
              </h3>
              <div className="space-y-4">
                {t.skills.expertise.items.map((skill) => (
                  <div key={skill} className="flex items-center group">
                    <div className="w-3 h-3 bg-accent rounded-full mr-4 group-hover:scale-150 transition-transform"></div>
                    <span className="text-text-secondary text-sm font-bold group-hover:text-accent transition-colors">{skill}</span>
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
        <div className="absolute top-20 left-20 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl"></div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className={`mb-16 ${isVisible('cert-title') ? 'reveal visible' : 'reveal'}`} id="cert-title" data-reveal>
            <div className="flex items-center space-x-4 mb-6">
              <span className="section-number text-2xl font-black text-accent">05</span>
              <div className="decorative-line"></div>
              <span className="text-sm font-mono text-text-tertiary font-bold">{t.navigation.skills}</span>
            </div>
            <h2 className="font-serif text-5xl lg:text-6xl font-black text-text-primary">{t.certifications.title}</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.certifications.items.map((cert, index) => (
              <div 
                key={index} 
                className={`card p-8 border-2 rounded-3xl bg-bg-primary ${cert.featured ? 'border-accent shadow-xl shadow-accent/20 hover:shadow-2xl hover:shadow-accent/30' : 'border-border hover:border-accent'} ${isVisible(`cert-${index}`) ? 'reveal-scale visible' : 'reveal-scale'}`}
                id={`cert-${index}`}
                data-reveal
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {cert.featured && (
                  <div className="flex items-center mb-5">
                    <span className="text-sm font-mono font-bold bg-gradient-to-r from-accent to-accent-light text-white px-4 py-2 rounded-full flex items-center shadow-lg">
                      <Sparkles className="w-4 h-4 mr-2" />
                      {t.certifications.featured}
                    </span>
                  </div>
                )}
                <h3 className="text-lg font-black text-text-primary mb-3">{cert.title}</h3>
                <p className="text-accent text-base font-bold mb-2">{cert.issuer}</p>
                <p className="text-text-tertiary text-sm mb-5 font-medium">{cert.date}</p>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <span key={skill} className="tag text-xs font-mono font-medium text-text-secondary bg-bg-secondary px-3 py-2 rounded-lg">
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
            <div className="flex items-center space-x-4 mb-6">
              <span className="section-number text-2xl font-black text-accent">06</span>
              <div className="decorative-line"></div>
              <span className="text-sm font-mono text-text-tertiary font-bold">{t.navigation.projects}</span>
            </div>
            <h2 className="font-serif text-5xl lg:text-6xl font-black text-text-primary">{t.projects.title}</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {t.projects.items.map((project, index) => (
              <div 
                key={index} 
                className={`card p-10 border-2 rounded-3xl bg-bg-primary ${project.featured ? 'border-accent shadow-xl shadow-accent/20 hover:shadow-2xl hover:shadow-accent/30' : 'border-border hover:border-accent'} ${isVisible(`project-${index}`) ? 'reveal visible' : 'reveal'}`}
                id={`project-${index}`}
                data-reveal
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {project.featured && project.badgeText && (
                  <div className="flex items-center mb-6">
                    <span className="text-sm font-mono font-bold bg-gradient-to-r from-accent to-accent-light text-white px-5 py-2 rounded-full flex items-center shadow-lg">
                      <Award className="w-4 h-4 mr-2" />
                      {project.badgeText}
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-black text-text-primary mb-4">{project.title}</h3>
                <p className="text-text-secondary text-base leading-relaxed mb-8 font-medium">{project.description}</p>
                <div className="flex flex-wrap gap-3">
                  {project.skills.map((skill) => (
                    <span key={skill} className="tag text-sm font-mono font-medium text-text-secondary bg-bg-secondary px-4 py-3 rounded-xl">
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
        <div className="absolute top-0 left-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl -translate-x-1/2"></div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className={`mb-16 text-center ${isVisible('contact-title') ? 'reveal visible' : 'reveal'}`} id="contact-title" data-reveal>
            <div className="flex items-center justify-center space-x-4 mb-8">
              <span className="section-number text-2xl font-black text-accent">07</span>
              <div className="decorative-line"></div>
              <span className="text-sm font-mono text-text-tertiary font-bold">{t.navigation.contact}</span>
            </div>
            <h2 className="font-serif text-5xl lg:text-6xl font-black text-text-primary mb-6">{t.contact.title}</h2>
            <p className="text-text-secondary max-w-2xl mx-auto text-xl font-medium">{t.contact.description}</p>
          </div>

          <div className={`flex flex-col sm:flex-row justify-center items-center gap-6 mb-16 ${isVisible('contact-buttons') ? 'reveal visible' : 'reveal'}`} id="contact-buttons" data-reveal>
            <a
              href="https://www.linkedin.com/in/aliemrecaylak"
              target="_blank"
              rel="noopener noreferrer"
              className="group btn-primary ripple inline-flex items-center px-10 py-5 bg-text-primary text-bg-primary rounded-xl font-bold hover:bg-accent transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-accent/30"
            >
              <Linkedin className="w-6 h-6 mr-3" />
              {t.contact.linkedinProfile}
              <ExternalLink className="w-5 h-5 ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
            <a
              href="mailto:hello@aliemre.xyz"
              className="group btn-primary ripple inline-flex items-center px-10 py-5 border-2 border-text-primary rounded-xl font-bold hover:bg-text-primary hover:text-bg-primary transition-all duration-300 shadow-xl"
            >
              <Mail className="w-6 h-6 mr-3" />
              {t.contact.sendEmail}
            </a>
          </div>

          <div className={`grid md:grid-cols-3 gap-8 max-w-4xl mx-auto ${isVisible('contact-info') ? 'reveal visible' : 'reveal'}`} id="contact-info" data-reveal>
            <div className="card p-8 border-2 border-border rounded-3xl bg-bg-primary text-center hover:border-accent hover:shadow-xl hover:shadow-accent/20">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent-light rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg shadow-accent/30">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-base font-black text-text-primary mb-2">{t.contact.email}</h3>
              <p className="text-text-secondary text-sm font-medium">hello@aliemre.xyz</p>
              <p className="text-text-tertiary text-xs mt-1 font-mono">aliemrecaylak@gmail.com</p>
            </div>
            <div className="card p-8 border-2 border-border rounded-3xl bg-bg-primary text-center hover:border-accent hover:shadow-xl hover:shadow-accent/20">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent-light rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg shadow-accent/30">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-base font-black text-text-primary mb-2">{t.contact.location}</h3>
              <p className="text-text-secondary text-sm font-medium">Ankara, Türkiye</p>
            </div>
            <div className="card p-8 border-2 border-border rounded-3xl bg-bg-primary text-center hover:border-accent hover:shadow-xl hover:shadow-accent/20">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent-light rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg shadow-accent/30">
                <Linkedin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-base font-black text-text-primary mb-2">{t.contact.linkedin}</h3>
              <p className="text-text-secondary text-sm font-medium">aliemrecaylak</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t-2 border-border bg-bg-primary">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-text-tertiary text-sm font-mono font-bold">{t.footer.copyright}</p>
        </div>
      </footer>

      {/* Back to Top */}
      <button
        onClick={() => scrollToSection('hero')}
        className={`fixed bottom-8 right-8 p-4 bg-gradient-to-br from-text-primary to-accent text-bg-primary rounded-full shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 ${scrollProgress > 50 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
      >
        <ChevronDown className="w-6 h-6 rotate-180" />
      </button>
    </div>
  );
}

export default App;