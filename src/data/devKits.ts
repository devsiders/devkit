
export interface DevKit {
  id: string;
  name: string;
  description: string;
  logo: string;
  url: string;
  github?: string;
  category: 'libraries' | 'icons' | 'fonts';
  tags: string[];
}

export const devKits: DevKit[] = [
  // Libraries
  {
    id: '1',
    name: 'React',
    description: 'Una biblioteca de JavaScript para construir interfaces de usuario',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    url: 'https://reactjs.org',
    github: 'https://github.com/facebook/react',
    category: 'libraries',
    tags: ['javascript', 'frontend', 'ui']
  },
  {
    id: '2',
    name: 'Vue.js',
    description: 'Framework progresivo de JavaScript para construir UIs',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
    url: 'https://vuejs.org',
    github: 'https://github.com/vuejs/vue',
    category: 'libraries',
    tags: ['javascript', 'frontend', 'framework']
  },
  {
    id: '3',
    name: 'Angular',
    description: 'Plataforma y framework para aplicaciones web',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
    url: 'https://angular.io',
    github: 'https://github.com/angular/angular',
    category: 'libraries',
    tags: ['typescript', 'frontend', 'framework']
  },
  {
    id: '4',
    name: 'Tailwind CSS',
    description: 'Framework CSS utility-first para desarrollo rápido',
    logo: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg',
    url: 'https://tailwindcss.com',
    github: 'https://github.com/tailwindlabs/tailwindcss',
    category: 'libraries',
    tags: ['css', 'styling', 'utility']
  },
  {
    id: '5',
    name: 'Next.js',
    description: 'Framework React para producción',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    url: 'https://nextjs.org',
    github: 'https://github.com/vercel/next.js',
    category: 'libraries',
    tags: ['react', 'fullstack', 'ssr']
  },
  {
    id: '6',
    name: 'Express.js',
    description: 'Framework web minimalista para Node.js',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    url: 'https://expressjs.com',
    github: 'https://github.com/expressjs/express',
    category: 'libraries',
    tags: ['nodejs', 'backend', 'api']
  },

  // Icons
  {
    id: '7',
    name: 'Lucide React',
    description: 'Iconos SVG hermosos y personalizables para React',
    logo: 'https://lucide.dev/logo.svg',
    url: 'https://lucide.dev',
    github: 'https://github.com/lucide-icons/lucide',
    category: 'icons',
    tags: ['svg', 'react', 'icons']
  },
  {
    id: '8',
    name: 'Heroicons',
    description: 'Iconos SVG gratuitos hechos por los creadores de Tailwind CSS',
    logo: 'https://heroicons.com/favicon.ico',
    url: 'https://heroicons.com',
    github: 'https://github.com/tailwindlabs/heroicons',
    category: 'icons',
    tags: ['svg', 'tailwind', 'free']
  },
  {
    id: '9',
    name: 'Feather Icons',
    description: 'Iconos simples, hermosos y de código abierto',
    logo: 'https://feathericons.com/favicon.ico',
    url: 'https://feathericons.com',
    github: 'https://github.com/feathericons/feather',
    category: 'icons',
    tags: ['svg', 'minimal', 'opensource']
  },
  {
    id: '10',
    name: 'React Icons',
    description: 'Incluye iconos populares en tus proyectos React',
    logo: 'https://react-icons.github.io/react-icons/favicon.ico',
    url: 'https://react-icons.github.io/react-icons',
    github: 'https://github.com/react-icons/react-icons',
    category: 'icons',
    tags: ['react', 'collection', 'library']
  },
  {
    id: '11',
    name: 'Phosphor Icons',
    description: 'Familia flexible de iconos para interfaces',
    logo: 'https://phosphoricons.com/favicon.ico',
    url: 'https://phosphoricons.com',
    github: 'https://github.com/phosphor-icons/phosphor-icons',
    category: 'icons',
    tags: ['svg', 'flexible', 'design']
  },
  {
    id: '12',
    name: 'Tabler Icons',
    description: 'Más de 4000 iconos SVG gratuitos',
    logo: 'https://tabler-icons.io/favicon.ico',
    url: 'https://tabler-icons.io',
    github: 'https://github.com/tabler/tabler-icons',
    category: 'icons',
    tags: ['svg', 'free', 'large-collection']
  },

  // Fonts
  {
    id: '13',
    name: 'Google Fonts',
    description: 'Biblioteca de fuentes de código abierto',
    logo: 'https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg',
    url: 'https://fonts.google.com',
    github: 'https://github.com/google/fonts',
    category: 'fonts',
    tags: ['typography', 'free', 'web']
  },
  {
    id: '14',
    name: 'Font Awesome',
    description: 'El toolkit de iconos y fuentes más popular',
    logo: 'https://fontawesome.com/favicon.ico',
    url: 'https://fontawesome.com',
    github: 'https://github.com/FortAwesome/Font-Awesome',
    category: 'fonts',
    tags: ['icons', 'fonts', 'toolkit']
  },
  {
    id: '15',
    name: 'Inter',
    description: 'Familia tipográfica cuidadosamente diseñada para pantallas',
    logo: 'https://rsms.me/inter/favicon.ico',
    url: 'https://rsms.me/inter',
    github: 'https://github.com/rsms/inter',
    category: 'fonts',
    tags: ['sans-serif', 'ui', 'modern']
  },
  {
    id: '16',
    name: 'JetBrains Mono',
    description: 'Fuente monoespaciada para desarrolladores',
    logo: 'https://www.jetbrains.com/favicon.ico',
    url: 'https://www.jetbrains.com/lp/mono',
    github: 'https://github.com/JetBrains/JetBrainsMono',
    category: 'fonts',
    tags: ['monospace', 'coding', 'developer']
  },
  {
    id: '17',
    name: 'Poppins',
    description: 'Fuente geométrica sans serif',
    logo: 'https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg',
    url: 'https://fonts.google.com/specimen/Poppins',
    category: 'fonts',
    tags: ['sans-serif', 'geometric', 'modern']
  },
  {
    id: '18',
    name: 'Fira Code',
    description: 'Fuente monoespaciada con ligaduras para programación',
    logo: 'https://github.com/tonsky/FiraCode/raw/master/extras/logo.svg',
    url: 'https://github.com/tonsky/FiraCode',
    github: 'https://github.com/tonsky/FiraCode',
    category: 'fonts',
    tags: ['monospace', 'ligatures', 'programming']
  }
];
