
import { Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="relative overflow-hidden galaxy-bg text-white">
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="relative container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">DevKit</h2>
          <a href="https://github.com/devsiders/devkit"
            className="text-white hover:bg-white/20 p-2 transition-all duration-200 rounded"
            target='_blank'
            rel="noopener noreferrer"

          >
            <Github className="w-5 h-5" />
          </a>
        </div>
      </div>
      
      <div className="relative container mx-auto px-6 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Descubre la galaxia completa de recursos para desarrolladores. 
            Librerías, UI y iconos organizados en un solo lugar.
          </p>
        </div>
      </div>
      
      <div className="absolute top-10 left-10 w-2 h-2 bg-white/40 rounded-full animate-pulse"></div>
      <div className="absolute top-1/4 right-20 w-3 h-3 bg-yellow-300/60 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-20 left-1/4 w-1 h-1 bg-blue-300/60 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/3 left-1/3 w-2 h-2 bg-purple-300/40 rounded-full animate-pulse" style={{animationDelay: '3s'}}></div>
    </header>
  );
};

export default Header;
