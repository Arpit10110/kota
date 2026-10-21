export interface ServiceItem {
  id: string;
  number: string;
  heading: string;
  tags: string[];
  mainText: string;
  videoSrc: string;
  link: string;
}

export interface FrameworkSlide {
  id: string;
  step: string;
  title: string;
  description: string;
  videoSrc: string;
  poster?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  year: string;
  heading: string;
  tags: string[];
  videoSrc: string;
  posterImage: string;
  link: string;
  size: 'large' | 'small';
}

export interface StatItem {
  stat: string;
  description: string;
  client: string;
  buttonText: string;
  link: string;
}

export interface PartnerLogo {
  name: string;
  src: string;
}

export interface ArticleItem {
  title: string;
  category: string;
  date: string;
  readTime: string;
  link: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "brand-strategy",
    number: "01",
    heading: "Brand strategy\n& identity",
    tags: ["Brand strategy", "Brand identity design", "Tone of voice"],
    mainText: "When growth pulls at it, new audiences dilute it, and good intentions blur it, we’ll strengthen your brand with clear decisions that feel inevitable.",
    videoSrc: "/videos/Branding-1.mp4",
    link: "/service/brand-strategy-and-identity"
  },
  {
    id: "web-design",
    number: "02",
    heading: "Web design &\ndevelopment",
    tags: ["Creative web design", "Web development", "WordPress & CMS"],
    mainText: "Crafting digital experiences where beauty meets ROI, turning heads and unlocking revenue potential with every click.",
    videoSrc: "/videos/Websites-2026-1.mp4",
    link: "/service/web-design-development"
  },
  {
    id: "growth-marketing",
    number: "03",
    heading: "Growth\nmarketing",
    tags: ["SiteCare", "SEO & GEO", "Copywriting"],
    mainText: "SEO & AI search, content creation, copywriting, and ongoing support. Whatever you need, get seen and make it count with work that moves, connects and performs.",
    videoSrc: "/videos/Growth-Marketing.mp4",
    link: "/service/growth-marketing"
  }
];

export const FRAMEWORK_SLIDES: FrameworkSlide[] = [
  {
    id: "strategy-first",
    step: "01",
    title: "Strategy first.\nAlways.",
    description: "It all starts with clear thinking. Through stakeholder interviews and workshops, we immerse ourselves in your world to sharpen your positioning, messaging and direction before anyone touches the visuals.",
    videoSrc: "/videos/Strategy-Firstv2-compressed.mp4"
  },
  {
    id: "bold-idea",
    step: "02",
    title: "Find the\nbold idea.",
    description: "We’ll push you creatively, but we’ll always ground our ideas in strategy. From brand identity design to website interactions and immersion, every detail earns its place.",
    videoSrc: "/videos/Find-The-Bold-Idea-compressed.mp4"
  },
  {
    id: "nail-process",
    step: "03",
    title: "Nail the\nprocess.",
    description: "We’re collaborative, decisive, and clear from day one. No mystery, no jargon, no surprises. You’ll know where you stand. You’ll have a team that knows when to lead, and when to listen.",
    videoSrc: "/videos/Nail-The-Process-compressed.mp4"
  },
  {
    id: "create-convert",
    step: "04",
    title: "Create to\nconvert.",
    description: "We sweat the small stuff. That means from brand visuals to web development, every creative decision is designed to boost engagement, drive conversions, and build brand equity.",
    videoSrc: "/videos/Create-To-Convert-compress.mp4"
  },
  {
    id: "build-scale",
    step: "05",
    title: "Build for\nscale.",
    description: "We’re ready for your growth. In fact, we’re rooting for it. We build design systems, scalable websites, and forward-thinking marketing strategies made to stretch.",
    videoSrc: "/videos/Build-For-Scale-V3-compressed.mp4"
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "upp",
    title: "UPP",
    year: "2025",
    heading: "A cinematic web experience for a Hollywood powerhouse.",
    tags: ["Web design & development", "Agencies"],
    videoSrc: "/videos/Featured2-Compressed.mp4",
    posterImage: "/images/upp-featured-mobile.jpg",
    link: "/work/upp",
    size: "large"
  },
  {
    id: "copper",
    title: "Copper",
    year: "2026",
    heading: "A new brand for the technology behind always-on markets.",
    tags: ["Branding", "Web design & development", "Brand strategy", "Tone of voice", "Brand identity", "Finance"],
    videoSrc: "/videos/Copper-Feature-V3.mp4",
    posterImage: "/images/Copper-Feature-2560x1440.png",
    link: "/work/copper",
    size: "small"
  },
  {
    id: "bucher-suter",
    title: "Bucher + Suter",
    year: "2026",
    heading: "How Bucher + Suter found brand clarity through a new strategy with KOTA",
    tags: ["Branding", "Web design & development", "Brand strategy", "Tone of voice", "Brand identity", "B2B tech, software & SaaS"],
    videoSrc: "/videos/Featured-Video.mp4",
    posterImage: "/images/Featured-Image.png",
    link: "/work/bucher-suter",
    size: "small"
  },
  {
    id: "finura",
    title: "Finura",
    year: "2025",
    heading: "A new vision for modern wealth management",
    tags: ["Web design & development", "Brand strategy", "Tone of voice", "Brand identity", "Finance"],
    videoSrc: "/videos/Finura_Logo_Animation.mp4",
    posterImage: "/images/finura-logo-still.png",
    link: "/work/finura",
    size: "small"
  },
  {
    id: "goat-agency",
    title: "The Goat Agency",
    year: "2025",
    heading: "Influence everywhere: a future-ready website for The Goat Agency.",
    tags: ["Web design & development", "Agencies"],
    videoSrc: "/videos/GOAT-FeatureVideo.mp4",
    posterImage: "/images/GOAT-FeaturedImage.png",
    link: "/work/the-goat-agency",
    size: "small"
  }
];

export const STATS_DATA: StatItem[] = [
  {
    stat: "67.6%",
    description: "rise in engaged sessions per user after 1 month.",
    client: "Pison",
    buttonText: "View Project",
    link: "/work/pison"
  },
  {
    stat: "70.8%",
    description: "increase in organic traffic within 3 months of launch.",
    client: "Bespoke",
    buttonText: "View Project",
    link: "/work/bespoke"
  },
  {
    stat: "83.14%",
    description: "higher conversion rate across mobile & responsive touchpoints.",
    client: "Finura",
    buttonText: "View Project",
    link: "/work/finura"
  },
  {
    stat: "104.9%",
    description: "surge in qualified pipeline leads generated annually.",
    client: "ISI Global",
    buttonText: "View Project",
    link: "/work/isi-global"
  }
];

export const PARTNERS_LOGOS: PartnerLogo[] = [
  { name: "British Red Cross", src: "/images/british-red-cross.svg" },
  { name: "Penguin", src: "/images/penguin.svg" },
  { name: "Comptoir Libanais", src: "/images/comptoir-libanais-1.svg" },
  { name: "Jamie Oliver", src: "/images/Jamie-oliver.svg" },
  { name: "Penhaligon's", src: "/images/penhaligons.svg" },
  { name: "Stoli", src: "/images/stoli.svg" },
  { name: "Bounce", src: "/images/bounce.svg" },
  { name: "SYM", src: "/images/sym.svg" },
  { name: "Tangerine", src: "/images/tangerine.svg" },
  { name: "Tribepad", src: "/images/tribepad.svg" },
  { name: "Matchroom", src: "/images/matchroom.svg" },
  { name: "Diageo", src: "/images/diageo.svg" },
  { name: "Sonovate", src: "/images/sonovate.svg" },
  { name: "Saatchi & Saatchi", src: "/images/saatchi.svg" },
  { name: "RAW", src: "/images/raw.svg" }
];

export const TESTIMONIALS_DATA = [
  {
    quote: "“We needed something that would blur the lines between web, technology, and cinema, and reflect who we are... KOTA understood that vision. They transformed the brief beyond what we had imagined. It’s no exaggeration to say the final product redefines what a website can be.”",
    author: "Shaun Obanion",
    role: "PR Manager of Universal Production Partners",
    clientLogo: "/images/UPP-logo.svg",
    bgColor: "#f8e5cb"
  }
];

export const ARTICLES_DATA: ArticleItem[] = [
  {
    title: "Branding inspiration: design trends for 2026",
    category: "Branding",
    date: "Feb 2026",
    readTime: "5 min read",
    link: "/blog/branding-inspiration-trends"
  },
  {
    title: "Design with guts: KOTA's manifesto for creative bravery",
    category: "Culture",
    date: "Jan 2026",
    readTime: "4 min read",
    link: "/blog/design-with-guts"
  },
  {
    title: "KOTA wins a Lovie award for Best Web Design – Aesthetic!",
    category: "News",
    date: "Dec 2025",
    readTime: "3 min read",
    link: "/blog/lovie-award-win"
  },
  {
    title: "Brand-First vs Dev-First: What actually sets KOTA apart",
    category: "Strategy",
    date: "Nov 2025",
    readTime: "6 min read",
    link: "/blog/brand-first-vs-dev-first"
  }
];

export const FAQS_DATA: FaqItem[] = [
  {
    question: "What services do you offer?",
    answer: "We are full-service creative partners delivering brand strategy & identity, bespoke web design & development (Next.js, Headless WordPress, Webflow, Shopify), and targeted growth marketing & SEO."
  },
  {
    question: "Where are your teams based?",
    answer: "Our primary studios are located in London (Shoreditch) and New York City (Broadway), collaborating seamlessly with bold brands across the UK, Europe, and the US."
  },
  {
    question: "How long does a typical project take?",
    answer: "Brand identity projects typically run 4–8 weeks, while full-scale digital web projects range from 8–16 weeks depending on bespoke 3D, animation, and technical complexity."
  },
  {
    question: "How do you price your work?",
    answer: "We build custom project estimates based on your strategic objectives, creative requirements, and deliverables. We provide transparent, fixed-scope proposals."
  }
];
