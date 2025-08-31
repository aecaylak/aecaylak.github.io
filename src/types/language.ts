export type Language = 'tr' | 'en';

export interface LanguageContent {
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
      role?: string;
      description?: string;
      skills: string[];
      duration?: string;
    }>;
  };
  education: {
    title: string;
    degrees: Array<{
      degree: string;
      school: string;
      period: string;
      note?: string;
      gpa?: string;
      skills?: string[];
    }>;
  };
  skills: {
    title: string;
    programming: {
      title: string;
      languages: Array<{
        name: string;
        level: number;
      }>;
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
      featured?: boolean;
    }>;
  };
  projects: {
    title: string;
    patentApplication: string;
    items: Array<{
      title: string;
      description: string;
      skills: string[];
      featured?: boolean;
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