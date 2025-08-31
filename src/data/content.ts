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
      subtitle: 'Endüstri Mühendisi & Yapay Zeka Meraklısı',
      description: 'TOBB ETÜ tam burslu öğrencisi, 2022 Google Oyun ve Uygulama Akademisi bursiyeri. Optimizasyon algoritmaları ve yapay zeka alanlarında uzmanlaşıyor.',
      exploreButton: 'Keşfet',
      contactButton: 'İletişim',
      imageAlt: 'Ali Emre Çaylak Profil Fotoğrafı'
    },
    about: {
      title: 'Hakkımda',
      paragraphs: [
        'Ali Emre Çaylak; TOBB ETÜ tam burslu Endüstri Mühendisliği, Yapay Zeka Mühendisliği Yan Dal öğrencisidir. 2022 Google Oyun ve Uygulama Akademisi bursiyeri, Ankara Pursaklar Fen lisesi mezunudur.',
        'Endüstri mühendisliği araçlarına, Java ve Python dillerine hakimdir. 2024 yaz döneminde Beko Global\'de, 2025 bahar döneminde TUSAŞ\'ta ve 2025 güz döneminde Roketsan\'da 70 iş günü uzun dönem stajlarını tamamlamıştır.',
        'Kompozit malzeme dizilim hesaplama optimizasyonları üzerine çalışmış ve projesi patentlenme aşamasındadır. Endüstri mühendisliği dallarında takımlı projeler yapmış, başarı ile sonuçlandırmıştır. Makine öğrenimi üzerinde kendini geliştirmektedir. Facebook tarafından geliştirilen Spark AR Studio programında ilk Türkçe kaynağı üretmiş ve eğitim hazırlamıştır.'
      ],
      location: 'Konum',
      interests: {
        title: 'İlgi Alanları',
        items: [
          'Endüstri Mühendisliği',
          'Yapay Zeka & Makine Öğrenimi',
          'Optimizasyon Algoritmaları',
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
          title: 'Uzun Dönem Stajyer',
          company: 'Roketsan',
          period: 'Eylül 2025 - Aralık 2025',
          location: 'Ankara, Türkiye',
          role: 'Mühendis',
          skills: ['Endüstri Mühendisliği'],
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
        },
        {
          title: 'Eğitmen',
          company: 'Udemy',
          period: '2020 - 2021',
          location: 'Ankara, Türkiye',
          role: 'Spark AR ile Sıfırdan Instagram Filtresi Tasarlama',
          skills: ['Spark AR', 'Analitik Beceriler', 'Eğitim']
        },
        {
          title: 'Editör',
          company: 'Sosyazete',
          period: '2019 - 2020',
          location: 'Ankara, Türkiye',
          skills: ['İletişim', 'Analitik Beceriler']
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
          gpa: '2.71/4.00',
          skills: ['Makine Öğrenimi', 'Python', 'Veri Bilimi', 'Java', 'Nesne Yönelimli Programlama', 'Veri Yapıları', 'Matlab']
        },
        {
          degree: 'Fen Lisesi',
          school: 'Ankara Pursaklar Fen Lisesi',
          period: '2017 - 2021',
          gpa: 'YKS MF Sıralaması: 7337'
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
          { name: 'C', level: 2 },
          { name: 'C#', level: 1 },
          { name: 'Matlab', level: 2 }
        ]
      },
      technologies: {
        title: 'Teknolojiler',
        items: ['Yapay Zeka Modelleri', 'Arena', 'Optimizasyon Algoritmaları', 'MS Office Programları', 'n8n', 'Otomasyon Araçları', 'Unity', 'Git', 'AutoCAD', 'Arduino', 'Photoshop', 'Minitab', 'PowerBI']
      },
      expertise: {
        title: 'Uzmanlık',
        items: [
          'Makine Öğrenimi',
          'Optimizasyon Algoritmaları',
          'Proje Yönetimi',
          'Ürün Yönetimi',
          'Kalite Yönetimi',
          'Yöneylem Araştırması',
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
      patentApplication: 'Patent Başvurusu',
      items: [
        {
          title: 'Kompozit Malzeme Optimizasyonu',
          description: 'Kompozit malzeme dizilim hesaplama optimizasyonları üzerine geliştirilen proje. Patent başvurusu yapılmış durumda.',
          skills: ['Python', 'Optimizasyon Algoritmaları', 'Kompozitler', 'Patent'],
          featured: true
        },
        {
          title: 'Endüstri Mühendisliği Projeleri',
          description: 'Kalite, simulasyon ve yöneylem araştırmaları gibi endüstri mühendisliği konularında takım halinde gerçekleştirilen çeşitli projeler.',
          skills: ['Kalite Kontrol', 'Simülasyon', 'Yöneylem Araştırması', 'Proje Yönetimi', 'İş Analizi ve Tasarımı']
        },
        {
          title: 'Makine Öğrenimi Projeleri',
          description: 'Yapay zeka ve makine öğrenimi alanında geliştirilen çeşitli projeler ve araştırmalar.',
          skills: ['Makine Öğrenimi', 'Python', 'Java', 'MatLab']
        },
        {
          title: 'Spark AR Instagram Filtreleri',
          description: 'Facebook Spark AR Studio ile Instagram ve Facebook filtreleri geliştirme. İlk Türkçe kaynak ve eğitim içeriği üretimi.',
          skills: ['Spark AR', '3D Animasyon', 'Eğitim', 'Instagram']
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
      copyright: '© 2025 Ali Emre Çaylak. Tüm hakları saklıdır.'
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
      subtitle: 'Industrial Engineer & AI Specialist',
      description: 'Full scholarship student at TOBB ETU, 2022 Google Game and Application Academy scholar. Specializing in optimization algorithms and artificial intelligence.',
      exploreButton: 'Explore',
      contactButton: 'Contact',
      imageAlt: 'Ali Emre Çaylak Profile Photo'
    },
    about: {
      title: 'About Me',
      paragraphs: [
        'Ali Emre Çaylak is a full scholarship Industrial Engineering student with a minor in Artificial Intelligence Engineering at TOBB ETU. He is a 2022 Google Game and Application Academy scholar and graduated from Ankara Pursaklar Science High School.',
        'He is proficient in industrial engineering tools, Java and Python programming languages. He completed 70-day long-term internships at Beko Global in summer 2024, TUSAŞ in spring 2025, and Roketsan in fall 2025.',
        'He has worked on composite material layout calculation optimizations and his project is in the patent application process. He has successfully completed team projects in various industrial engineering fields. He is developing himself in machine learning. He created the first Turkish resource and training for Spark AR Studio developed by Facebook.'
      ],
      location: 'Location',
      interests: {
        title: 'Interests',
        items: [
          'Industrial Engineering',
          'Artificial Intelligence & Machine Learning',
          'Optimization Algorithms',
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
          title: 'Long Term Intern',
          company: 'Roketsan',
          period: 'September 2025 - December 2025',
          location: 'Ankara, Turkey',
          role: 'Engineer',
          skills: ['Industrial Engineering'],
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
          title: 'Research And Development Engineering Intern',
          company: 'Beko Corporate',
          period: 'May 2024 - August 2024',
          location: 'Ankara, Turkey',
          role: 'Project Management & Marketing',
          skills: ['Agile Project Management', 'Marketing Research', 'Project Management', 'Python', 'Product Management'],
          duration: '70 business days'
        },
        {
          title: 'Instructor',
          company: 'Udemy',
          period: '2020 - 2021',
          location: 'Ankara, Turkey',
          role: 'Creating Instagram Filters from Scratch with Spark AR',
          skills: ['Spark AR', 'Analytical Skills', 'Education']
        },
        {
          title: 'Editor',
          company: 'Sosyazete',
          period: '2019 - 2020',
          location: 'Ankara, Turkey',
          skills: ['Communication', 'Analytical Skills']
        }
      ]
    },
    education: {
      title: 'Education',
      degrees: [
        {
          degree: 'Minor Program, Artificial Intelligence Engineering',
          school: 'TOBB University of Economics and Technology',
          period: 'September 2023 - April 2026',
          note: 'Full Scholarship',
          gpa: '2.71/4.00',
          skills: ['Machine Learning', 'Python', 'Data Science', 'Java', 'Object-Oriented Programming', 'Data Structures', 'Matlab']
        },
        {
          degree: 'Bachelor\'s degree, Industrial Engineering',
          school: 'TOBB University of Economics and Technology',
          period: 'September 2021 - April 2026',
          note: 'Full Scholarship',
          gpa: '3.32/4.00',
          skills: ['Industrial Engineering', 'Operations Research', 'Quality Management', 'Python', 'CPLEX', 'AutoCAD', 'MS Office Programs', 'Lean Six Sigma', 'System Simulation', 'Production Systems', 'Quality Control', 'Engineering Economics', 'Production Information Systems', 'Project Management', 'Work Analysis and Design', 'Technical Drawing', 'Service Systems Design and Planning', 'Facilities Design and Planning', 'Stochastic Modeling']
        },
        {
          degree: 'Science High School',
          school: 'Ankara Pursaklar Science High School',
          period: '2017 - 2021',
          gpa: '93.5/100 (YKS MF Ranking: 7337)'
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
          { name: 'C', level: 2 },
          { name: 'C#', level: 1 },
          { name: 'Matlab', level: 2 }
        ]
      },
      technologies: {
        title: 'Technologies',
        items: ['AI Models', 'Arena', 'Optimization Algorithms', 'MS Office Programs', 'n8n', 'Automation Tools', 'Unity', 'Git', 'AutoCAD', 'Arduino', 'Photoshop', 'Minitab', 'PowerBI']
      },
      expertise: {
        title: 'Expertise',
        items: [
          'Machine Learning',
          'Optimization Algorithms',
          'Project Management',
          'Product Management',
          'Quality Management',
          'Operations Research',
          'Artificial Intelligence',
          'E-Commerce and Advertising'
        ]
      }
    },
    certifications: {
      title: 'Certifications & Achievements',
      featured: 'Featured',
      items: [
        {
          title: 'Project Management Specialization',
          issuer: 'Google',
          date: 'June 2022',
          skills: ['Project Management', 'Agile Project Management', 'Scrum', 'Change Management', 'Team Management', 'Project Management Life Cycle', 'Quality Management', 'Project Documentation', 'Continuous Improvement Process', 'Project Planning'],
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
          title: 'Google Game and Application Academy: Technology Entrepreneurship',
          issuer: 'Google',
          date: 'July 2022',
          skills: ['Entrepreneurship']
        },
        {
          title: 'Google Game and Application Academy: Game Development with Unity',
          issuer: 'Google',
          date: 'July 2022',
          skills: ['Unity', 'C#']
        },
        {
          title: 'Project and Risk Management',
          issuer: 'BTK Academy',
          date: 'March 2024',
          skills: ['Risk Management']
        },
        {
          title: 'Version Control: Git and GitHub',
          issuer: 'BTK Academy',
          date: 'May 2022',
          skills: ['Git']
        },
        {
          title: 'Programming and Design with Arduino',
          issuer: 'Republic of Turkey Ministry of National Education',
          date: 'May 2019',
          skills: ['Arduino']
        }
      ]
    },
    projects: {
      title: 'Featured Projects',
      patentApplication: 'Patent Application',
      items: [
        {
          title: 'Composite Material Optimization',
          description: 'A project developed on composite material layout calculation optimizations. Patent application has been submitted.',
          skills: ['Python', 'Optimization Algorithms', 'Composites', 'Patent'],
          featured: true
        },
        {
          title: 'Industrial Engineering Projects',
          description: 'Various team projects in industrial engineering topics such as quality, simulation and operations research.',
          skills: ['Quality Control', 'Simulation', 'Operations Research', 'Project Management', 'Work Analysis and Design']
        },
        {
          title: 'Machine Learning Projects',
          description: 'Various projects and research developed in the field of artificial intelligence and machine learning.',
          skills: ['Machine Learning', 'Python', 'Java', 'MatLab']
        },
        {
          title: 'Spark AR Instagram Filters',
          description: 'Developing Instagram and Facebook filters with Facebook Spark AR Studio. Creating the first Turkish resource and training content.',
          skills: ['Spark AR', '3D Animation', 'Education', 'Instagram']
        }
      ]
    },
    contact: {
      title: 'Get In Touch',
      description: 'Feel free to contact me to learn more about my projects, explore collaboration opportunities, or discuss any topic.',
      linkedinProfile: 'LinkedIn Profile',
      sendEmail: 'Send Email',
      email: 'Email',
      location: 'Location',
      linkedin: 'LinkedIn'
    },
    footer: {
      copyright: '© 2025 Ali Emre Çaylak. All rights reserved.'
    }
  }
};