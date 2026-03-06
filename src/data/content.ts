import { LanguageContent } from '../types/language';

export const content: Record<'tr' | 'en', LanguageContent> = {
  tr: {
    navigation: {
      home: 'Ana Sayfa',
      about: 'Hakkımda',
      experience: 'Deneyim',
      education: 'Eğitim',
      skills: 'Yetenekler',
      projects: 'Projeler',
      contact: 'İletişim'
    },
    hero: {
      title: 'Ali Emre Çaylak',
      subtitle: 'Yapay Zeka Odaklı Endüstri Mühendisi',
      description: 'TOBB ETÜ Tam Burslu Endüstri Mühendisliği Lisans ve Yapay Zeka Mühendisliği Yan Dal Mezunudur. Optimizasyon, Simulasyon ve Makine Öğrenmesi alanlarında uzmanlaşmıştır.',
      exploreButton: 'Keşfet',
      contactButton: 'İletişim',
      imageAlt: 'Ali Emre Çaylak Profil Fotoğrafı'
    },
    about: {
      title: 'Hakkımda',
      paragraphs: [
        'Ali Emre Çaylak; TOBB ETÜ tam burslu endüstri mühendisliği lisans ve yapay zeka mühendisliği dan dal mezunudur. 2022 Google Oyun ve Uygulama Akademisi bursiyeri, Ankara Pursaklar Fen lisesi mezunudur.',
        'Endüstri mühendisliği araçlarına, Java ve Python dillerine hakimdir. Beko BMİ\'de, 2025 bahar döneminde TUSAŞ\'ta ve 2025 güz döneminde Roketsan\'da 70 iş günü uzun dönem stajlarını tamamlamıştır. Gerçekleştirdiği ve geliştirmekte olduğu girişimleri ile aktif, problem çözme odaklı ve analitik becerileri gelişmiş birisidir.',
        'Optimizasyon, agent tabanlı simülasyon ve makine öğrenmesi üzerine çalışmaları devam etmektedir. TUSAŞ\'ta yapmış olduğu kompozit malzeme dizilim hesaplama optimizasyonu projesi patentlenme aşamasındadır. İstanbul Havalimanı yer hizmetleri personellerinin vardiya ataması lisans bitirme projesini başarı ile tamamlamıştır. Facebook tarafından geliştirilen Spark AR Studio programında ilk Türkçe kaynağı üretmiş ve eğitim hazırlamıştır.'
      ],
      location: 'Konum',
      interests: {
        title: 'İlgi Alanları',
        items: [
          'Endüstri Mühendisliği',
          'Yapay Zeka & Makine Öğrenimi',
          'Optimizasyon Algoritmaları',
          'Agent tabanlı Simülasyon',
          'Proje & Ürün Yönetimi',
          'Girişimcilik'
        ]
      },
      languages: {
        title: 'Diller',
        turkish: 'Türkçe',
        english: 'İngilizce',
        german: 'Almanca',
        native: 'Ana Dil',
        advanced: 'İleri',
        beginner: 'Başlangıç'
      }
    },
    experience: {
      title: 'Deneyim',
      positions: [
        {
          title: 'İleri Planlama ve Veri Analizi Stajyeri',
          company: 'Roketsan',
          period: 'Eylül 2025 - Aralık 2025',
          location: 'Ankara, Türkiye',
          role: 'Mühendis',
          skills: ['Veri Analizi', 'Apache Superset', 'SQL', 'Tedarik Zinciri Optimizasyonu', 'Python'],
          duration: '70 iş günü'
        },
        {
          title: 'Optimizasyon Mühendisliği Stajyeri',
          company: 'Türk Havacılık ve Uzay Sanayii (TUSAŞ)',
          period: 'Ocak 2025 - Nisan 2025',
          location: 'Ankara, Türkiye',
          role: 'Kompozit Optimizasyon Geliştirici',
          skills: ['Kompozitler', 'Optimizasyon', 'Python'],
          duration: '70 iş günü'
        },
        {
          title: 'Araştırma ve Geliştirme Mühendisliği Stajyeri',
          company: 'Beko Corporate',
          period: 'Mayıs 2024 - Ağustos 2024',
          location: 'Ankara, Türkiye',
          role: 'Proje Yönetimi & Pazarlama',
          skills: ['Çevik Proje Yönetimi', 'Pazarlama Araştırması', 'Proje Yönetimi', 'Python', 'Ürün Yönetimi'],
          duration: '70 iş günü'
        }
      ]
    },
    education: {
      title: 'Eğitim',
      degrees: [
        {
          degree: 'Lisans, Endüstri Mühendisliği',
          school: 'TOBB Ekonomi ve Teknoloji Üniversitesi',
          period: 'Eylül 2021 - Nisan 2026',
          note: 'Tam Burs',
          gpa: '3.32/4.00',
          skills: ['Endüstri Mühendisliği', 'Yöneylem Araştırması', 'Kalite Yönetimi', 'Python', 'CPLEX', 'AutoCAD', 'MS Office Programları', 'Yalın Altı Sigma', 'Sistem Simülasyonu', 'Üretim Sistemleri', 'Kalite Kontrol', 'Mühendislik Ekonomisi', 'Üretim Bilgi Sistemleri', 'Proje Yönetimi', 'İş Analizi ve Tasarımı', 'Teknik Resim', 'Hizmet Sistemleri Tasarımı ve Planlaması', 'Tesis Tasarımı ve Planlaması', 'Stokastik Modelleme']
        },
        {
          degree: 'Yan Dal Programı, Yapay Zeka Mühendisliği',
          school: 'TOBB Ekonomi ve Teknoloji Üniversitesi',
          period: 'Eylül 2023 - Nisan 2026',
          note: 'Tam Burs',
          gpa: '2.38/4.00',
          skills: ['Makine Öğrenimi', 'Python', 'Veri Bilimi', 'Java', 'Nesne Yönelimli Programlama', 'Veri Yapıları', 'Matlab']
        },
        {
          degree: 'Fen Lisesi',
          school: 'Ankara Pursaklar Fen Lisesi',
          period: '2017 - 2021',
          gpa: '93.5/100 | YKS MF Sıralaması: 7337.'
        }
      ]
    },
    skills: {
      title: 'Yetenekler',
      programming: {
        title: 'Programlama',
        languages: [
          { name: 'Python', level: 5 },
          { name: 'Java', level: 4 },
          { name: 'SQL', level: 3 },
          { name: 'Dart', level: 2 },
          { name: 'C', level: 2 },
          { name: 'C#', level: 1 },
          { name: 'Matlab', level: 2 }
        ]
      },
      technologies: {
        title: 'Teknolojiler',
        items: ['Yapay Zeka Modelleri', 'Agent Tabanlı Simülasyon', 'Çok platformlu uygulama geliştirme', 'Optimizasyon Algoritmaları', 'MS Office Programları', 'Otomasyon Araçları', 'Unity', 'Git', 'AutoCAD', 'Arduino', 'Photoshop', 'Superset', 'PowerBI']
      },
      expertise: {
        title: 'Uzmanlık',
        items: [
          'Makine Öğrenimi',
          'Optimizasyon Algoritmaları',
          'Yöneylem Araştırması',
          'Proje Yönetimi',
          'Ürün Yönetimi',
          'Mobil ve Web Uygulama Geliştirme',
          'Simülasyon',
          'Yapay Zeka',
          'E-Ticaret ve Reklamcılık'
        ]
      }
    },
    certifications: {
      title: 'Sertifikalar & Başarılar',
      featured: 'Öne Çıkan',
      items: [
        {
          title: 'Proje Yönetimi Uzmanlığı',
          issuer: 'Google',
          date: 'Haziran 2022',
          skills: ['Proje Yönetimi', 'Çevik Proje Yönetimi', 'Scrum', 'Değişiklik Yönetimi', 'Ekip Yönetimi', 'Proje Yönetimi Yaşam Döngüsü', 'Kalite Yönetimi', 'Proje Dokümantasyonu', 'Sürekli İyileştirme Süreci', 'Proje Planlaması'],
          featured: true
        },
        {
          title: 'JAVA İle Programlamaya Giriş',
          issuer: 'BTK Akademi',
          date: 'Şubat 2024',
          skills: ['Java'],
          featured: true
        },
        {
          title: 'Google Oyun ve Uygulama Akademisi: Teknoloji Girişimciliği',
          issuer: 'Google',
          date: 'Temmuz 2022',
          skills: ['Girişimcilik']
        },
        {
          title: 'Google Oyun ve Uygulama Akademisi: Unity ile Oyun Geliştirme',
          issuer: 'Google',
          date: 'Temmuz 2022',
          skills: ['Unity', 'C#']
        },
        {
          title: 'Proje ve Risk Yönetimi',
          issuer: 'BTK Akademi',
          date: 'Mart 2024',
          skills: ['Risk Yönetimi']
        },
        {
          title: 'Versiyon Kontrolleri: Git ve GitHub',
          issuer: 'BTK Akademi',
          date: 'Mayıs 2022',
          skills: ['Git']
        },
        {
          title: 'Arduino İle Programlama Ve Tasarım',
          issuer: 'T.C. Millî Eğitim Bakanlığı',
          date: 'Mayıs 2019',
          skills: ['Arduino']
        }
      ]
    },
    projects: {
      title: 'Öne Çıkan Projeler',
      patentApplication: '',
      items: [
        {
          title: 'İstanbul Havalimanı Yer Hizmetleri Personeli Çizelgeleme',
          description: 'İstanbul Havalimanı yolcu sayısı tahminleme, güvenlik noktası simulasyonu ve güvenlik personelleri için çok kriterli işgücü optimizasyonu karar destek mekanizması.',
          skills: ['Makine Öğrenmesi', 'Ajan Tabanlı Simülasyon', 'Optimizasyon Algoritmaları', 'Lineer Programlama'],
          badgeText: 'Lisans Bitirme Projesi',
          featured: true
        },
        {
          title: 'Kompozit Malzeme Optimizasyonu',
          description: 'Kompozit malzeme dizilim hesaplama optimizasyonları üzerine geliştirilen proje. Patent başvurusu yapılmış durumda.',
          skills: ['Python', 'Optimizasyon Algoritmaları', 'Kompozitler', 'Sezgisel Algoritmalar'],
          badgeText: 'Patent Sürecinde',
          featured: true
        },
        {
          title: 'Endüstri Mühendisliği Projeleri',
          description: 'Kalite, tesis planlama, simülasyon, yalın 6 sigma ve yöneylem araştırması konularında gerçekleştirilen çeşitli ders projeleri.',
          skills: ['Kalite Kontrol', 'Simülasyon', 'Yöneylem Araştırması', 'Proje Yönetimi', 'İş Analizi ve Tasarımı']
        },
        {
          title: 'Makine Öğrenimi Projeleri',
          description: 'Yapay zeka, makine öğrenimi, veri yapıları ve algoritma alanlarında geliştirilen çeşitli projeler ve araştırmalar.',
          skills: ['Makine Öğrenimi', 'Python', 'Java', 'MatLab']
        }
      ]
    },
    contact: {
      title: 'İletişime Geçin',
      description: 'Projelerim hakkında daha fazla bilgi almak, iş birliği fırsatları değerlendirmek veya herhangi bir konuda görüşmek için benimle iletişime geçebilirsiniz.',
      linkedinProfile: 'LinkedIn Profili',
      sendEmail: 'E-posta Gönder',
      email: 'E-posta',
      location: 'Konum',
      linkedin: 'LinkedIn'
    },
    footer: {
      copyright: '© 2026 Ali Emre Çaylak. Tüm hakları saklıdır.'
    }
  },
  en: {
    navigation: {
      home: 'Home',
      about: 'About',
      experience: 'Experience',
      education: 'Education',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact'
    },
    hero: {
      title: 'Ali Emre Çaylak',
      subtitle: 'AI-Focused Industrial Engineer',
      description: 'Industrial Engineering graduate with a minor in AI Engineering from TOBB ETU (Full Scholarship). Specialized in Optimization, Simulation, and Machine Learning.',
      exploreButton: 'Explore',
      contactButton: 'Contact',
      imageAlt: 'Ali Emre Çaylak Profile Photo'
    },
    about: {
      title: 'About Me',
      paragraphs: [
        'Ali Emre Çaylak is a full scholarship Industrial Engineering graduate with a minor in Artificial Intelligence Engineering from TOBB ETU. He is a 2022 Google Game and Application Academy scholar and a graduate of Ankara Pursaklar Science High School.',
        'He is proficient in industrial engineering tools as well as Java and Python. He completed 70-day long-term internships at Beko BMİ in summer 2024, TUSAŞ in spring 2025, and Roketsan in fall 2025. He is an active, problem-solving, and analytically-minded individual with several ongoing entrepreneurial ventures.',
        'He continues his work in optimization, agent-based simulation, and machine learning. His project on composite material layout calculation optimization at TUSAŞ is currently in the patent application process. He successfully completed his graduation project on shift assignment for ground handling personnel at Istanbul Airport. He also authored the first Turkish resource and training for Facebook\'s Spark AR Studio.'
      ],
      location: 'Location',
      interests: {
        title: 'Interests',
        items: [
          'Industrial Engineering',
          'AI & Machine Learning',
          'Optimization Algorithms',
          'Agent-based Simulation',
          'Project & Product Management',
          'Entrepreneurship'
        ]
      },
      languages: {
        title: 'Languages',
        turkish: 'Turkish',
        english: 'English',
        german: 'German',
        native: 'Native',
        advanced: 'Advanced',
        beginner: 'Beginner'
      }
    },
    experience: {
      title: 'Experience',
      positions: [
        {
          title: 'Advanced Planning and Data Analysis Intern',
          company: 'Roketsan',
          period: 'September 2025 - December 2025',
          location: 'Ankara, Turkey',
          role: 'Engineer',
          skills: ['Data Analysis', 'Apache Superset', 'SQL', 'Supply Chain Optimization', 'Python'],
          duration: '70 business days'
        },
        {
          title: 'Optimization Engineering Intern',
          company: 'Turkish Aerospace Industries (TUSAŞ)',
          period: 'January 2025 - April 2025',
          location: 'Ankara, Turkey',
          role: 'Composite Optimization Developer',
          skills: ['Composites', 'Optimization', 'Python'],
          duration: '70 business days'
        },
        {
          title: 'R&D Engineering Intern',
          company: 'Beko Corporate',
          period: 'May 2024 - August 2024',
          location: 'Ankara, Turkey',
          role: 'Project Management & Marketing',
          skills: ['Agile Project Management', 'Marketing Research', 'Project Management', 'Python', 'Product Management'],
          duration: '70 business days'
        }
      ]
    },
    education: {
      title: 'Education',
      degrees: [
        {
          degree: 'B.Sc., Industrial Engineering',
          school: 'TOBB University of Economics and Technology',
          period: 'September 2021 - April 2026',
          note: 'Full Scholarship',
          gpa: '3.32/4.00',
          skills: ['Industrial Engineering', 'Operations Research', 'Quality Management', 'Python', 'CPLEX', 'AutoCAD', 'MS Office', 'Lean Six Sigma', 'System Simulation', 'Production Systems', 'Quality Control', 'Engineering Economics', 'Production Info Systems', 'Project Management', 'Work Analysis & Design', 'Technical Drawing', 'Service Systems Planning', 'Facility Design', 'Stochastic Modeling']
        },
        {
          degree: 'Minor, Artificial Intelligence Engineering',
          school: 'TOBB University of Economics and Technology',
          period: 'September 2023 - April 2026',
          note: 'Full Scholarship',
          gpa: '2.38/4.00',
          skills: ['Machine Learning', 'Python', 'Data Science', 'Java', 'OOP', 'Data Structures', 'Matlab']
        },
        {
          degree: 'Science High School',
          school: 'Ankara Pursaklar Science High School',
          period: '2017 - 2021',
          gpa: '93.5/100 | YKS Ranking: 7337'
        }
      ]
    },
    skills: {
      title: 'Skills',
      programming: {
        title: 'Programming',
        languages: [
          { name: 'Python', level: 5 },
          { name: 'Java', level: 4 },
          { name: 'SQL', level: 3 },
          { name: 'Dart', level: 2 },
          { name: 'C', level: 2 },
          { name: 'C#', level: 1 },
          { name: 'Matlab', level: 2 }
        ]
      },
      technologies: {
        title: 'Technologies',
        items: ['AI Models', 'Agent-Based Simulation', 'Cross-Platform Development', 'Optimization Algorithms', 'MS Office', 'Automation Tools', 'Unity', 'Git', 'AutoCAD', 'Arduino', 'Photoshop', 'Superset', 'PowerBI']
      },
      expertise: {
        title: 'Expertise',
        items: [
          'Machine Learning',
          'Optimization Algorithms',
          'Operations Research',
          'Project Management',
          'Product Management',
          'Mobile & Web Development',
          'Simulation',
          'Artificial Intelligence',
          'E-Commerce & Advertising'
        ]
      }
    },
    certifications: {
      title: 'Certifications & Achievements',
      featured: 'Featured',
      items: [
        {
          title: 'Project Management Professionalism',
          issuer: 'Google',
          date: 'June 2022',
          skills: ['Project Management', 'Agile', 'Scrum', 'Change Management', 'Team Management', 'Lifecycle Management', 'Quality Management', 'Documentation', 'Continuous Improvement', 'Planning'],
          featured: true
        },
        {
          title: 'Introduction to Programming with JAVA',
          issuer: 'BTK Academy',
          date: 'February 2024',
          skills: ['Java'],
          featured: true
        },
        {
          title: 'Google Game & App Academy: Tech Entrepreneurship',
          issuer: 'Google',
          date: 'July 2022',
          skills: ['Entrepreneurship']
        },
        {
          title: 'Google Game & App Academy: Game Development with Unity',
          issuer: 'Google',
          date: 'July 2022',
          skills: ['Unity', 'C#']
        },
        {
          title: 'Project & Risk Management',
          issuer: 'BTK Academy',
          date: 'March 2024',
          skills: ['Risk Management']
        },
        {
          title: 'Version Control: Git & GitHub',
          issuer: 'BTK Academy',
          date: 'May 2022',
          skills: ['Git']
        },
        {
          title: 'Arduino Programming & Design',
          issuer: 'Ministry of National Education',
          date: 'May 2019',
          skills: ['Arduino']
        }
      ]
    },
    projects: {
      title: 'Featured Projects',
      patentApplication: '',
      items: [
        {
          title: 'Istanbul Airport Ground Services Personnel Scheduling',
          description: 'Passenger demand forecasting, security checkpoint simulation, and a multi-criteria workforce optimization decision support mechanism for security personnel at Istanbul Airport.',
          skills: ['Machine Learning', 'Agent-Based Simulation', 'Optimization Algorithms', 'Linear Programming'],
          badgeText: 'Graduation Project',
          featured: true
        },
        {
          title: 'Composite Material Optimization',
          description: 'A project developed on composite material layout calculation optimizations. Patent application has been submitted.',
          skills: ['Python', 'Optimization Algorithms', 'Composites', 'Heuristic Algorithms'],
          badgeText: 'In Patent Process',
          featured: true
        },
        {
          title: 'Industrial Engineering Projects',
          description: 'Various course projects in quality control, facility planning, simulation, lean six sigma, and operations research.',
          skills: ['Quality Control', 'Simulation', 'Operations Research', 'Project Management', 'Work Analysis & Design']
        },
        {
          title: 'Machine Learning Projects',
          description: 'Various projects and research in the fields of AI, machine learning, data structures, and algorithms.',
          skills: ['Machine Learning', 'Python', 'Java', 'MatLab']
        }
      ]
    },
    contact: {
      title: 'Get In Touch',
      description: 'Contact me to learn more about my projects, explore collaboration opportunities, or for any other inquiries.',
      linkedinProfile: 'LinkedIn Profile',
      sendEmail: 'Send Email',
      email: 'Email',
      location: 'Location',
      linkedin: 'LinkedIn'
    },
    footer: {
      copyright: '© 2026 Ali Emre Çaylak. All rights reserved.'
    }
  }
};