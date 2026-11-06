export interface CoreOffering {
  id: 'software' | 'consultation' | 'tutoring';
  number: string;
  title: string;
  subtitle: string;
  description: string;
  platforms?: string[];
  highlights: string[];
  badge?: string;
}

export const CORE_OFFERINGS: CoreOffering[] = [
  {
    id: 'software',
    number: '01',
    title: 'Custom Software Creation',
    subtitle: 'Mobile, Web & Desktop Applications',
    description:
      'We architect, design, and engineer bespoke software tailored to your product specifications. From responsive web platforms to native-feel mobile and high-performance desktop apps, we deliver clean, scalable code that ships to production.',
    platforms: ['Web Applications', 'Mobile (iOS & Android)', 'Desktop (macOS & Windows)', 'Cloud APIs & Microservices'],
    highlights: [
      'Full-Stack Web (React, Next.js, TypeScript, Node.js)',
      'Cross-Platform Mobile (React Native, Flutter)',
      'Desktop Applications (Tauri, Electron)',
      'Cloud Architecture, Databases & Automated CI/CD'
    ],
    badge: 'Core Service'
  },
  {
    id: 'consultation',
    number: '02',
    title: 'Technical Consultation',
    subtitle: 'Architecture, Audits & Strategic Guidance',
    description:
      'Get direct, senior-level technical advisory to make informed engineering decisions. We evaluate architectures, diagnose bottlenecks, audit codebases for security and performance, and help teams choose the right stack before writing a single line of code.',
    highlights: [
      'System Architecture & Infrastructure Reviews',
      'Tech Stack Selection & Feasibility Analysis',
      'Codebase, Security & Web Vitals Audits',
      'Engineering Roadmap & Technical Debt Mitigation'
    ],
    badge: 'Senior Advisory'
  },
  {
    id: 'tutoring',
    number: '03',
    title: 'Developer Tutoring',
    subtitle: 'Hands-on 1-on-1 Technical Coaching',
    description:
      'Personalized tutoring for engineers, technical founders, and developers wanting to advance their craftsmanship. We pair-program through real-world scenarios, review code, demystify complex concepts, and build practical production applications together.',
    highlights: [
      '1-on-1 Pair Programming & Live Code Reviews',
      'Modern Web, Mobile & Backend Workflows',
      'Clean Code, Design Patterns & Testing Best Practices',
      'Career Progression & Technical Interview Prep'
    ],
    badge: '1-on-1 Coaching'
  }
];

export const AGENCY_PRINCIPLES = [
  {
    title: 'Senior-Only Execution',
    description: 'No junior handoffs or layers of account managers. You work directly with experienced software engineers who design and build every component.'
  },
  {
    title: 'Production Standards',
    description: 'We adhere to clean, typed, maintainable code with thorough testing, strong security, and automated deployments from day one.'
  },
  {
    title: 'Transparent Collaboration',
    description: 'Clear timelines, direct communication on Slack or Discord, and visible progress every week. We operate as a seamless extension of your team.'
  }
];

export const FAQS = [
  {
    q: 'What types of custom software can you build?',
    a: 'We engineer web applications (Next.js, React, Node), cross-platform mobile apps for iOS and Android (React Native, Flutter), and native-feel desktop software (Tauri, Electron), as well as backend APIs and cloud infrastructure.'
  },
  {
    q: 'How does a consultation session work?',
    a: 'You can book a one-off deep-dive session or ongoing technical advisory. Prior to our call, we review your architecture, codebase, or product requirements, then conduct a focused working session with actionable deliverables and follow-up notes.'
  },
  {
    q: 'Who is the tutoring designed for?',
    a: 'Our tutoring is tailored for developers of all levels looking to level up—from developers learning modern full-stack frameworks to engineers looking for guidance on architecture, clean code, and shipping production applications.'
  },
  {
    q: 'What is your typical project timeline?',
    a: 'Custom software sprints typically range from 2 to 8 weeks depending on scope. Consultation and tutoring can be scheduled on-demand with availability within 48 hours.'
  }
];
