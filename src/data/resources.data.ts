// Types for resources data
export interface Guide {
  id: string;
  title: string;
  description: string;
  category: string;
  readTime: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  tags: string[];
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  imageUrl?: string;
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };
  createdAt: Date;
}

export interface CompliancePoint {
  id: string;
  title: string;
  description: string;
  category: 'safety' | 'environmental' | 'quality' | 'regulatory';
  priority: 'high' | 'medium' | 'low';
  requirements: string[];
  documentation: string[];
  lastReviewed: Date;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
  tags: string[];
  helpful: number;
  createdAt: Date;
  updatedAt: Date;
}

// Sample data
export const guides: Guide[] = [
  {
    id: 'guide-1',
    title: 'Surface Installation Guide',
    description: 'Complete guide for installing Metro Surfaces products',
    category: 'Installation',
    readTime: 15,
    difficulty: 'intermediate',
    tags: ['installation', 'surfaces', 'tools'],
    content: 'Detailed installation instructions...',
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-08-20'),
  },
  {
    id: 'guide-2',
    title: 'Maintenance Best Practices',
    description: 'How to properly maintain and care for your surfaces',
    category: 'Maintenance',
    readTime: 10,
    difficulty: 'beginner',
    tags: ['maintenance', 'cleaning', 'care'],
    content: 'Maintenance guidelines and tips...',
    createdAt: new Date('2024-02-01'),
    updatedAt: new Date('2024-07-15'),
  },
  {
    id: 'guide-3',
    title: 'Design Selection Guide',
    description: 'Choosing the right surface design for your space',
    category: 'Design',
    readTime: 20,
    difficulty: 'beginner',
    tags: ['design', 'selection', 'aesthetics'],
    content: 'Design selection criteria and recommendations...',
    createdAt: new Date('2024-03-10'),
    updatedAt: new Date('2024-08-01'),
  },
];

export const caseStudies: CaseStudy[] = [
  {
    id: 'case-1',
    title: 'Modern Office Transformation',
    client: 'TechCorp Solutions',
    industry: 'Technology',
    challenge: 'Outdated office space needed modern, durable surfaces',
    solution: 'Implemented Metro Surfaces premium collection with antimicrobial properties',
    results: [
      '40% improvement in employee satisfaction',
      '99% reduction in surface-related maintenance',
      'LEED Gold certification achieved',
    ],
    imageUrl: '/images/case-studies/techcorp-office.jpg',
    testimonial: {
      quote: 'Metro Surfaces transformed our workspace beyond expectations.',
      author: 'Sarah Johnson',
      position: 'Facilities Manager',
    },
    createdAt: new Date('2024-05-15'),
  },
  {
    id: 'case-2',
    title: 'Hospital Wing Renovation',
    client: 'City General Hospital',
    industry: 'Healthcare',
    challenge: 'Need for hygienic, easy-to-clean surfaces in high-traffic areas',
    solution: 'Installed Metro Surfaces medical-grade collection with antimicrobial coating',
    results: [
      '60% reduction in cleaning time',
      'Hospital-grade hygiene standards met',
      'Enhanced patient and staff experience',
    ],
    testimonial: {
      quote: 'The surfaces have significantly improved our infection control protocols.',
      author: 'Dr. Michael Chen',
      position: 'Chief Medical Officer',
    },
    createdAt: new Date('2024-06-20'),
  },
  {
    id: 'case-3',
    title: 'Luxury Hotel Renovation',
    client: 'Grand Plaza Hotel',
    industry: 'Hospitality',
    challenge: 'Create elegant, durable surfaces for high-end hospitality environment',
    solution: 'Custom Metro Surfaces luxury line with unique textures and finishes',
    results: [
      '25% increase in customer satisfaction scores',
      '50% reduction in surface wear and tear',
      'Award-winning interior design recognition',
    ],
    testimonial: {
      quote: 'The surfaces perfectly complement our luxury brand aesthetic.',
      author: 'Elena Rodriguez',
      position: 'Hotel Manager',
    },
    createdAt: new Date('2024-07-10'),
  },
];

export const compliancePoints: CompliancePoint[] = [
  {
    id: 'comp-1',
    title: 'Fire Safety Standards',
    description: 'Compliance with fire safety regulations for surface materials',
    category: 'safety',
    priority: 'high',
    requirements: [
      'Class A fire rating certification',
      'Low flame spread index',
      'Minimal smoke development',
    ],
    documentation: [
      'Fire safety test reports',
      'Certification documents',
      'Installation guidelines',
    ],
    lastReviewed: new Date('2024-08-01'),
  },
  {
    id: 'comp-2',
    title: 'Environmental Standards',
    description: 'Adherence to environmental and sustainability requirements',
    category: 'environmental',
    priority: 'high',
    requirements: [
      'Low VOC emissions',
      'Recyclable materials',
      'Sustainable manufacturing processes',
    ],
    documentation: [
      'Environmental impact assessments',
      'GREENGUARD certification',
      'Sustainability reports',
    ],
    lastReviewed: new Date('2024-07-20'),
  },
  {
    id: 'comp-3',
    title: 'Quality Assurance',
    description: 'Quality control measures and testing protocols',
    category: 'quality',
    priority: 'medium',
    requirements: [
      'ISO 9001 certification',
      'Regular quality audits',
      'Batch testing procedures',
    ],
    documentation: [
      'Quality management system documentation',
      'Test certificates',
      'Audit reports',
    ],
    lastReviewed: new Date('2024-08-15'),
  },
  {
    id: 'comp-4',
    title: 'Building Code Compliance',
    description: 'Compliance with local and international building codes',
    category: 'regulatory',
    priority: 'high',
    requirements: [
      'Local building code approval',
      'International standards compliance',
      'Regular code updates monitoring',
    ],
    documentation: [
      'Building code compliance certificates',
      'Regulatory approval documents',
      'Code update notifications',
    ],
    lastReviewed: new Date('2024-08-10'),
  },
];

export const faqs: FAQ[] = [
  {
    id: 'faq-1',
    question: 'What is the warranty period for Metro Surfaces products?',
    answer: 'Metro Surfaces offers a comprehensive 10-year warranty on all our premium surface products, covering manufacturing defects and normal wear under proper installation and maintenance.',
    category: 'Warranty',
    tags: ['warranty', 'coverage', 'support'],
    helpful: 47,
    createdAt: new Date('2024-01-10'),
    updatedAt: new Date('2024-07-30'),
  },
  {
    id: 'faq-2',
    question: 'How do I clean and maintain Metro Surfaces?',
    answer: 'Regular cleaning with mild soap and water is sufficient. For deeper cleaning, use approved cleaning solutions. Avoid abrasive cleaners and always follow the maintenance guide provided with your product.',
    category: 'Maintenance',
    tags: ['cleaning', 'maintenance', 'care'],
    helpful: 63,
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-08-05'),
  },
  {
    id: 'faq-3',
    question: 'Are Metro Surfaces environmentally friendly?',
    answer: 'Yes, all Metro Surfaces products are manufactured using sustainable processes, contain recycled materials, and meet GREENGUARD Gold certification standards for low chemical emissions.',
    category: 'Environment',
    tags: ['sustainability', 'environment', 'certification'],
    helpful: 52,
    createdAt: new Date('2024-02-01'),
    updatedAt: new Date('2024-08-12'),
  },
  {
    id: 'faq-4',
    question: 'What installation services do you provide?',
    answer: 'Metro Surfaces offers professional installation services through our certified installer network. We provide consultation, measurement, installation, and post-installation support.',
    category: 'Installation',
    tags: ['installation', 'services', 'professional'],
    helpful: 38,
    createdAt: new Date('2024-02-10'),
    updatedAt: new Date('2024-08-18'),
  },
  {
    id: 'faq-5',
    question: 'Can Metro Surfaces be used in high-moisture areas?',
    answer: 'Yes, Metro Surfaces are designed to be water-resistant and can be safely used in bathrooms, kitchens, and other high-moisture environments when properly sealed and installed.',
    category: 'Application',
    tags: ['moisture', 'bathroom', 'kitchen', 'waterproof'],
    helpful: 41,
    createdAt: new Date('2024-03-01'),
    updatedAt: new Date('2024-08-20'),
  },
  {
    id: 'faq-6',
    question: 'How long does installation typically take?',
    answer: 'Installation time varies based on project size and complexity. Typical residential projects take 1-3 days, while commercial installations may take 1-2 weeks depending on the scope.',
    category: 'Installation',
    tags: ['timeline', 'duration', 'planning'],
    helpful: 29,
    createdAt: new Date('2024-03-15'),
    updatedAt: new Date('2024-08-22'),
  },
];

// Export all data as a single object for convenience
export const resourcesData = {
  guides,
  caseStudies,
  compliancePoints,
  faqs,
};

// Helper functions for data filtering and searching
export const getGuidesByCategory = (category: string): Guide[] => {
  return guides.filter(guide => guide.category === category);
};

export const getCaseStudiesByIndustry = (industry: string): CaseStudy[] => {
  return caseStudies.filter(study => study.industry === industry);
};

export const getComplianceByCategory = (category: CompliancePoint['category']): CompliancePoint[] => {
  return compliancePoints.filter(point => point.category === category);
};

export const getFAQsByCategory = (category: string): FAQ[] => {
  return faqs.filter(faq => faq.category === category);
};

export const searchFAQs = (query: string): FAQ[] => {
  const lowercaseQuery = query.toLowerCase();
  return faqs.filter(
    faq => 
      faq.question.toLowerCase().includes(lowercaseQuery) ||
      faq.answer.toLowerCase().includes(lowercaseQuery) ||
      faq.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};
