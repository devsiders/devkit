export interface DevKit {
  id: string;
  name: string;
  description: string;
  logo: string;
  url: string;
  github?: string;
  category: 'libraries'| 'ui' | 'icons' | 'fonts'| 'tools';
  tags: string[];
}

export const devKits: DevKit[] = [
  // Libraries
  {
    id: '1',
    name: 'Tailwind CSS',
    description: 'Framework CSS utility-first para desarrollo rápido',
    logo: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg',
    url: 'https://tailwindcss.com',
    category: 'libraries',
    tags: ['css', 'styling', 'utility']
  },
  {
    id: '2',
    name: 'Bootstrap',
    description: 'Framework CSS popular para construir interfaces responsive y modernas',
    logo: 'https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png',
    url: 'https://getbootstrap.com',
    category: 'libraries',
    tags: ['css', 'responsive', 'framework']
  },


  // UI


  // Icons
  {
    id: '3',
    name: 'Lucide React',
    description: 'Iconos SVG hermosos y personalizables para React',
    logo: 'https://lucide.dev/logo.svg',
    url: 'https://lucide.dev',
    github: 'https://github.com/lucide-icons/lucide',
    category: 'icons',
    tags: ['svg', 'react', 'icons']
  },
  {
    id: '4',
    name: 'Heroicons',
    description: 'Iconos SVG gratuitos hechos por los creadores de Tailwind CSS',
    logo: 'https://heroicons.com/favicon.ico',
    url: 'https://heroicons.com',
    github: 'https://github.com/tailwindlabs/heroicons',
    category: 'icons',
    tags: ['svg', 'tailwind', 'free']
  },
  {
    id: '5',
    name: 'Font Awesome',
    description: 'El toolkit de iconos y fuentes más popular',
    logo: 'https://fontawesome.com/favicon.ico',
    url: 'https://fontawesome.com',
    category: 'icons',
    tags: ['icons', 'svg', 'toolkit']
  },
  {
    id: '6',
    name: 'Feather Icons',
    description: 'Iconos simples, hermosos y de código abierto',
    logo: 'https://feathericons.com/favicon.ico',
    url: 'https://feathericons.com',
    github: 'https://github.com/feathericons/feather',
    category: 'icons',
    tags: ['svg', 'minimal', 'opensource']
  },
  {
    id: '7',
    name: 'React Icons',
    description: 'Incluye iconos populares en tus proyectos React',
    logo: 'https://react-icons.github.io/react-icons/favicon.ico',
    url: 'https://react-icons.github.io/react-icons',
    github: 'https://github.com/react-icons/react-icons',
    category: 'icons',
    tags: ['react', 'collection', 'library']
  },
  {
    id: '8',
    name: 'Phosphor Icons',
    description: 'Familia flexible de iconos para interfaces',
    logo: 'https://phosphoricons.com/favicon.ico',
    url: 'https://phosphoricons.com',
    github: 'https://github.com/phosphor-icons/phosphor-icons',
    category: 'icons',
    tags: ['svg', 'flexible', 'design']
  },

  // Fonts
  {
    id: '9',
    name: 'Google Fonts',
    description: 'Biblioteca de fuentes de código abierto',
    logo: 'https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg',
    url: 'https://fonts.google.com',
    category: 'fonts',
    tags: ['typography', 'free', 'web']
  },
  {
    id: '10',
    name: 'JetBrains Mono',
    description: 'Fuente monoespaciada para desarrolladores',
    logo: 'https://www.jetbrains.com/favicon.ico',
    url: 'https://www.jetbrains.com/lp/mono',
    category: 'fonts',
    tags: ['monospace', 'coding', 'developer']
  },

  // Tools
  {
    id: '11',
    name: 'Excalidraw',
    description: 'Herramienta de dibujo colaborativo para crear diagramas y wireframes de forma rápida y simple',
    logo: 'https://excalidraw.com/favicon.ico',
    url: 'https://excalidraw.com',
    category: 'tools',
    tags: ['drawing', 'wireframes', 'diagrams']
  }

];
