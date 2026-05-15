import { LanguageContent } from '../types/language';

export const content: Record<'tr' | 'en', LanguageContent> = {
  tr: {
    navigation: { home: 'Ana Sayfa', about: 'Hakkımda', experience: 'Deneyim', education: 'Eğitim', skills: 'Yetenekler', projects: 'Projeler', contact: 'İletişim' },
    hero: { title: 'Ali Emre Çaylak', subtitle: 'Yapay Zeka Odaklı Endüstri Mühendisi', description: 'TOBB ETÜ Tam Burslu Endüstri Mühendisliği Lisans ve Yapay Zeka Mühendisliği Yan Dal Mezunu', exploreButton: 'Keşfet', contactButton: 'İletişim', imageAlt: 'Ali Emre Çaylak Profil Fotoğrafı' },
    about: { title: 'Hakkımda', paragraphs: ['Paragraf 1'], location: 'Konum', interests: { title: 'İlgi Alanları', items: ['Endüstri Mühendisliği'] }, languages: { title: 'Diller', turkish: 'Türkçe', english: 'İngilizce', german: 'Almanca', native: 'Ana Dil', advanced: 'İleri', beginner: 'Başlangıç' } },
    experience: { title: 'Deneyim', positions: [] },
    education: { title: 'Eğitim', degrees: [] },
    skills: { title: 'Yetenekler', programming: { title: 'Programlama', languages: [] }, technologies: { title: 'Teknolojiler', items: [] }, expertise: { title: 'Uzmanlık', items: [] } },
    certifications: { title: 'Sertifikalar', featured: 'Öne Çıkan', items: [] },
    projects: { title: 'Projeler', items: [] },
    contact: { title: 'İletişim', description: '', linkedinProfile: 'LinkedIn Profili', sendEmail: 'E-posta Gönder', email: 'E-posta', location: 'Konum', linkedin: 'LinkedIn' },
    footer: { copyright: '© 2026 Ali Emre Çaylak.' }
  },
  en: {
    navigation: { home: 'Home', about: 'About', experience: 'Experience', education: 'Education', skills: 'Skills', projects: 'Projects', contact: 'Contact' },
    hero: { title: 'Ali Emre Çaylak', subtitle: 'AI-Focused Industrial Engineer', description: 'Industrial Engineering graduate with a minor in AI Engineering.', exploreButton: 'Explore', contactButton: 'Contact', imageAlt: 'Ali Emre Çaylak Profile Photo' },
    about: { title: 'About Me', paragraphs: ['Paragraph 1'], location: 'Location', interests: { title: 'Interests', items: ['Industrial Engineering'] }, languages: { title: 'Languages', turkish: 'Turkish', english: 'English', german: 'German', native: 'Native', advanced: 'Advanced', beginner: 'Beginner' } },
    experience: { title: 'Experience', positions: [] },
    education: { title: 'Education', degrees: [] },
    skills: { title: 'Skills', programming: { title: 'Programming', languages: [] }, technologies: { title: 'Technologies', items: [] }, expertise: { title: 'Expertise', items: [] } },
    certifications: { title: 'Certifications', featured: 'Featured', items: [] },
    projects: { title: 'Projects', items: [] },
    contact: { title: 'Contact', description: '', linkedinProfile: 'LinkedIn Profile', sendEmail: 'Send Email', email: 'Email', location: 'Location', linkedin: 'LinkedIn' },
    footer: { copyright: '© 2026 Ali Emre Çaylak.' }
  }
};