import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink, Calendar, Building, GraduationCap, Award, Code, Briefcase, ChevronDown, Star, Zap, Target, Rocket } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'education', 'skills', 'certifications', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              AE
            </div>
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'hero', label: 'Ana Sayfa' },
                { id: 'about', label: 'Hakkımda' },
                { id: 'experience', label: 'Deneyim' },
                { id: 'education', label: 'Eğitim' },
                { id: 'skills', label: 'Yetenekler' },
                { id: 'projects', label: 'Projeler' },
                { id: 'contact', label: 'İletişim' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm transition-all duration-300 hover:text-purple-400 ${
                    activeSection === item.id ? 'text-purple-400 border-b-2 border-purple-400' : 'text-gray-300'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              <a href="https://www.linkedin.com/in/aliemrecaylak" target="_blank" rel="noopener noreferrer" 
                 className="p-2 text-gray-400 hover:text-purple-400 transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:aliemrecaylak@gmail.com" 
                 className="p-2 text-gray-400 hover:text-purple-400 transition-colors duration-300">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-6xl md:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
                  Ali Emre
                </span>
                <br />
                <span className="text-white">Çaylak</span>
              </h1>
              <div className="flex items-center space-x-4">
                <div className="h-1 w-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                <p className="text-xl text-gray-300">Endüstri Mühendisi & Yapay Zeka Meraklısı</p>
              </div>
            </div>
            
            <p className="text-lg text-gray-400 leading-relaxed max-w-lg">
              TOBB ETÜ tam burslu öğrencisi, 2022 Google Oyun ve Uygulama Akademisi bursiyeri. 
              Optimizasyon algoritmaları ve yapay zeka alanlarında uzmanlaşıyor.
            </p>
            
            <div className="flex space-x-6">
              <button 
                onClick={() => scrollToSection('about')}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
              >
                Keşfet
              </button>
              <a 
                href="mailto:aliemrecaylak@gmail.com"
                className="px-8 py-4 border-2 border-purple-500 rounded-full text-purple-400 font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                İletişim
              </a>
            </div>
          </div>
          
          <div className="relative animate-fade-in-right">
            <div className="relative w-80 h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
              <div className="relative w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-full border-4 border-purple-500/30 flex items-center justify-center overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-purple-600/20 to-pink-600/20 flex items-center justify-center">
                  <span className="text-6xl font-bold text-purple-300">AE</span>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-500 rounded-full animate-bounce delay-300"></div>
            </div>
            <p className="text-center text-gray-400 mt-4 text-sm">
              Resim
            </p>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button onClick={() => scrollToSection('about')} className="text-purple-400 hover:text-purple-300 transition-colors">
            <ChevronDown className="w-8 h-8" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Hakkımda
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 animate-fade-in-left">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 transform hover:scale-105">
                <p className="text-gray-300 leading-relaxed text-lg">
                  Ali Emre Çaylak; TOBB ETÜ tam burslu Endüstri Mühendisliği, Yapay Zeka Mühendisliği Yan Dal öğrencisidir. 
                  2022 Google Oyun ve Uygulama Akademisi bursiyeri, Ankara Pursaklar Fen lisesi mezunudur.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 transform hover:scale-105">
                <p className="text-gray-300 leading-relaxed text-lg">
                  Endüstri mühendisliği araçlarına, Java ve Python dillerine hakimdir. 2024 yaz döneminde Beko Global'de, 
                  2025 bahar döneminde TUSAŞ'ta ve 2025 güz döneminde Roketsan'da 70 iş günü uzun dönem stajlarını tamamlamıştır.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 transform hover:scale-105">
                <p className="text-gray-300 leading-relaxed text-lg">
                  Kompozit malzeme dizilim hesaplama optimizasyonları üzerine çalışmış ve projesi patentlenme aşamasındadır. Endüstri mühendisliği dallarında takımlı projeler yapmış, başarı ile sonuçlandırmıştır. Makine öğrenimi üzerinde kendini geliştirmektedir. Facebook tarafından geliştirilen Spark AR Studio programında ilk Türkçe kaynağı üretmiş ve eğitim hazırlamıştır.
                </p>
              </div>
            </div>
            
            <div className="space-y-6 animate-fade-in-right">
              <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-6 rounded-2xl border border-purple-500/30">
                <h3 className="text-2xl font-bold text-purple-300 mb-4 flex items-center">
                  <MapPin className="w-6 h-6 mr-3" />
                  Konum
                </h3>
                <p className="text-gray-300">Ankara, Türkiye</p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-6 rounded-2xl border border-purple-500/30">
                <h3 className="text-2xl font-bold text-purple-300 mb-4 flex items-center">
                  <Star className="w-6 h-6 mr-3" />
                  İlgi Alanları
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-300">
                    <Zap className="w-4 h-4 mr-2 text-yellow-400" />
                    <span>Endüstri Mühendisliği</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Zap className="w-4 h-4 mr-2 text-yellow-400" />
                    <span>Yapay Zeka & Makine Öğrenimi</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Zap className="w-4 h-4 mr-2 text-yellow-400" />
                    <span>Optimizasyon Algoritmaları</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Zap className="w-4 h-4 mr-2 text-yellow-400" />
                    <span>Proje & Ürün Yönetimi</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Zap className="w-4 h-4 mr-2 text-yellow-400" />
                    <span>Girişimcilik</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-6 rounded-2xl border border-purple-500/30">
                <h3 className="text-2xl font-bold text-purple-300 mb-4">Diller</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Türkçe</span>
                    <span className="text-sm text-purple-400 bg-purple-500/20 px-3 py-1 rounded-full">Ana Dil</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">İngilizce</span>
                    <span className="text-sm text-purple-400 bg-purple-500/20 px-3 py-1 rounded-full">İleri</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Almanca</span>
                    <span className="text-sm text-purple-400 bg-purple-500/20 px-3 py-1 rounded-full">Başlangıç</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="min-h-screen flex items-center py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-pink-900/10"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-5xl font-bold mb-6 flex items-center justify-center">
              <Briefcase className="w-12 h-12 mr-4 text-purple-400" />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Deneyim
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="space-y-8">
            {[
              {
                title: "Long Term Intern",
                company: "Roketsan",
                period: "Eylül 2025 - Aralık 2025",
                location: "Ankara, Türkiye",
                role: "Engineer",
                skills: ["Industrial Engineering"],
                color: "from-red-500 to-orange-500"
              },
              {
                title: "Optimization Engineering Intern",
                company: "Türk Havacılık ve Uzay Sanayii (TUSAŞ)",
                period: "Ocak 2025 - Nisan 2025",
                location: "Ankara, Türkiye",
                role: "Composite Optimization Developer",
                skills: ["Composites", "Optimization", "Python"],
                color: "from-blue-500 to-cyan-500"
              },
              {
                title: "Research And Development Engineering Intern",
                company: "Beko Corporate",
                period: "Mayıs 2024 - Ağustos 2024",
                location: "Ankara, Türkiye",
                role: "Project Management & Marketing",
                skills: ["Agile Proje Yönetimi", "Pazarlama Araştırması", "Proje Yönetimi", "Python", "Ürün Yönetimi"],
                color: "from-green-500 to-emerald-500"
              },
              {
                title: "Instructor",
                company: "Udemy",
                period: "2020 - 2021",
                location: "Ankara, Türkiye",
                role: "Spark AR ile Sıfırdan Instagram Filtresi Tasarlama",
                skills: ["Spark AR", "Analitik Beceriler", "Eğitim"],
                color: "from-purple-500 to-violet-500"
              },
              {
                title: "Editor",
                company: "Sosyazete",
                period: "2019 - 2020",
                location: "Ankara, Turkey",
                skills: ["İletişim", "Analitik Beceriler"],
                color: "from-pink-500 to-rose-500"
              }
            ].map((exp, index) => (
              <div key={index} className="group animate-fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                      <p className={`text-xl font-semibold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent mb-1`}>
                        {exp.company}
                      </p>
                      {exp.role && <p className="text-gray-400 mb-2">{exp.role}</p>}
                      {exp.description && <p className="text-gray-300 text-sm mb-4">{exp.description}</p>}
                    </div>
                    <div className="text-right text-sm text-gray-400">
                      <div className="flex items-center mb-1">
                        <Calendar className="w-4 h-4 mr-1" />
                        {exp.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30 hover:bg-purple-500/30 transition-colors duration-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="min-h-screen flex items-center py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-l from-purple-900/10 to-pink-900/10"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-5xl font-bold mb-6 flex items-center justify-center">
              <GraduationCap className="w-12 h-12 mr-4 text-purple-400" />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Eğitim
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="space-y-8">
            {[
              {
                degree: "Minor Program, Artificial Intelligence Engineering",
                school: "TOBB Ekonomi ve Teknoloji Üniversitesi",
                period: "Eylül 2023 - Nisan 2026",
                note: "Tam Burs",
                skills: ["Machine Learning", "Python", "Data Science", "Java", "Object-Oriented Programming", "Data Structures", "Matlab"],
                color: "from-blue-500 to-cyan-500"
              },
              {
                degree: "Bachelor's degree, Industrial Engineering",
                school: "TOBB Ekonomi ve Teknoloji Üniversitesi",
                period: "Eylül 2021 - Nisan 2026",
                note: "Tam Burs",
                skills: ["Industrial Engineering", "Operations Research", "Quality Management", "Python", "CPLEX", "AutoCAD", "MS Office Programs", "Lean Six Sigma", "System Simulation", "Production Systems", "Quality Control", "Engineering Economics", "Production Information Systems", "Project Management", "Work Analysis and Design", "Technical Drawing", "Service Systems Design and Planning", "Facilities Design and Planning", "Stocchastic Modeling"],
                color: "from-purple-500 to-violet-500"
              },
              {
                degree: "Fen Lisesi",
                school: "Ankara Pursaklar High School of Science",
                period: "2017 - 2021",
                color: "from-pink-500 to-rose-500"
              }
            ].map((edu, index) => (
              <div key={index} className="group animate-fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                      <p className={`text-xl font-semibold bg-gradient-to-r ${edu.color} bg-clip-text text-transparent mb-1`}>
                        {edu.school}
                      </p>
                      {edu.note && (
                        <span className="inline-block px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-sm font-semibold rounded-full">
                          {edu.note}
                        </span>
                      )}
                    </div>
                    <div className="text-right text-sm text-gray-400">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {edu.period}
                      </div>
                    </div>
                  </div>
                  {edu.skills && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {edu.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30 hover:bg-purple-500/30 transition-colors duration-300">
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-pink-900/10"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-5xl font-bold mb-6 flex items-center justify-center">
              <Code className="w-12 h-12 mr-4 text-purple-400" />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Yetenekler
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="animate-fade-in-left">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 transform hover:scale-105 h-full">
                <h3 className="text-2xl font-bold text-purple-300 mb-6 flex items-center">
                  <Code className="w-6 h-6 mr-3" />
                  Programlama
                </h3>
                <div className="space-y-4">
                  {["Python", "Java", "C", "C#", "Matlab"].map((skill, index) => (
                    <div key={skill} className="flex items-center justify-between group">
                      <span className="text-gray-300">{skill}</span>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <div key={i} className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            i < (skill === 'Python' || skill === 'Java' ? 5 : 4) 
                              ? 'bg-purple-500' 
                              : 'bg-gray-600'
                          } group-hover:scale-125`}></div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="animate-fade-in-up">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 transform hover:scale-105 h-full">
                <h3 className="text-2xl font-bold text-purple-300 mb-6 flex items-center">
                  <Target className="w-6 h-6 mr-3" />
                  Teknolojiler
                </h3>
                <div className="flex flex-wrap gap-3">
                  {["Yapay Zeka Modelleri", "Arena", "Optimizasyon Algoritmaları", "MS Office Programları", "n8n", "Otomasyon Araöları", "Unity", "Git", "AutoCAD", "Arduino", "Photoshop", "Minitab", "PowerBI"].map((tech) => (
                    <span key={tech} className="px-4 py-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-purple-300 rounded-lg border border-purple-500/30 hover:border-purple-400 hover:bg-purple-500/30 transition-all duration-300 transform hover:scale-105">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="animate-fade-in-right">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 transform hover:scale-105 h-full">
                <h3 className="text-2xl font-bold text-purple-300 mb-6 flex items-center">
                  <Rocket className="w-6 h-6 mr-3" />
                  Uzmanlık
                </h3>
                <div className="space-y-3">
                  {[
                    "Machine Learning",
                    "Optimizasyon Algoritmaları",
                    "Proje Yönetimi",
                    "Ürün Yönetimi",
                    "Quality Management",
                    "Operations Research",
                    "Yapay Zeka",
                    "E-Ticaret ve Reklamcılık"
                  ].map((skill) => (
                    <div key={skill} className="flex items-center group">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></div>
                      <span className="text-gray-300 group-hover:text-purple-300 transition-colors duration-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="min-h-screen flex items-center py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-900/10 to-purple-900/10"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-5xl font-bold mb-6 flex items-center justify-center">
              <Award className="w-12 h-12 mr-4 text-purple-400" />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Sertifikalar & Başarılar
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Project Management Specialization",
                issuer: "Google",
                date: "Haziran 2022",
                skills: ["Proje Yönetimi", "Agile Proje Yönetimi", "Scrum", "Değişiklik Yönetimi", "Ekip Yönetimi", "Proje Yönetimi Yaşım Döngüsü", "Kalite Yönetimi", "Proje Dokümantasyonu", "Sürekli İyileştirme Süreci", "Proje Planlaması"],
                featured: true
              },
              {
                title: "JAVA İle Programlamaya Giriş",
                issuer: "BTK Akademi",
                date: "Şubat 2024",
                skills: ["Java"],
                featured: true
              },
              {
                title: "Google Oyun ve Uygulama Akademisi: Teknoloji Girişimciliği",
                issuer: "Google",
                date: "Temmuz 2022",
                skills: ["Girişimcilik"]
              },
              {
                title: "Google Oyun ve Uygulama Akademisi: Unity ile Oyun Geliştirme",
                issuer: "Google",
                date: "Temmuz 2022",
                skills: ["Unity", "C#"]
              },
              {
                title: "Proje ve Risk Yönetim",
                issuer: "BTK Akademi",
                date: "Mart 2024",
                skills: ["Risk Yönetimi"]
              },
              {
                title: "Versiyon Kontrolleri: Git ve GitHub",
                issuer: "BTK Akademi",
                date: "Mayıs 2022",
                skills: ["Git"]
              },
              {
                title: "Arduino İle Programlama Ve Tasarım",
                issuer: "T.C. Millî Eğitim Bakanlığı",
                date: "Mayıs 2019",
                skills: ["Arduino"]
              }
            ].map((cert, index) => (
              <div key={index} className={`group animate-fade-in-up ${cert.featured ? 'md:col-span-2 lg:col-span-1' : ''}`} style={{ animationDelay: `${index * 100}ms` }}>
                <div className={`bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl border transition-all duration-500 transform hover:scale-105 hover:shadow-2xl h-full ${
                  cert.featured 
                    ? 'border-yellow-500/40 hover:border-yellow-400 hover:shadow-yellow-500/20' 
                    : 'border-purple-500/20 hover:border-purple-500/40 hover:shadow-purple-500/20'
                }`}>
                  {cert.featured && (
                    <div className="flex items-center mb-3">
                      <Star className="w-5 h-5 text-yellow-400 mr-2" />
                      <span className="text-yellow-400 text-sm font-semibold">Öne Çıkan</span>
                    </div>
                  )}
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                    {cert.title}
                  </h3>
                  <p className="text-purple-400 font-medium mb-2">{cert.issuer}</p>
                  <p className="text-gray-400 text-sm mb-4">{cert.date}</p>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <span key={skill} className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs border border-purple-500/30">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-pink-900/10"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-5xl font-bold mb-6 flex items-center justify-center">
              <Building className="w-12 h-12 mr-4 text-purple-400" />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Öne Çıkan Projeler
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Kompozit Malzeme Optimizasyonu",
                description: "Kompozit malzeme dizilim hesaplama optimizasyonları üzerine geliştirilen proje. Patent başvurusu yapılmış durumda.",
                skills: ["Python", "Optimization Algoritihms", "Composites", "Patent"],
                color: "from-red-500 to-orange-500",
                featured: true
              },
              {
                title: "Endüstri Mühendisliği Projeleri",
                description: "Kalite, simulasyon ve yöneylem araştırmaları gibi endüstri mühendisliği konularında takım halinde gerçekleştirilen çeşitli projeler.",
                skills: ["Quality Control", "Simulation", "Operations Research", "Project Management", "Work Analysis and Design"],
                color: "from-green-500 to-emerald-500"
              },
              {
                title: "Makine Öğrenimi Projeleri",
                description: "Yapay zeka ve makine öğrenimi alanında geliştirilen çeşitli projeler ve araştırmalar.",
                skills: ["Machine Learning", "Python", "Java", "MatLab"],
                color: "from-blue-500 to-cyan-500"
              },
              {
                title: "Spark AR Instagram Filtreleri",
                description: "Facebook Spark AR Studio ile Instagram ve Facebook filtreleri geliştirme. İlk Türkçe kaynak ve eğitim içeriği üretimi.",
                skills: ["Spark AR", "3D Animation", "Eğitim", "Instagram"],
                color: "from-purple-500 to-violet-500"
              },
            ].map((project, index) => (
              <div key={index} className="group animate-fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
                <div className={`bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border transition-all duration-500 transform hover:scale-105 hover:shadow-2xl h-full ${
                  project.featured 
                    ? 'border-yellow-500/40 hover:border-yellow-400 hover:shadow-yellow-500/20' 
                    : 'border-purple-500/20 hover:border-purple-500/40 hover:shadow-purple-500/20'
                }`}>
                  {project.featured && (
                    <div className="flex items-center mb-4">
                      <Star className="w-5 h-5 text-yellow-400 mr-2" />
                      <span className="text-yellow-400 text-sm font-semibold">Patent Başvurusu</span>
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill) => (
                      <span key={skill} className={`px-3 py-2 bg-gradient-to-r ${project.color}/20 text-white rounded-lg border border-purple-500/30 hover:border-purple-400 transition-all duration-300 transform hover:scale-105`}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center animate-fade-in-up">
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                İletişime Geçin
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-12"></div>
            
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Projelerim hakkında daha fazla bilgi almak, iş birliği fırsatları değerlendirmek 
              veya herhangi bir konuda görüşmek için benimle iletişime geçebilirsiniz.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 mb-16">
              <a href="https://www.linkedin.com/in/aliemrecaylak" target="_blank" rel="noopener noreferrer"
                 className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-purple-500/25">
                <Linkedin className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                LinkedIn Profili
              </a>
              <a href="mailto:aliemrecaylak@gmail.com"
                 className="group inline-flex items-center px-8 py-4 border-2 border-purple-500 rounded-full text-purple-400 font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300 transform hover:scale-110">
                <Mail className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                E-posta Gönder
              </a>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 transform hover:scale-105">
                <Mail className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">E-posta</h3>
                <p className="text-gray-400">aliemrecaylak@gmail.com</p>
              </div>
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 transform hover:scale-105">
                <MapPin className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Konum</h3>
                <p className="text-gray-400">Ankara, Türkiye</p>
              </div>
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 transform hover:scale-105">
                <Linkedin className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">LinkedIn</h3>
                <p className="text-gray-400">aliemrecaylak</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-purple-500/20 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2025 Ali Emre Çaylak. Tüm hakları saklıdır.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;