export type ExternalLink = {
  label: string;
  href: string;
  relMe?: boolean;
};

export type FeaturedRepo = {
  name: string;
  url: string;
  description: string;
  techStack: string[];
};

export type WritingLink = {
  title: string;
  href: string;
  summary: string;
  source: string;
};

export type SocialPost = {
  title: string;
  href: string;
  platform: 'LinkedIn' | 'YouTube';
  summary: string;
};

export const socialLinks: ExternalLink[] = [
  { label: 'Website', href: 'https://rupanprasai.com', relMe: true },
  { label: 'Photos', href: 'https://rupanprasai.com/photos', relMe: true },
  { label: 'GitHub', href: 'https://github.com/rupanprasai', relMe: true },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/rupanprasai/', relMe: true },
  { label: 'Medium', href: 'https://medium.com/@rupanprasai', relMe: true },
  { label: 'YouTube', href: 'https://youtube.com/@rupanprasai', relMe: true }
];

export const featuredRepos: FeaturedRepo[] = [
  {
    name: 'Profile README repository',
    url: 'https://github.com/RupanPrasai/rupanprasai',
    description: 'Personal GitHub profile repository highlighting my background, projects, and engineering focus areas.',
    techStack: ['Markdown', 'GitHub Profile']
  },
  {
    name: 'rupanprasai.com website',
    url: 'https://github.com/RupanPrasai/rupanprasai.com',
    description: 'This Astro + Cloudflare Pages site focused on performance, SEO, and clean technical storytelling.',
    techStack: ['Astro', 'TypeScript', 'Cloudflare Pages']
  },
  {
    name: 'ReadCursor',
    url: 'https://github.com/RupanPrasai/ReadCursor',
    description: 'A practical tooling project built to streamline reading and navigation workflows for developers.',
    techStack: ['TypeScript', 'Developer Tooling']
  }
];

export const writingLinks: WritingLink[] = [
  {
    title: 'Why I Care About Long-Term Growth',
    href: 'https://medium.com/@rupanprasai/why-i-care-about-long-term-growth-3fe7fe6ecd5c',
    summary: 'A short reflection on sustainable growth, consistency, and building momentum over time.',
    source: 'Medium'
  },
  {
    title: 'Follow Rupan Prasai on Medium',
    href: 'https://medium.com/@rupanprasai',
    summary: 'Read future posts and updates on engineering, growth, and practical software delivery.',
    source: 'Medium'
  }
];

export const socialPosts: SocialPost[] = [
  {
    title: 'Intro update',
    href: 'https://www.linkedin.com/posts/activity-7435123354631692289-SGqJ',
    platform: 'LinkedIn',
    summary: 'Introductory LinkedIn post.'
  },
  {
    title: 'Social links update',
    href: 'https://www.linkedin.com/posts/activity-7435123950667440128-o4Xh',
    platform: 'LinkedIn',
    summary: 'A quick post sharing key social links.'
  },
  {
    title: 'Medium article update',
    href: 'https://www.linkedin.com/posts/activity-7435124235032899584-0FRv',
    platform: 'LinkedIn',
    summary: 'Post sharing my Medium article.'
  },
  {
    title: 'Intro update',
    href: 'https://youtube.com/post/UgkxO5rEjvVp-zmGsgEXbIvlcmghsYJhhMti',
    platform: 'YouTube',
    summary: 'Introductory YouTube community post.'
  },
  {
    title: 'Social links update',
    href: 'https://youtube.com/post/Ugkx88PKXu3VG5N2SjLPpIC3Y60D2qoSmEwD',
    platform: 'YouTube',
    summary: 'Community post with social links.'
  },
  {
    title: 'Medium article update',
    href: 'https://youtube.com/post/Ugkx7n0Jmd33UftMzlzcVmpFJgy39vHS69A1',
    platform: 'YouTube',
    summary: 'Community post linking to my Medium article.'
  }
];
