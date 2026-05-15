import { useState, useEffect } from 'react';
import { Save, Download, Edit3, Trash2, Plus, ChevronRight, User, Briefcase, GraduationCap, Code, Award, Folder, Mail, Globe, ArrowLeft, Check, X, AlertTriangle, FileJson, Copy, RefreshCw } from 'lucide-react';

type Language = 'tr' | 'en';

interface FormData {
  navigation: { home: string; about: string; experience: string; education: string; skills: string; projects: string; contact: string; };
  hero: { title: string; subtitle: string; description: string; exploreButton: string; contactButton: string; imageAlt: string; };
  about: { title: string; paragraphs: string[]; location: string; interests: { title: string; items: string[]; }; languages: { title: string; turkish: string; english: string; german: string; native: string; advanced: string; beginner: string; }; };
  experience: { title: string; positions: Array<{ title: string; company: string; period: string; location: string; role: string; skills: string[]; duration: string; }>; };
  education: { title: string; degrees: Array<{ degree: string; school: string; period: string; note: string; gpa: string; skills: string[]; }>; };
  skills: { title: string; programming: { title: string; languages: Array<{ name: string; level: number }>; }; technologies: { title: string; items: string[]; }; expertise: { title: string; items: string[]; }; };
  certifications: { title: string; featured: string; items: Array<{ title: string; issuer: string; date: string; skills: string[]; featured: boolean; }>; };
  projects: { title: string; items: Array<{ title: string; description: string; skills: string[]; badgeText: string; featured: boolean; }>; };
  contact: { title: string; description: string; linkedinProfile: string; sendEmail: string; email: string; location: string; linkedin: string; };
  footer: { copyright: string; };
}

const defaultContent: Record<Language, FormData> = {
  tr: {
    navigation: { home: 'Ana Sayfa', about: 'Hakkımda', experience: 'Deneyim', education: 'Eğitim', skills: 'Yetenekler', projects: 'Projeler', contact: 'İletişim' },
    hero: { title: 'Ali Emre Çaylak', subtitle: 'Yapay Zeka Odaklı Endüstri Mühendisi', description: 'TOBB ETÜ Tam Burslu Endüstri Mühendisliği Lisans ve Yapay Zeka Mühendisliği Yan Dal Mezunudur.', exploreButton: 'Keşfet', contactButton: 'İletişim', imageAlt: 'Ali Emre Çaylak Profil Fotoğrafı' },
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

const sections = [
  { id: 'hero', label: 'Hero', icon: <User size={20} />, color: 'from-blue-500 to-blue-600' },
  { id: 'about', label: 'Hakkımda', icon: <Edit3 size={20} />, color: 'from-green-500 to-green-600' },
  { id: 'experience', label: 'Deneyim', icon: <Briefcase size={20} />, color: 'from-purple-500 to-purple-600' },
  { id: 'education', label: 'Eğitim', icon: <GraduationCap size={20} />, color: 'from-orange-500 to-orange-600' },
  { id: 'skills', label: 'Yetenekler', icon: <Code size={20} />, color: 'from-pink-500 to-pink-600' },
  { id: 'certifications', label: 'Sertifikalar', icon: <Award size={20} />, color: 'from-yellow-500 to-yellow-600' },
  { id: 'projects', label: 'Projeler', icon: <Folder size={20} />, color: 'from-indigo-500 to-indigo-600' },
  { id: 'contact', label: 'İletişim', icon: <Mail size={20} />, color: 'from-teal-500 to-teal-600' },
  { id: 'footer', label: 'Footer', icon: <Globe size={20} />, color: 'from-gray-500 to-gray-600' },
];

function App() {
  const [language, setLanguage] = useState<Language>('tr');
  const [activeSection, setActiveSection] = useState('hero');
  const [formData, setFormData] = useState<Record<Language, FormData>>(defaultContent);
  const [isSaving, setIsSaving] = useState(false);
  const [notification, setNotification] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [exportModal, setExportModal] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('adminContent');
    if (saved) {
      try {
        setFormData(JSON.parse(saved));
      } catch (e) { console.error('Failed to parse saved content'); }
    }
  }, []);

  const showNotification = (type: 'success' | 'error', message: string) => {
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
    setTimeout(() => { setIsSaving(false); showNotification('success', 'Kaydedildi! ✓'); }, 500);
  };

  const generateContentFile = () => {
    const gen = (s: FormData, i: string = '    ') => {
      const lines: string[] = [];
      lines.push(`${i}navigation: { home: '${s.navigation.home}', about: '${s.navigation.about}', experience: '${s.navigation.experience}', education: '${s.navigation.education}', skills: '${s.navigation.skills}', projects: '${s.navigation.projects}', contact: '${s.navigation.contact}' },`);
      lines.push(`${i}hero: { title: '${s.hero.title}', subtitle: '${s.hero.subtitle}', description: '${s.hero.description.replace(/'/g, "\\'")}', exploreButton: '${s.hero.exploreButton}', contactButton: '${s.hero.contactButton}', imageAlt: '${s.hero.imageAlt}' },`);
      lines.push(`${i}about: { title: '${s.about.title}', paragraphs: [${s.about.paragraphs.map(p => `'${p.replace(/'/g, "\\'")}'`).join(', ')}], location: '${s.about.location}', interests: { title: '${s.about.interests.title}', items: [${s.about.interests.items.map(it => `'${it}'`).join(', ')}] }, languages: { title: '${s.about.languages.title}', turkish: '${s.about.languages.turkish}', english: '${s.about.languages.english}', german: '${s.about.languages.german}', native: '${s.about.languages.native}', advanced: '${s.about.languages.advanced}', beginner: '${s.about.languages.beginner}' } },`);
      lines.push(`${i}experience: { title: '${s.experience.title}', positions: [${s.experience.positions.map(p => `{ title: '${p.title}', company: '${p.company}', period: '${p.period}', location: '${p.location}', role: '${p.role}', skills: [${p.skills.map(sk => `'${sk}'`).join(', ')}], duration: '${p.duration}' }`).join(', ')}] },`);
      lines.push(`${i}education: { title: '${s.education.title}', degrees: [${s.education.degrees.map(d => `{ degree: '${d.degree}', school: '${d.school}', period: '${d.period}', note: '${d.note}', gpa: '${d.gpa}', skills: [${d.skills.map(sk => `'${sk}'`).join(', ')}] }`).join(', ')}] },`);
      lines.push(`${i}skills: { title: '${s.skills.title}', programming: { title: '${s.skills.programming.title}', languages: [${s.skills.programming.languages.map(l => `{ name: '${l.name}', level: ${l.level} }`).join(', ')}] }, technologies: { title: '${s.skills.technologies.title}', items: [${s.skills.technologies.items.map(it => `'${it}'`).join(', ')}] }, expertise: { title: '${s.skills.expertise.title}', items: [${s.skills.expertise.items.map(it => `'${it}'`).join(', ')}] } },`);
      lines.push(`${i}certifications: { title: '${s.certifications.title}', featured: '${s.certifications.featured}', items: [${s.certifications.items.map(c => `{ title: '${c.title}', issuer: '${c.issuer}', date: '${c.date}', skills: [${c.skills.map(sk => `'${sk}'`).join(', ')}], featured: ${c.featured} }`).join(', ')}] },`);
      lines.push(`${i}projects: { title: '${s.projects.title}', items: [${s.projects.items.map(p => `{ title: '${p.title}', description: '${p.description.replace(/'/g, "\\'")}', skills: [${p.skills.map(sk => `'${sk}'`).join(', ')}], badgeText: '${p.badgeText}', featured: ${p.featured} }`).join(', ')}] },`);
      lines.push(`${i}contact: { title: '${s.contact.title}', description: '${s.contact.description.replace(/'/g, "\\'")}', linkedinProfile: '${s.contact.linkedinProfile}', sendEmail: '${s.contact.sendEmail}', email: '${s.contact.email}', location: '${s.contact.location}', linkedin: '${s.contact.linkedin}' },`);
      lines.push(`${i}footer: { copyright: '${s.footer.copyright}' }`);
      return lines;
    };
    return `import { LanguageContent } from '../types/language';

export const content: Record<'tr' | 'en', LanguageContent> = {
  tr: {
${gen(formData.tr).join('\n')}
  },
  en: {
${gen(formData.en).join('\n')}
  }
};`;
  };

  const downloadFile = () => {
    const blob = new Blob([generateContentFile()], { type: 'text/typescript' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = 'content.ts'; a.click();
    URL.revokeObjectURL(url);
    showNotification('success', 'Dosya indirildi! 📥');
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generateContentFile());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    showNotification('success', 'Kopyalandı! 📋');
  };

  const Input = ({ label, value, onChange, multiline = false }: { label: string; value: string; onChange: (val: string) => void; multiline?: boolean }) => (
    <div className="space-y-2">
      <label className="text-sm font-semibold text-gray-700">{label}</label>
      {multiline ? (
        <textarea value={value} onChange={e => onChange(e.target.value)} rows={3} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 transition-all bg-white resize-none" />
      ) : (
        <input type="text" value={value} onChange={e => onChange(e.target.value)} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 transition-all bg-white" />
      )}
    </div>
  );

  const addItem = (lang: Language, path: string, newItem: any) => {
    const keys = path.split('.');
    setFormData(prev => {
      const nd = { ...prev };
      let c: any = nd[lang];
      for (let i = 0; i < keys.length - 1; i++) c = c[keys[i]];
      c[keys[keys.length - 1]] = [...c[keys[keys.length - 1]], newItem];
      return nd;
    });
  };

  const removeItem = (lang: Language, path: string, idx: number) => {
    const keys = path.split('.');
    setFormData(prev => {
      const nd = { ...prev };
      let c: any = nd[lang];
      for (let i = 0; i < keys.length - 1; i++) c = c[keys[i]];
      c[keys[keys.length - 1]] = c[keys[keys.length - 1]].filter((_: any, i: number) => i !== idx);
      return nd;
    });
  };

  const updateItem = (lang: Language, path: string, idx: number, field: string, value: any) => {
    const keys = path.split('.');
    setFormData(prev => {
      const nd = { ...prev };
      let c: any = nd[lang];
      for (let i = 0; i < keys.length - 1; i++) c = c[keys[i]];
      const arr = [...c[keys[keys.length - 1]]];
      arr[idx] = { ...arr[idx], [field]: value };
      c[keys[keys.length - 1]] = arr;
      return nd;
    });
  };

  const ArrayEditor = ({ items, path, fields, lang }: { items: any[]; path: string; fields: Array<{ key: string; label: string; multiline?: boolean }>; lang: Language }) => (
    <div className="space-y-4">
      {items.map((item, i) => (
        <div key={i} className="bg-gray-50 rounded-xl p-5 border-2 border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <span className="font-bold text-gray-500">#{i + 1}</span>
            <button onClick={() => removeItem(lang, path, i)} className="p-2 text-red-500 hover:bg-red-50 rounded-lg"><Trash2 size={18} /></button>
          </div>
          <div className="space-y-4">
            {fields.map(f => (
              <Input key={f.key} label={f.label} value={item[f.key] || ''} onChange={v => updateItem(lang, path, i, f.key, v)} multiline={f.multiline} />
            ))}
          </div>
        </div>
      ))}
      <button onClick={() => addItem(lang, path, fields.reduce((acc, f) => ({ ...acc, [f.key]: f.multiline ? '' : '' }), {}))} className="flex items-center gap-2 text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg font-medium">
        <Plus size={18} /> Ekle
      </button>
    </div>
  );

  const renderSection = (id: string) => {
    const lang = language;
    switch (id) {
      case 'hero': return (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl p-6"><h3 className="text-lg font-bold">Hero Bölümü</h3></div>
          <Input label="Başlık" value={formData[lang].hero.title} onChange={v => updateField(lang, 'hero.title', v)} />
          <Input label="Alt Başlık" value={formData[lang].hero.subtitle} onChange={v => updateField(lang, 'hero.subtitle', v)} />
          <Input label="Açıklama" value={formData[lang].hero.description} onChange={v => updateField(lang, 'hero.description', v)} multiline />
          <div className="grid grid-cols-2 gap-4">
            <Input label="Keşfet Butonu" value={formData[lang].hero.exploreButton} onChange={v => updateField(lang, 'hero.exploreButton', v)} />
            <Input label="İletişim Butonu" value={formData[lang].hero.contactButton} onChange={v => updateField(lang, 'hero.contactButton', v)} />
          </div>
          <Input label="Resim Alt Metni" value={formData[lang].hero.imageAlt} onChange={v => updateField(lang, 'hero.imageAlt', v)} />
        </div>
      );
      case 'about': return (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl p-6"><h3 className="text-lg font-bold">Hakkımda</h3></div>
          <Input label="Başlık" value={formData[lang].about.title} onChange={v => updateField(lang, 'about.title', v)} />
          <div>
            <h4 className="font-semibold text-gray-700 mb-3">Paragraflar</h4>
            {formData[lang].about.paragraphs.map((p, i) => (
              <div key={i} className="flex gap-2 mb-2">
                <textarea value={p} onChange={e => { const np = [...formData[lang].about.paragraphs]; np[i] = e.target.value; updateField(lang, 'about.paragraphs', np); }} className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 resize-none" />
                <button onClick={() => updateField(lang, 'about.paragraphs', formData[lang].about.paragraphs.filter((_, idx) => idx !== i))} className="p-2 text-red-500 hover:bg-red-50 rounded-lg"><X size={16} /></button>
              </div>
            ))}
            <button onClick={() => updateField(lang, 'about.paragraphs', [...formData[lang].about.paragraphs, ''])} className="flex items-center gap-2 text-green-600 hover:bg-green-50 px-4 py-2 rounded-lg font-medium"><Plus size={18} /> Paragraf Ekle</button>
          </div>
          <Input label="Konum Başlığı" value={formData[lang].about.location} onChange={v => updateField(lang, 'about.location', v)} />
          <div>
            <h4 className="font-semibold text-gray-700 mb-3">İlgi Alanları</h4>
            {formData[lang].about.interests.items.map((it, i) => (
              <div key={i} className="flex gap-2 mb-2">
                <input type="text" value={it} onChange={e => { const ni = [...formData[lang].about.interests.items]; ni[i] = e.target.value; updateField(lang, 'about.interests.items', ni); }} className="flex-1 px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-green-500" />
                <button onClick={() => updateField(lang, 'about.interests.items', formData[lang].about.interests.items.filter((_, idx) => idx !== i))} className="p-2 text-red-500 hover:bg-red-50 rounded-lg"><X size={16} /></button>
              </div>
            ))}
            <button onClick={() => updateField(lang, 'about.interests.items', [...formData[lang].about.interests.items, ''])} className="flex items-center gap-2 text-green-600 hover:bg-green-50 px-4 py-2 rounded-lg font-medium"><Plus size={18} /> Ekle</button>
          </div>
        </div>
      );
      case 'experience': return (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl p-6"><h3 className="text-lg font-bold">Deneyim</h3></div>
          <Input label="Başlık" value={formData[lang].experience.title} onChange={v => updateField(lang, 'experience.title', v)} />
          <ArrayEditor items={formData[lang].experience.positions} path="experience.positions" lang={lang} fields={[{ key: 'title', label: 'Pozisyon' }, { key: 'company', label: 'Şirket' }, { key: 'period', label: 'Dönem' }, { key: 'location', label: 'Konum' }, { key: 'role', label: 'Rol' }, { key: 'duration', label: 'Süre' }]} />
        </div>
      );
      case 'education': return (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl p-6"><h3 className="text-lg font-bold">Eğitim</h3></div>
          <Input label="Başlık" value={formData[lang].education.title} onChange={v => updateField(lang, 'education.title', v)} />
          <ArrayEditor items={formData[lang].education.degrees} path="education.degrees" lang={lang} fields={[{ key: 'degree', label: 'Bölüm' }, { key: 'school', label: 'Okul' }, { key: 'period', label: 'Dönem' }, { key: 'note', label: 'Not' }, { key: 'gpa', label: 'GNÖ' }]} />
        </div>
      );
      case 'skills': return (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-xl p-6"><h3 className="text-lg font-bold">Yetenekler</h3></div>
          <Input label="Başlık" value={formData[lang].skills.title} onChange={v => updateField(lang, 'skills.title', v)} />
          <div className="bg-pink-50 rounded-xl p-5">
            <h4 className="font-semibold text-pink-700 mb-4">Programlama Dilleri</h4>
            {formData[lang].skills.programming.languages.map((l, i) => (
              <div key={i} className="flex gap-3 mb-3 items-center">
                <input type="text" value={l.name} onChange={e => { const nl = [...formData[lang].skills.programming.languages]; nl[i] = { ...nl[i], name: e.target.value }; updateField(lang, 'skills.programming.languages', nl); }} className="flex-1 px-4 py-2 border-2 border-gray-200 rounded-lg" placeholder="Dil" />
                <select value={l.level} onChange={e => { const nl = [...formData[lang].skills.programming.languages]; nl[i] = { ...nl[i], level: parseInt(e.target.value) }; updateField(lang, 'skills.programming.languages', nl); }} className="px-4 py-2 border-2 border-gray-200 rounded-lg">
                  <option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option>
                </select>
                <button onClick={() => updateField(lang, 'skills.programming.languages', formData[lang].skills.programming.languages.filter((_, idx) => idx !== i))} className="p-2 text-red-500 hover:bg-red-50 rounded-lg"><X size={16} /></button>
              </div>
            ))}
            <button onClick={() => updateField(lang, 'skills.programming.languages', [...formData[lang].skills.programming.languages, { name: '', level: 3 }])} className="flex items-center gap-2 text-pink-600 hover:bg-pink-100 px-4 py-2 rounded-lg font-medium"><Plus size={18} /> Dil Ekle</button>
          </div>
          <div className="bg-pink-50 rounded-xl p-5">
            <h4 className="font-semibold text-pink-700 mb-4">Teknolojiler</h4>
            {formData[lang].skills.technologies.items.map((it, i) => (
              <div key={i} className="flex gap-2 mb-2">
                <input type="text" value={it} onChange={e => { const ni = [...formData[lang].skills.technologies.items]; ni[i] = e.target.value; updateField(lang, 'skills.technologies.items', ni); }} className="flex-1 px-4 py-2 border-2 border-gray-200 rounded-lg" />
                <button onClick={() => updateField(lang, 'skills.technologies.items', formData[lang].skills.technologies.items.filter((_, idx) => idx !== i))} className="p-2 text-red-500 hover:bg-red-50 rounded-lg"><X size={16} /></button>
              </div>
            ))}
            <button onClick={() => updateField(lang, 'skills.technologies.items', [...formData[lang].skills.technologies.items, ''])} className="flex items-center gap-2 text-pink-600 hover:bg-pink-100 px-4 py-2 rounded-lg font-medium"><Plus size={18} /> Ekle</button>
          </div>
          <div className="bg-pink-50 rounded-xl p-5">
            <h4 className="font-semibold text-pink-700 mb-4">Uzmanlık</h4>
            {formData[lang].skills.expertise.items.map((it, i) => (
              <div key={i} className="flex gap-2 mb-2">
                <input type="text" value={it} onChange={e => { const ni = [...formData[lang].skills.expertise.items]; ni[i] = e.target.value; updateField(lang, 'skills.expertise.items', ni); }} className="flex-1 px-4 py-2 border-2 border-gray-200 rounded-lg" />
                <button onClick={() => updateField(lang, 'skills.expertise.items', formData[lang].skills.expertise.items.filter((_, idx) => idx !== i))} className="p-2 text-red-500 hover:bg-red-50 rounded-lg"><X size={16} /></button>
              </div>
            ))}
            <button onClick={() => updateField(lang, 'skills.expertise.items', [...formData[lang].skills.expertise.items, ''])} className="flex items-center gap-2 text-pink-600 hover:bg-pink-100 px-4 py-2 rounded-lg font-medium"><Plus size={18} /> Ekle</button>
          </div>
        </div>
      );
      case 'certifications': return (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-xl p-6"><h3 className="text-lg font-bold">Sertifikalar</h3></div>
          <Input label="Başlık" value={formData[lang].certifications.title} onChange={v => updateField(lang, 'certifications.title', v)} />
          <ArrayEditor items={formData[lang].certifications.items} path="certifications.items" lang={lang} fields={[{ key: 'title', label: 'Sertifika Adı' }, { key: 'issuer', label: 'Veren Kurum' }, { key: 'date', label: 'Tarih' }]} />
        </div>
      );
      case 'projects': return (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white rounded-xl p-6"><h3 className="text-lg font-bold">Projeler</h3></div>
          <Input label="Başlık" value={formData[lang].projects.title} onChange={v => updateField(lang, 'projects.title', v)} />
          <ArrayEditor items={formData[lang].projects.items} path="projects.items" lang={lang} fields={[{ key: 'title', label: 'Proje Adı' }, { key: 'description', label: 'Açıklama', multiline: true }, { key: 'badgeText', label: 'Rozet' }]} />
        </div>
      );
      case 'contact': return (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-xl p-6"><h3 className="text-lg font-bold">İletişim</h3></div>
          <Input label="Başlık" value={formData[lang].contact.title} onChange={v => updateField(lang, 'contact.title', v)} />
          <Input label="Açıklama" value={formData[lang].contact.description} onChange={v => updateField(lang, 'contact.description', v)} multiline />
          <div className="grid grid-cols-2 gap-4">
            <Input label="LinkedIn Profil" value={formData[lang].contact.linkedinProfile} onChange={v => updateField(lang, 'contact.linkedinProfile', v)} />
            <Input label="E-posta Gönder" value={formData[lang].contact.sendEmail} onChange={v => updateField(lang, 'contact.sendEmail', v)} />
          </div>
        </div>
      );
      case 'footer': return (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-gray-500 to-gray-600 text-white rounded-xl p-6"><h3 className="text-lg font-bold">Footer</h3></div>
          <Input label="Telif Hakkı" value={formData[lang].footer.copyright} onChange={v => updateField(lang, 'footer.copyright', v)} />
        </div>
      );
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {notification && (
        <div className={`fixed top-4 right-4 z-50 px-6 py-4 rounded-xl shadow-xl flex items-center gap-3 ${notification.type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
          {notification.type === 'success' ? <Check size={20} /> : <AlertTriangle size={20} />}
          {notification.message}
        </div>
      )}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
              <Edit3 className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">Admin Panel</h1>
              <p className="text-sm text-gray-500">İçerik Düzenleyici</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={handleSave} disabled={isSaving} className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-5 py-2.5 rounded-xl font-semibold hover:shadow-lg transition-all disabled:opacity-50">
              {isSaving ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />} Kaydet
            </button>
            <button onClick={() => setExportModal(true)} className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-5 py-2.5 rounded-xl font-semibold hover:shadow-lg transition-all">
              <Download className="w-4 h-4" /> Dışa Aktar
            </button>
          </div>
        </div>
      </header>
      <div className="max-w-7xl mx-auto px-6 py-6 flex gap-6">
        <aside className="w-64 flex-shrink-0">
          <div className="bg-white rounded-2xl shadow-sm p-4 sticky top-24">
            <div className="mb-6">
              <label className="text-sm font-semibold text-gray-600 block mb-3">Dil</label>
              <div className="flex bg-gray-100 rounded-xl p-1">
                <button onClick={() => setLanguage('tr')} className={`flex-1 py-2.5 rounded-lg font-semibold transition-all ${language === 'tr' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500'}`}>🇹🇷 Türkçe</button>
                <button onClick={() => setLanguage('en')} className={`flex-1 py-2.5 rounded-lg font-semibold transition-all ${language === 'en' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500'}`}>🇬🇧 English</button>
              </div>
            </div>
            <nav className="space-y-2">
              {sections.map(s => (
                <button key={s.id} onClick={() => setActiveSection(s.id)} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeSection === s.id ? `bg-gradient-to-r ${s.color} text-white shadow-lg` : 'text-gray-600 hover:bg-gray-100'}`}>
                  {s.icon} <span className="font-medium text-sm">{s.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </aside>
        <main className="flex-1"><div className="bg-white rounded-2xl shadow-sm p-8">{renderSection(activeSection)}</div></main>
      </div>
      {exportModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden shadow-2xl">
            <div className="p-6 border-b flex items-center justify-between">
              <h2 className="text-xl font-bold flex items-center gap-2"><FileJson className="w-5 h-5 text-green-500" /> İçeriği Dışa Aktar</h2>
              <button onClick={() => setExportModal(false)} className="p-2 hover:bg-gray-100 rounded-lg"><X className="w-5 h-5" /></button>
            </div>
            <div className="p-6 max-h-[60vh] overflow-y-auto">
              <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
                <h4 className="font-semibold text-green-800">Kullanım:</h4>
                <ol className="text-sm text-green-700 mt-2 space-y-1">
                  <li>1. Dosyayı indir veya kopyala</li>
                  <li>2. <code className="bg-green-100 px-2 py-0.5 rounded">src/data/content.ts</code> dosyasını değiştir</li>
                  <li>3. Git push yap</li>
                </ol>
              </div>
              <div className="bg-gray-900 rounded-xl p-4 overflow-x-auto">
                <pre className="text-green-400 text-xs font-mono whitespace-pre-wrap">{generateContentFile()}</pre>
              </div>
            </div>
            <div className="p-6 border-t flex gap-4 justify-end">
              <button onClick={() => setExportModal(false)} className="px-5 py-2.5 border-2 border-gray-200 rounded-xl font-semibold hover:bg-gray-50">Kapat</button>
              <button onClick={copyToClipboard} className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-5 py-2.5 rounded-xl font-semibold">
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />} {copied ? 'Kopyalandı!' : 'Kopyala'}
              </button>
              <button onClick={downloadFile} className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-5 py-2.5 rounded-xl font-semibold">
                <Download className="w-4 h-4" /> İndir
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;