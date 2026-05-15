import React, { useState, useEffect } from 'react';
import { 
  Save, Download, Moon, Sun, Eye, Edit3, Trash2, Plus, 
  ChevronRight, User, Briefcase, GraduationCap, Code, Award, 
  Folder, Mail, Globe, ArrowLeft, Check, X, AlertTriangle,
  FileJson, Copy, RefreshCw
} from 'lucide-react';
import { Language } from '../types/language';
import { LanguageContent } from '../types/language';

interface FormData {
  navigation: {
    home: string;
    about: string;
    experience: string;
    education: string;
    skills: string;
    projects: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    description: string;
    exploreButton: string;
    contactButton: string;
    imageAlt: string;
  };
  about: {
    title: string;
    paragraphs: string[];
    location: string;
    interests: {
      title: string;
      items: string[];
    };
    languages: {
      title: string;
      turkish: string;
      english: string;
      german: string;
      native: string;
      advanced: string;
      beginner: string;
    };
  };
  experience: {
    title: string;
    positions: Array<{
      title: string;
      company: string;
      period: string;
      location: string;
      role: string;
      skills: string[];
      duration: string;
    }>;
  };
  education: {
    title: string;
    degrees: Array<{
      degree: string;
      school: string;
      period: string;
      note: string;
      gpa: string;
      skills: string[];
    }>;
  };
  skills: {
    title: string;
    programming: {
      title: string;
      languages: Array<{ name: string; level: number }>;
    };
    technologies: {
      title: string;
      items: string[];
    };
    expertise: {
      title: string;
      items: string[];
    };
  };
  certifications: {
    title: string;
    featured: string;
    items: Array<{
      title: string;
      issuer: string;
      date: string;
      skills: string[];
      featured: boolean;
    }>;
  };
  projects: {
    title: string;
    patentApplication: string;
    items: Array<{
      title: string;
      description: string;
      skills: string[];
      badgeText: string;
      featured: boolean;
    }>;
  };
  contact: {
    title: string;
    description: string;
    linkedinProfile: string;
    sendEmail: string;
    email: string;
    location: string;
    linkedin: string;
  };
  footer: {
    copyright: string;
  };
}

const defaultContent: Record<Language, FormData> = {
  tr: {
    navigation: { home: 'Ana Sayfa', about: 'Hakkımda', experience: 'Deneyim', education: 'Eğitim', skills: 'Yetenekler', projects: 'Projeler', contact: 'İletişim' },
    hero: { title: 'Ali Emre Çaylak', subtitle: 'Yapay Zeka Odaklı Endüstri Mühendisi', description: 'TOBB ETÜ Tam Burslu Endüstri Mühendisliği Lisans ve Yapay Zeka Mühendisliği Yan Dal Mezunudur.', exploreButton: 'Keşfet', contactButton: 'İletişim', imageAlt: 'Ali Emre Çaylak Profil Fotoğrafı' },
    about: {
      title: 'Hakkımda',
      paragraphs: ['Paragraf 1', 'Paragraf 2', 'Paragraf 3'],
      location: 'Konum',
      interests: { title: 'İlgi Alanları', items: ['Endüstri Mühendisliği', 'Yapay Zeka'] },
      languages: { title: 'Diller', turkish: 'Türkçe', english: 'İngilizce', german: 'Almanca', native: 'Ana Dil', advanced: 'İleri', beginner: 'Başlangıç' }
    },
    experience: { title: 'Deneyim', positions: [{ title: '', company: '', period: '', location: '', role: '', skills: [], duration: '' }] },
    education: { title: 'Eğitim', degrees: [{ degree: '', school: '', period: '', note: '', gpa: '', skills: [] }] },
    skills: { title: 'Yetenekler', programming: { title: 'Programlama', languages: [] }, technologies: { title: 'Teknolojiler', items: [] }, expertise: { title: 'Uzmanlık', items: [] } },
    certifications: { title: 'Sertifikalar', featured: 'Öne Çıkan', items: [] },
    projects: { title: 'Projeler', patentApplication: '', items: [] },
    contact: { title: 'İletişim', description: '', linkedinProfile: 'LinkedIn Profili', sendEmail: 'E-posta Gönder', email: 'E-posta', location: 'Konum', linkedin: 'LinkedIn' },
    footer: { copyright: '© 2026 Ali Emre Çaylak.' }
  },
  en: {
    navigation: { home: 'Home', about: 'About', experience: 'Experience', education: 'Education', skills: 'Skills', projects: 'Projects', contact: 'Contact' },
    hero: { title: 'Ali Emre Çaylak', subtitle: 'AI-Focused Industrial Engineer', description: 'Industrial Engineering graduate with a minor in AI Engineering.', exploreButton: 'Explore', contactButton: 'Contact', imageAlt: 'Ali Emre Çaylak Profile Photo' },
    about: {
      title: 'About Me',
      paragraphs: ['Paragraph 1', 'Paragraph 2', 'Paragraph 3'],
      location: 'Location',
      interests: { title: 'Interests', items: ['Industrial Engineering', 'AI'] },
      languages: { title: 'Languages', turkish: 'Turkish', english: 'English', german: 'German', native: 'Native', advanced: 'Advanced', beginner: 'Beginner' }
    },
    experience: { title: 'Experience', positions: [{ title: '', company: '', period: '', location: '', role: '', skills: [], duration: '' }] },
    education: { title: 'Education', degrees: [{ degree: '', school: '', period: '', note: '', gpa: '', skills: [] }] },
    skills: { title: 'Skills', programming: { title: 'Programming', languages: [] }, technologies: { title: 'Technologies', items: [] }, expertise: { title: 'Expertise', items: [] } },
    certifications: { title: 'Certifications', featured: 'Featured', items: [] },
    projects: { title: 'Projects', patentApplication: '', items: [] },
    contact: { title: 'Contact', description: '', linkedinProfile: 'LinkedIn Profile', sendEmail: 'Send Email', email: 'Email', location: 'Location', linkedin: 'LinkedIn' },
    footer: { copyright: '© 2026 Ali Emre Çaylak.' }
  }
};

interface SectionConfig {
  id: string;
  label: string;
  icon: React.ReactNode;
  color: string;
}

const sections: SectionConfig[] = [
  { id: 'hero', label: 'Hero / Ana Bölüm', icon: <User size={20} />, color: 'from-blue-500 to-blue-600' },
  { id: 'about', label: 'Hakkımda', icon: <Edit3 size={20} />, color: 'from-green-500 to-green-600' },
  { id: 'experience', label: 'Deneyim', icon: <Briefcase size={20} />, color: 'from-purple-500 to-purple-600' },
  { id: 'education', label: 'Eğitim', icon: <GraduationCap size={20} />, color: 'from-orange-500 to-orange-600' },
  { id: 'skills', label: 'Yetenekler', icon: <Code size={20} />, color: 'from-pink-500 to-pink-600' },
  { id: 'certifications', label: 'Sertifikalar', icon: <Award size={20} />, color: 'from-yellow-500 to-yellow-600' },
  { id: 'projects', label: 'Projeler', icon: <Folder size={20} />, color: 'from-indigo-500 to-indigo-600' },
  { id: 'contact', label: 'İletişim', icon: <Mail size={20} />, color: 'from-teal-500 to-teal-600' },
  { id: 'footer', label: 'Footer', icon: <Globe size={20} />, color: 'from-gray-500 to-gray-600' },
];

export default function Admin() {
  const [language, setLanguage] = useState<Language>('tr');
  const [activeSection, setActiveSection] = useState('hero');
  const [formData, setFormData] = useState<Record<Language, FormData>>(defaultContent);
  const [isSaving, setIsSaving] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [notification, setNotification] = useState<{ type: 'success' | 'error' | 'info'; message: string } | null>(null);
  const [exportModal, setExportModal] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('adminContent');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setFormData(prev => ({ ...prev, ...parsed }));
      } catch (e) {
        console.error('Failed to parse saved content');
      }
    }
  }, []);

  const showNotification = (type: 'success' | 'error' | 'info', message: string) => {
    setNotification({ type, message });
    setTimeout(() => setNotification(null), 3000);
  };

  const updateField = (lang: Language, path: string, value: any) => {
    setFormData(prev => {
      const newData = { ...prev };
      const keys = path.split('.');
      let current: any = newData[lang];
      for (let i = 0; i < keys.length - 1; i++) {
        current[keys[i]] = { ...current[keys[i]] };
        current = current[keys[i]];
      }
      current[keys[keys.length - 1]] = value;
      return newData;
    });
  };

  const handleSave = () => {
    setIsSaving(true);
    localStorage.setItem('adminContent', JSON.stringify(formData));
    setTimeout(() => {
      setIsSaving(false);
      showNotification('success', 'Değişiklikler kaydedildi! ✓');
    }, 500);
  };

  const handleExport = () => {
    setExportModal(true);
  };

  const copyToClipboard = () => {
    const content = generateContentFile();
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    showNotification('success', 'Panoya kopyalandı! 📋');
  };

  const downloadFile = () => {
    const content = generateContentFile();
    const blob = new Blob([content], { type: 'text/typescript' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'content.ts';
    a.click();
    URL.revokeObjectURL(url);
    showNotification('success', 'Dosya indirildi! 📥');
  };

  const generateContentFile = () => {
    const generateSection = (section: FormData, indent: string = '    ') => {
      const lines: string[] = [];
      
      // Navigation
      lines.push(`${indent}navigation: {`);
      lines.push(`${indent}  home: '${section.navigation.home}',`);
      lines.push(`${indent}  about: '${section.navigation.about}',`);
      lines.push(`${indent}  experience: '${section.navigation.experience}',`);
      lines.push(`${indent}  education: '${section.navigation.education}',`);
      lines.push(`${indent}  skills: '${section.navigation.skills}',`);
      lines.push(`${indent}  projects: '${section.navigation.projects}',`);
      lines.push(`${indent}  contact: '${section.navigation.contact}'`);
      lines.push(`${indent}},`);
      
      // Hero
      lines.push(`${indent}hero: {`);
      lines.push(`${indent}  title: '${section.hero.title}',`);
      lines.push(`${indent}  subtitle: '${section.hero.subtitle}',`);
      lines.push(`${indent}  description: '${section.hero.description.replace(/'/g, "\\'")}',`);
      lines.push(`${indent}  exploreButton: '${section.hero.exploreButton}',`);
      lines.push(`${indent}  contactButton: '${section.hero.contactButton}',`);
      lines.push(`${indent}  imageAlt: '${section.hero.imageAlt}'`);
      lines.push(`${indent}},`);
      
      // About
      lines.push(`${indent}about: {`);
      lines.push(`${indent}  title: '${section.about.title}',`);
      lines.push(`${indent}  paragraphs: [`);
      section.about.paragraphs.forEach((p, i) => {
        lines.push(`${indent}    '${p.replace(/'/g, "\\'")}'${i < section.about.paragraphs.length - 1 ? ',' : ''}`);
      });
      lines.push(`${indent}  ],`);
      lines.push(`${indent}  location: '${section.about.location}',`);
      lines.push(`${indent}  interests: {`);
      lines.push(`${indent}    title: '${section.about.interests.title}',`);
      lines.push(`${indent}    items: [`);
      section.about.interests.items.forEach((item, i) => {
        lines.push(`${indent}      '${item}'${i < section.about.interests.items.length - 1 ? ',' : ''}`);
      });
      lines.push(`${indent}    ]`);
      lines.push(`${indent}  },`);
      lines.push(`${indent}  languages: {`);
      lines.push(`${indent}    title: '${section.about.languages.title}',`);
      lines.push(`${indent}    turkish: '${section.about.languages.turkish}',`);
      lines.push(`${indent}    english: '${section.about.languages.english}',`);
      lines.push(`${indent}    german: '${section.about.languages.german}',`);
      lines.push(`${indent}    native: '${section.about.languages.native}',`);
      lines.push(`${indent}    advanced: '${section.about.languages.advanced}',`);
      lines.push(`${indent}    beginner: '${section.about.languages.beginner}'`);
      lines.push(`${indent}  }`);
      lines.push(`${indent}},`);
      
      // Experience
      lines.push(`${indent}experience: {`);
      lines.push(`${indent}  title: '${section.experience.title}',`);
      lines.push(`${indent}  positions: [`);
      section.experience.positions.forEach((pos, i) => {
        lines.push(`${indent}    {`);
        lines.push(`${indent}      title: '${pos.title}',`);
        lines.push(`${indent}      company: '${pos.company}',`);
        lines.push(`${indent}      period: '${pos.period}',`);
        lines.push(`${indent}      location: '${pos.location}',`);
        lines.push(`${indent}      role: '${pos.role}',`);
        lines.push(`${indent}      skills: [${pos.skills.map(s => `'${s}'`).join(', ')}],`);
        lines.push(`${indent}      duration: '${pos.duration}'`);
        lines.push(`${indent}    }${i < section.experience.positions.length - 1 ? ',' : ''}`);
      });
      lines.push(`${indent}  ]`);
      lines.push(`${indent}},`);
      
      // Education
      lines.push(`${indent}education: {`);
      lines.push(`${indent}  title: '${section.education.title}',`);
      lines.push(`${indent}  degrees: [`);
      section.education.degrees.forEach((deg, i) => {
        lines.push(`${indent}    {`);
        lines.push(`${indent}      degree: '${deg.degree}',`);
        lines.push(`${indent}      school: '${deg.school}',`);
        lines.push(`${indent}      period: '${deg.period}',`);
        lines.push(`${indent}      note: '${deg.note}',`);
        lines.push(`${indent}      gpa: '${deg.gpa}',`);
        lines.push(`${indent}      skills: [${deg.skills.map(s => `'${s}'`).join(', ')}]`);
        lines.push(`${indent}    }${i < section.education.degrees.length - 1 ? ',' : ''}`);
      });
      lines.push(`${indent}  ]`);
      lines.push(`${indent}},`);
      
      // Skills
      lines.push(`${indent}skills: {`);
      lines.push(`${indent}  title: '${section.skills.title}',`);
      lines.push(`${indent}  programming: {`);
      lines.push(`${indent}    title: '${section.skills.programming.title}',`);
      lines.push(`${indent}    languages: [`);
      section.skills.programming.languages.forEach((lang, i) => {
        lines.push(`${indent}      { name: '${lang.name}', level: ${lang.level} }${i < section.skills.programming.languages.length - 1 ? ',' : ''}`);
      });
      lines.push(`${indent}    ]`);
      lines.push(`${indent}  },`);
      lines.push(`${indent}  technologies: {`);
      lines.push(`${indent}    title: '${section.skills.technologies.title}',`);
      lines.push(`${indent}    items: [`);
      section.skills.technologies.items.forEach((item, i) => {
        lines.push(`${indent}      '${item}'${i < section.skills.technologies.items.length - 1 ? ',' : ''}`);
      });
      lines.push(`${indent}    ]`);
      lines.push(`${indent}  },`);
      lines.push(`${indent}  expertise: {`);
      lines.push(`${indent}    title: '${section.skills.expertise.title}',`);
      lines.push(`${indent}    items: [`);
      section.skills.expertise.items.forEach((item, i) => {
        lines.push(`${indent}      '${item}'${i < section.skills.expertise.items.length - 1 ? ',' : ''}`);
      });
      lines.push(`${indent}    ]`);
      lines.push(`${indent}  }`);
      lines.push(`${indent}},`);
      
      // Certifications
      lines.push(`${indent}certifications: {`);
      lines.push(`${indent}  title: '${section.certifications.title}',`);
      lines.push(`${indent}  featured: '${section.certifications.featured}',`);
      lines.push(`${indent}  items: [`);
      section.certifications.items.forEach((cert, i) => {
        lines.push(`${indent}    {`);
        lines.push(`${indent}      title: '${cert.title}',`);
        lines.push(`${indent}      issuer: '${cert.issuer}',`);
        lines.push(`${indent}      date: '${cert.date}',`);
        lines.push(`${indent}      skills: [${cert.skills.map(s => `'${s}'`).join(', ')}],`);
        lines.push(`${indent}      featured: ${cert.featured}`);
        lines.push(`${indent}    }${i < section.certifications.items.length - 1 ? ',' : ''}`);
      });
      lines.push(`${indent}  ]`);
      lines.push(`${indent}},`);
      
      // Projects
      lines.push(`${indent}projects: {`);
      lines.push(`${indent}  title: '${section.projects.title}',`);
      lines.push(`${indent}  patentApplication: '${section.projects.patentApplication}',`);
      lines.push(`${indent}  items: [`);
      section.projects.items.forEach((proj, i) => {
        lines.push(`${indent}    {`);
        lines.push(`${indent}      title: '${proj.title}',`);
        lines.push(`${indent}      description: '${proj.description.replace(/'/g, "\\'")}',`);
        lines.push(`${indent}      skills: [${proj.skills.map(s => `'${s}'`).join(', ')}],`);
        lines.push(`${indent}      badgeText: '${proj.badgeText}',`);
        lines.push(`${indent}      featured: ${proj.featured}`);
        lines.push(`${indent}    }${i < section.projects.items.length - 1 ? ',' : ''}`);
      });
      lines.push(`${indent}  ]`);
      lines.push(`${indent}},`);
      
      // Contact
      lines.push(`${indent}contact: {`);
      lines.push(`${indent}  title: '${section.contact.title}',`);
      lines.push(`${indent}  description: '${section.contact.description.replace(/'/g, "\\'")}',`);
      lines.push(`${indent}  linkedinProfile: '${section.contact.linkedinProfile}',`);
      lines.push(`${indent}  sendEmail: '${section.contact.sendEmail}',`);
      lines.push(`${indent}  email: '${section.contact.email}',`);
      lines.push(`${indent}  location: '${section.contact.location}',`);
      lines.push(`${indent}  linkedin: '${section.contact.linkedin}'`);
      lines.push(`${indent}},`);
      
      // Footer
      lines.push(`${indent}footer: {`);
      lines.push(`${indent}  copyright: '${section.footer.copyright}'`);
      lines.push(`${indent}}`);
      
      return lines;
    };

    const trContent = generateSection(formData.tr);
    const enContent = generateSection(formData.en);

    return `import { LanguageContent } from '../types/language';

export const content: Record<'tr' | 'en', LanguageContent> = {
  tr: {
${trContent.join('\n')}
  },
  en: {
${enContent.join('\n')}
  }
};`;
  };

  const addArrayItem = (lang: Language, path: string, newItem: any) => {
    const keys = path.split('.');
    setFormData(prev => {
      const newData = { ...prev };
      let current: any = newData[lang];
      for (let i = 0; i < keys.length - 1; i++) {
        current = current[keys[i]];
      }
      const arr = [...current[keys[keys.length - 1]], newItem];
      current[keys[keys.length - 1]] = arr;
      return newData;
    });
  };

  const removeArrayItem = (lang: Language, path: string, index: number) => {
    const keys = path.split('.');
    setFormData(prev => {
      const newData = { ...prev };
      let current: any = newData[lang];
      for (let i = 0; i < keys.length - 1; i++) {
        current = current[keys[i]];
      }
      const arr = current[keys[keys.length - 1]].filter((_: any, i: number) => i !== index);
      current[keys[keys.length - 1]] = arr;
      return newData;
    });
  };

  const updateArrayItem = (lang: Language, path: string, index: number, field: string, value: any) => {
    const keys = path.split('.');
    setFormData(prev => {
      const newData = { ...prev };
      let current: any = newData[lang];
      for (let i = 0; i < keys.length - 1; i++) {
        current = current[keys[i]];
      }
      const arr = [...current[keys[keys.length - 1]]];
      arr[index] = { ...arr[index], [field]: value };
      current[keys[keys.length - 1]] = arr;
      return newData;
    });
  };

  const InputField = ({ label, value, onChange, multiline = false, placeholder = '' }: { 
    label: string; 
    value: string; 
    onChange: (val: string) => void; 
    multiline?: boolean;
    placeholder?: string;
  }) => (
    <div className="space-y-2">
      <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
        {label}
      </label>
      {multiline ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          rows={4}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all text-gray-800 bg-white resize-none"
        />
      ) : (
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all text-gray-800 bg-white"
        />
      )}
    </div>
  );

  const ArrayItemCard = ({ 
    item, 
    index, 
    onUpdate, 
    onRemove, 
    fields 
  }: { 
    item: any; 
    index: number; 
    onUpdate: (field: string, value: any) => void; 
    onRemove: () => void;
    fields: Array<{ key: string; label: string; type?: string; multiline?: boolean }>;
  }) => (
    <div className="bg-gray-50 rounded-xl p-5 border-2 border-gray-200 hover:border-gray-300 transition-all">
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-bold text-gray-500 bg-white px-3 py-1 rounded-lg shadow-sm">
          #{index + 1}
        </span>
        <button
          onClick={onRemove}
          className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
        >
          <Trash2 size={18} />
        </button>
      </div>
      <div className="space-y-4">
        {fields.map(field => (
          <InputField
            key={field.key}
            label={field.label}
            value={item[field.key] || ''}
            onChange={(val) => onUpdate(field.key, val)}
            multiline={field.multiline}
          />
        ))}
      </div>
    </div>
  );

  const renderHeroSection = (lang: Language) => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl p-6">
        <h3 className="text-lg font-bold">Hero Bölümü</h3>
        <p className="text-blue-100 text-sm">Ana sayfa hero alanındaki içerik</p>
      </div>
      <div className="grid gap-6">
        <InputField 
          label="Başlık" 
          value={formData[lang].hero.title} 
          onChange={(val) => updateField(lang, 'hero.title', val)} 
        />
        <InputField 
          label="Alt Başlık" 
          value={formData[lang].hero.subtitle} 
          onChange={(val) => updateField(lang, 'hero.subtitle', val)} 
        />
        <InputField 
          label="Açıklama" 
          value={formData[lang].hero.description} 
          onChange={(val) => updateField(lang, 'hero.description', val)}
          multiline 
        />
        <div className="grid grid-cols-2 gap-4">
          <InputField 
            label="Keşfet Butonu" 
            value={formData[lang].hero.exploreButton} 
            onChange={(val) => updateField(lang, 'hero.exploreButton', val)} 
          />
          <InputField 
            label="İletişim Butonu" 
            value={formData[lang].hero.contactButton} 
            onChange={(val) => updateField(lang, 'hero.contactButton', val)} 
          />
        </div>
        <InputField 
          label="Resim Alt Metni" 
          value={formData[lang].hero.imageAlt} 
          onChange={(val) => updateField(lang, 'hero.imageAlt', val)} 
        />
      </div>
    </div>
  );

  const renderAboutSection = (lang: Language) => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl p-6">
        <h3 className="text-lg font-bold">Hakkımda Bölümü</h3>
        <p className="text-green-100 text-sm">Kişisel bilgi ve ilgi alanları</p>
      </div>
      
      <InputField 
        label="Başlık" 
        value={formData[lang].about.title} 
        onChange={(val) => updateField(lang, 'about.title', val)} 
      />

      <div className="space-y-4">
        <h4 className="font-semibold text-gray-700">Paragraflar</h4>
        {formData[lang].about.paragraphs.map((para, i) => (
          <div key={i} className="flex gap-3">
            <textarea
              value={para}
              onChange={(e) => {
                const newParas = [...formData[lang].about.paragraphs];
                newParas[i] = e.target.value;
                updateField(lang, 'about.paragraphs', newParas);
              }}
              rows={3}
              className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all text-gray-800 bg-white resize-none"
            />
            <button
              onClick={() => {
                const newParas = formData[lang].about.paragraphs.filter((_, idx) => idx !== i);
                updateField(lang, 'about.paragraphs', newParas);
              }}
              className="p-2 text-red-500 hover:bg-red-50 rounded-lg h-fit"
            >
              <Trash2 size={18} />
            </button>
          </div>
        ))}
        <button
          onClick={() => updateField(lang, 'about.paragraphs', [...formData[lang].about.paragraphs, ''])}
          className="flex items-center gap-2 text-green-600 hover:bg-green-50 px-4 py-2 rounded-lg transition-colors font-medium"
        >
          <Plus size={18} /> Paragraf Ekle
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <InputField 
          label="Konum Başlığı" 
          value={formData[lang].about.location} 
          onChange={(val) => updateField(lang, 'about.location', val)} 
        />
      </div>

      <div className="space-y-4">
        <h4 className="font-semibold text-gray-700">İlgi Alanları</h4>
        <InputField 
          label="İlgi Alanları Başlığı" 
          value={formData[lang].about.interests.title} 
          onChange={(val) => updateField(lang, 'about.interests.title', val)} 
        />
        <div className="space-y-2">
          {formData[lang].about.interests.items.map((item, i) => (
            <div key={i} className="flex gap-2">
              <input
                type="text"
                value={item}
                onChange={(e) => {
                  const newItems = [...formData[lang].about.interests.items];
                  newItems[i] = e.target.value;
                  updateField(lang, 'about.interests.items', newItems);
                }}
                className="flex-1 px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-green-500 transition-all text-gray-800 bg-white"
              />
              <button
                onClick={() => {
                  const newItems = formData[lang].about.interests.items.filter((_, idx) => idx !== i);
                  updateField(lang, 'about.interests.items', newItems);
                }}
                className="p-2 text-red-500 hover:bg-red-50 rounded-lg"
              >
                <X size={16} />
              </button>
            </div>
          ))}
          <button
            onClick={() => updateField(lang, 'about.interests.items', [...formData[lang].about.interests.items, ''])}
            className="flex items-center gap-2 text-green-600 hover:bg-green-50 px-4 py-2 rounded-lg transition-colors font-medium"
          >
            <Plus size={18} /> İlgi Alanı Ekle
          </button>
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="font-semibold text-gray-700">Diller</h4>
        <InputField label="Diller Başlığı" value={formData[lang].about.languages.title} onChange={(val) => updateField(lang, 'about.languages.title', val)} />
        <div className="grid grid-cols-2 gap-4">
          <InputField label="Türkçe" value={formData[lang].about.languages.turkish} onChange={(val) => updateField(lang, 'about.languages.turkish', val)} />
          <InputField label="İngilizce" value={formData[lang].about.languages.english} onChange={(val) => updateField(lang, 'about.languages.english', val)} />
          <InputField label="Almanca" value={formData[lang].about.languages.german} onChange={(val) => updateField(lang, 'about.languages.german', val)} />
          <InputField label="Ana Dil" value={formData[lang].about.languages.native} onChange={(val) => updateField(lang, 'about.languages.native', val)} />
          <InputField label="İleri" value={formData[lang].about.languages.advanced} onChange={(val) => updateField(lang, 'about.languages.advanced', val)} />
          <InputField label="Başlangıç" value={formData[lang].about.languages.beginner} onChange={(val) => updateField(lang, 'about.languages.beginner', val)} />
        </div>
      </div>
    </div>
  );

  const renderExperienceSection = (lang: Language) => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl p-6">
        <h3 className="text-lg font-bold">Deneyim Bölümü</h3>
        <p className="text-purple-100 text-sm">İş deneyimleri ve stajlar</p>
      </div>
      
      <InputField 
        label="Başlık" 
        value={formData[lang].experience.title} 
        onChange={(val) => updateField(lang, 'experience.title', val)} 
      />

      <div className="space-y-4">
        {formData[lang].experience.positions.map((pos, i) => (
          <ArrayItemCard
            key={i}
            item={pos}
            index={i}
            onUpdate={(field, value) => updateArrayItem(lang, 'experience.positions', i, field, value)}
            onRemove={() => removeArrayItem(lang, 'experience.positions', i)}
            fields={[
              { key: 'title', label: 'Pozisyon Başlığı' },
              { key: 'company', label: 'Şirket' },
              { key: 'period', label: 'Dönem (örn: Ocak 2025 - Nisan 2025)' },
              { key: 'location', label: 'Konum' },
              { key: 'role', label: 'Rol' },
              { key: 'duration', label: 'Süre (örn: 70 iş günü)' },
            ]}
          />
        ))}
        <button
          onClick={() => addArrayItem(lang, 'experience.positions', { title: '', company: '', period: '', location: '', role: '', skills: [], duration: '' })}
          className="flex items-center gap-2 text-purple-600 hover:bg-purple-50 px-4 py-2 rounded-lg transition-colors font-medium"
        >
          <Plus size={18} /> Deneyim Ekle
        </button>
      </div>
    </div>
  );

  const renderEducationSection = (lang: Language) => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl p-6">
        <h3 className="text-lg font-bold">Eğitim Bölümü</h3>
        <p className="text-orange-100 text-sm">Eğitim bilgileri</p>
      </div>
      
      <InputField 
        label="Başlık" 
        value={formData[lang].education.title} 
        onChange={(val) => updateField(lang, 'education.title', val)} 
      />

      <div className="space-y-4">
        {formData[lang].education.degrees.map((deg, i) => (
          <ArrayItemCard
            key={i}
            item={deg}
            index={i}
            onUpdate={(field, value) => updateArrayItem(lang, 'education.degrees', i, field, value)}
            onRemove={() => removeArrayItem(lang, 'education.degrees', i)}
            fields={[
              { key: 'degree', label: 'Bölüm/Derece' },
              { key: 'school', label: 'Okul' },
              { key: 'period', label: 'Dönem' },
              { key: 'note', label: 'Not (örn: Tam Burs)' },
              { key: 'gpa', label: 'GNÖ' },
            ]}
          />
        ))}
        <button
          onClick={() => addArrayItem(lang, 'education.degrees', { degree: '', school: '', period: '', note: '', gpa: '', skills: [] })}
          className="flex items-center gap-2 text-orange-600 hover:bg-orange-50 px-4 py-2 rounded-lg transition-colors font-medium"
        >
          <Plus size={18} /> Eğitim Ekle
        </button>
      </div>
    </div>
  );

  const renderSkillsSection = (lang: Language) => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-xl p-6">
        <h3 className="text-lg font-bold">Yetenekler Bölümü</h3>
        <p className="text-pink-100 text-sm">Programlama dilleri ve teknolojiler</p>
      </div>
      
      <InputField 
        label="Başlık" 
        value={formData[lang].skills.title} 
        onChange={(val) => updateField(lang, 'skills.title', val)} 
      />

      <div className="space-y-6">
        <div className="bg-pink-50 rounded-xl p-5">
          <h4 className="font-semibold text-pink-700 mb-4">Programlama Dilleri</h4>
          <InputField label="Başlık" value={formData[lang].skills.programming.title} onChange={(val) => updateField(lang, 'skills.programming.title', val)} />
          <div className="space-y-3 mt-4">
            {formData[lang].skills.programming.languages.map((progLang, i) => (
              <div key={i} className="flex gap-3 items-center">
                <input
                  type="text"
                  value={progLang.name}
                  onChange={(e) => {
                    const newLangs = [...formData[lang].skills.programming.languages];
                    newLangs[i] = { ...newLangs[i], name: e.target.value };
                    updateField(lang, 'skills.programming.languages', newLangs);
                  }}
                  placeholder="Dil adı"
                  className="flex-1 px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-pink-500 transition-all text-gray-800 bg-white"
                />
                <select
                  value={progLang.level}
                  onChange={(e) => {
                    const newLangs = [...formData[lang].skills.programming.languages];
                    newLangs[i] = { ...newLangs[i], level: parseInt(e.target.value) };
                    updateField(lang, 'skills.programming.languages', newLangs);
                  }}
                  className="px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-pink-500 transition-all text-gray-800 bg-white"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
                <button
                  onClick={() => {
                    const newLangs = formData[lang].skills.programming.languages.filter((_: any, idx: number) => idx !== i);
                    updateField(lang, 'skills.programming.languages', newLangs);
                  }}
                  className="p-2 text-red-500 hover:bg-red-50 rounded-lg"
                >
                  <X size={16} />
                </button>
              </div>
            ))}
            <button
              onClick={() => updateField(lang, 'skills.programming.languages', [...formData[lang].skills.programming.languages, { name: '', level: 3 }])}
              className="flex items-center gap-2 text-pink-600 hover:bg-pink-100 px-4 py-2 rounded-lg transition-colors font-medium"
            >
              <Plus size={18} /> Dil Ekle
            </button>
          </div>
        </div>

        <div className="bg-pink-50 rounded-xl p-5">
          <h4 className="font-semibold text-pink-700 mb-4">Teknolojiler</h4>
          <InputField label="Başlık" value={formData[lang].skills.technologies.title} onChange={(val) => updateField(lang, 'skills.technologies.title', val)} />
          <div className="space-y-2 mt-4">
            {formData[lang].skills.technologies.items.map((item, i) => (
              <div key={i} className="flex gap-2">
                <input
                  type="text"
                  value={item}
                  onChange={(e) => {
                    const newItems = [...formData[lang].skills.technologies.items];
                    newItems[i] = e.target.value;
                    updateField(lang, 'skills.technologies.items', newItems);
                  }}
                  className="flex-1 px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-pink-500 transition-all text-gray-800 bg-white"
                />
                <button onClick={() => {
                  const newItems = formData[lang].skills.technologies.items.filter((_, idx) => idx !== i);
                  updateField(lang, 'skills.technologies.items', newItems);
                }} className="p-2 text-red-500 hover:bg-red-50 rounded-lg"><X size={16} /></button>
              </div>
            ))}
            <button onClick={() => updateField(lang, 'skills.technologies.items', [...formData[lang].skills.technologies.items, ''])} className="flex items-center gap-2 text-pink-600 hover:bg-pink-100 px-4 py-2 rounded-lg transition-colors font-medium">
              <Plus size={18} /> Teknoloji Ekle
            </button>
          </div>
        </div>

        <div className="bg-pink-50 rounded-xl p-5">
          <h4 className="font-semibold text-pink-700 mb-4">Uzmanlık Alanları</h4>
          <InputField label="Başlık" value={formData[lang].skills.expertise.title} onChange={(val) => updateField(lang, 'skills.expertise.title', val)} />
          <div className="space-y-2 mt-4">
            {formData[lang].skills.expertise.items.map((item, i) => (
              <div key={i} className="flex gap-2">
                <input type="text" value={item} onChange={(e) => {
                  const newItems = [...formData[lang].skills.expertise.items];
                  newItems[i] = e.target.value;
                  updateField(lang, 'skills.expertise.items', newItems);
                }} className="flex-1 px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-pink-500 transition-all text-gray-800 bg-white" />
                <button onClick={() => {
                  const newItems = formData[lang].skills.expertise.items.filter((_, idx) => idx !== i);
                  updateField(lang, 'skills.expertise.items', newItems);
                }} className="p-2 text-red-500 hover:bg-red-50 rounded-lg"><X size={16} /></button>
              </div>
            ))}
            <button onClick={() => updateField(lang, 'skills.expertise.items', [...formData[lang].skills.expertise.items, ''])} className="flex items-center gap-2 text-pink-600 hover:bg-pink-100 px-4 py-2 rounded-lg transition-colors font-medium">
              <Plus size={18} /> Uzmanlık Ekle
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderCertificationsSection = (lang: Language) => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-xl p-6">
        <h3 className="text-lg font-bold">Sertifikalar Bölümü</h3>
        <p className="text-yellow-100 text-sm">Sertifikalar ve başarılar</p>
      </div>
      
      <InputField label="Başlık" value={formData[lang].certifications.title} onChange={(val) => updateField(lang, 'certifications.title', val)} />
      <InputField label="Öne Çıkan Etiketi" value={formData[lang].certifications.featured} onChange={(val) => updateField(lang, 'certifications.featured', val)} />

      <div className="space-y-4">
        {formData[lang].certifications.items.map((cert, i) => (
          <div key={i} className="bg-yellow-50 rounded-xl p-5 border-2 border-yellow-200">
            <div className="flex justify-between items-start mb-4">
              <span className="text-sm font-bold text-yellow-600 bg-yellow-100 px-3 py-1 rounded-lg">#{i + 1}</span>
              <div className="flex gap-2">
                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={cert.featured}
                    onChange={(e) => updateArrayItem(lang, 'certifications.items', i, 'featured', e.target.checked)}
                    className="w-4 h-4 rounded"
                  />
                  Öne Çıkan
                </label>
                <button onClick={() => removeArrayItem(lang, 'certifications.items', i)} className="p-2 text-red-500 hover:bg-red-50 rounded-lg">
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
            <div className="space-y-4">
              <InputField label="Sertifika Adı" value={cert.title} onChange={(val) => updateArrayItem(lang, 'certifications.items', i, 'title', val)} />
              <InputField label="Veren Kurum" value={cert.issuer} onChange={(val) => updateArrayItem(lang, 'certifications.items', i, 'issuer', val)} />
              <InputField label="Tarih" value={cert.date} onChange={(val) => updateArrayItem(lang, 'certifications.items', i, 'date', val)} />
              <div>
                <label className="text-sm font-semibold text-gray-700 block mb-2">Beceriler</label>
                <div className="flex flex-wrap gap-2 mb-2">
                  {cert.skills.map((skill, j) => (
                    <span key={j} className="bg-white px-3 py-1 rounded-full text-sm flex items-center gap-2 border">
                      {skill}
                      <button onClick={() => {
                        const newSkills = cert.skills.filter((_, idx) => idx !== j);
                        updateArrayItem(lang, 'certifications.items', i, 'skills', newSkills);
                      }} className="text-red-500 hover:text-red-700">×</button>
                    </span>
                  ))}
                </div>
                <input
                  type="text"
                  placeholder="Yeni beceri ekle..."
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-yellow-500 transition-all text-gray-800 bg-white"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && e.currentTarget.value.trim()) {
                      updateArrayItem(lang, 'certifications.items', i, 'skills', [...cert.skills, e.currentTarget.value.trim()]);
                      e.currentTarget.value = '';
                    }
                  }}
                />
              </div>
            </div>
          </div>
        ))}
        <button onClick={() => addArrayItem(lang, 'certifications.items', { title: '', issuer: '', date: '', skills: [], featured: false })} className="flex items-center gap-2 text-yellow-600 hover:bg-yellow-50 px-4 py-2 rounded-lg transition-colors font-medium">
          <Plus size={18} /> Sertifika Ekle
        </button>
      </div>
    </div>
  );

  const renderProjectsSection = (lang: Language) => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white rounded-xl p-6">
        <h3 className="text-lg font-bold">Projeler Bölümü</h3>
        <p className="text-indigo-100 text-sm">Öne çıkan projeler</p>
      </div>
      
      <InputField label="Başlık" value={formData[lang].projects.title} onChange={(val) => updateField(lang, 'projects.title', val)} />

      <div className="space-y-4">
        {formData[lang].projects.items.map((proj, i) => (
          <div key={i} className="bg-indigo-50 rounded-xl p-5 border-2 border-indigo-200">
            <div className="flex justify-between items-start mb-4">
              <span className="text-sm font-bold text-indigo-600 bg-indigo-100 px-3 py-1 rounded-lg">#{i + 1}</span>
              <div className="flex gap-2">
                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={proj.featured}
                    onChange={(e) => updateArrayItem(lang, 'projects.items', i, 'featured', e.target.checked)}
                    className="w-4 h-4 rounded"
                  />
                  Öne Çıkan
                </label>
                <button onClick={() => removeArrayItem(lang, 'projects.items', i)} className="p-2 text-red-500 hover:bg-red-50 rounded-lg">
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
            <div className="space-y-4">
              <InputField label="Proje Adı" value={proj.title} onChange={(val) => updateArrayItem(lang, 'projects.items', i, 'title', val)} />
              <InputField label="Açıklama" value={proj.description} onChange={(val) => updateArrayItem(lang, 'projects.items', i, 'description', val)} multiline />
              <InputField label="Rozet Metni" value={proj.badgeText} onChange={(val) => updateArrayItem(lang, 'projects.items', i, 'badgeText', val)} />
              <div>
                <label className="text-sm font-semibold text-gray-700 block mb-2">Kullanılan Teknolojiler</label>
                <div className="flex flex-wrap gap-2 mb-2">
                  {proj.skills.map((skill, j) => (
                    <span key={j} className="bg-white px-3 py-1 rounded-full text-sm flex items-center gap-2 border">
                      {skill}
                      <button onClick={() => {
                        const newSkills = proj.skills.filter((_, idx) => idx !== j);
                        updateArrayItem(lang, 'projects.items', i, 'skills', newSkills);
                      }} className="text-red-500 hover:text-red-700">×</button>
                    </span>
                  ))}
                </div>
                <input
                  type="text"
                  placeholder="Yeni teknoloji ekle..."
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-indigo-500 transition-all text-gray-800 bg-white"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && e.currentTarget.value.trim()) {
                      updateArrayItem(lang, 'projects.items', i, 'skills', [...proj.skills, e.currentTarget.value.trim()]);
                      e.currentTarget.value = '';
                    }
                  }}
                />
              </div>
            </div>
          </div>
        ))}
        <button onClick={() => addArrayItem(lang, 'projects.items', { title: '', description: '', skills: [], badgeText: '', featured: false })} className="flex items-center gap-2 text-indigo-600 hover:bg-indigo-50 px-4 py-2 rounded-lg transition-colors font-medium">
          <Plus size={18} /> Proje Ekle
        </button>
      </div>
    </div>
  );

  const renderContactSection = (lang: Language) => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-xl p-6">
        <h3 className="text-lg font-bold">İletişim Bölümü</h3>
        <p className="text-teal-100 text-sm">İletişim bilgileri</p>
      </div>
      
      <InputField label="Başlık" value={formData[lang].contact.title} onChange={(val) => updateField(lang, 'contact.title', val)} />
      <InputField label="Açıklama" value={formData[lang].contact.description} onChange={(val) => updateField(lang, 'contact.description', val)} multiline />
      <InputField label="LinkedIn Profil Butonu" value={formData[lang].contact.linkedinProfile} onChange={(val) => updateField(lang, 'contact.linkedinProfile', val)} />
      <InputField label="E-posta Gönder Butonu" value={formData[lang].contact.sendEmail} onChange={(val) => updateField(lang, 'contact.sendEmail', val)} />
      <InputField label="E-posta Etiketi" value={formData[lang].contact.email} onChange={(val) => updateField(lang, 'contact.email', val)} />
      <InputField label="Konum Etiketi" value={formData[lang].contact.location} onChange={(val) => updateField(lang, 'contact.location', val)} />
      <InputField label="LinkedIn Etiketi" value={formData[lang].contact.linkedin} onChange={(val) => updateField(lang, 'contact.linkedin', val)} />
    </div>
  );

  const renderFooterSection = (lang: Language) => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-gray-500 to-gray-600 text-white rounded-xl p-6">
        <h3 className="text-lg font-bold">Footer</h3>
        <p className="text-gray-100 text-sm">Alt kısım bilgileri</p>
      </div>
      <InputField label="Telif Hakkı Metni" value={formData[lang].footer.copyright} onChange={(val) => updateField(lang, 'footer.copyright', val)} />
    </div>
  );

  const renderSection = (sectionId: string, lang: Language) => {
    switch (sectionId) {
      case 'hero': return renderHeroSection(lang);
      case 'about': return renderAboutSection(lang);
      case 'experience': return renderExperienceSection(lang);
      case 'education': return renderEducationSection(lang);
      case 'skills': return renderSkillsSection(lang);
      case 'certifications': return renderCertificationsSection(lang);
      case 'projects': return renderProjectsSection(lang);
      case 'contact': return renderContactSection(lang);
      case 'footer': return renderFooterSection(lang);
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Notification */}
      {notification && (
        <div className={`fixed top-4 right-4 z-50 px-6 py-4 rounded-xl shadow-xl flex items-center gap-3 animate-pulse ${
          notification.type === 'success' ? 'bg-green-500 text-white' :
          notification.type === 'error' ? 'bg-red-500 text-white' :
          'bg-blue-500 text-white'
        }`}>
          {notification.type === 'success' && <Check size={20} />}
          {notification.type === 'error' && <AlertTriangle size={20} />}
          {notification.type === 'info' && <AlertTriangle size={20} />}
          {notification.message}
        </div>
      )}

      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => window.location.href = '/'}
                className="flex items-center gap-2 px-4 py-2 border-2 border-gray-200 rounded-xl hover:bg-gray-50 transition-all"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="font-medium">Siteye Dön</span>
              </button>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Edit3 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-800">Admin Panel</h1>
                  <p className="text-sm text-gray-500">İçerik Düzenleyici</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={handleSave}
                disabled={isSaving}
                className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-5 py-2.5 rounded-xl font-semibold hover:shadow-lg transition-all disabled:opacity-50"
              >
                {isSaving ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                Kaydet
              </button>
              <button
                onClick={handleExport}
                className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-5 py-2.5 rounded-xl font-semibold hover:shadow-lg transition-all"
              >
                <Download className="w-4 h-4" />
                Dışa Aktar
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex gap-6">
          {/* Sidebar */}
          <aside className="w-72 flex-shrink-0">
            <div className="bg-white rounded-2xl shadow-sm p-4 sticky top-24">
              {/* Language Toggle */}
              <div className="mb-6">
                <label className="text-sm font-semibold text-gray-600 block mb-3">Dil Seçimi</label>
                <div className="flex bg-gray-100 rounded-xl p-1">
                  <button
                    onClick={() => setLanguage('tr')}
                    className={`flex-1 py-2.5 rounded-lg font-semibold transition-all ${
                      language === 'tr' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    🇹🇷 Türkçe
                  </button>
                  <button
                    onClick={() => setLanguage('en')}
                    className={`flex-1 py-2.5 rounded-lg font-semibold transition-all ${
                      language === 'en' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    🇬🇧 English
                  </button>
                </div>
              </div>

              {/* Section Navigation */}
              <nav className="space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                      activeSection === section.id
                        ? `bg-gradient-to-r ${section.color} text-white shadow-lg`
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {section.icon}
                    <span className="font-medium text-sm">{section.label}</span>
                    {activeSection === section.id && <ChevronRight className="w-4 h-4 ml-auto" />}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            <div className="bg-white rounded-2xl shadow-sm p-8">
              {renderSection(activeSection, language)}
            </div>
          </main>
        </div>
      </div>

      {/* Export Modal */}
      {exportModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden shadow-2xl">
            <div className="p-6 border-b flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                <FileJson className="w-5 h-5 text-green-500" />
                İçeriği Dışa Aktar
              </h2>
              <button onClick={() => setExportModal(false)} className="p-2 hover:bg-gray-100 rounded-lg">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 max-h-[60vh] overflow-y-auto">
              <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-green-800">Nasıl Kullanılır?</h4>
                    <ol className="text-sm text-green-700 mt-2 space-y-1">
                      <li>1. "Panoya Kopyala" veya "Dosya İndir" butonuna tıklayın</li>
                      <li>2. İndirilen/klonlanan dosyayı <code className="bg-green-100 px-2 py-0.5 rounded">src/data/content.ts</code> ile değiştirin</li>
                      <li>3. Git'e push edin, site otomatik güncellenecek</li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="bg-gray-900 rounded-xl p-4 overflow-x-auto">
                <pre className="text-green-400 text-xs font-mono whitespace-pre-wrap">
                  {generateContentFile()}
                </pre>
              </div>
            </div>
            <div className="p-6 border-t flex gap-4 justify-end">
              <button
                onClick={() => setExportModal(false)}
                className="px-5 py-2.5 border-2 border-gray-200 rounded-xl font-semibold hover:bg-gray-50 transition-all"
              >
                Kapat
              </button>
              <button
                onClick={copyToClipboard}
                className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-5 py-2.5 rounded-xl font-semibold hover:shadow-lg transition-all"
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                {copied ? 'Kopyalandı!' : 'Panoya Kopyala'}
              </button>
              <button
                onClick={downloadFile}
                className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-5 py-2.5 rounded-xl font-semibold hover:shadow-lg transition-all"
              >
                <Download className="w-4 h-4" />
                Dosya İndir
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}