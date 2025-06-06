
import { Github, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="relative overflow-hidden galaxy-bg text-white">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative container mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm animate-float">
                <Star className="w-10 h-10 text-yellow-300 animate-glow" fill="currentColor" />
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            Dev Kit Galaxy
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Descubre la galaxia completa de recursos para desarrolladores. 
            Librerías, iconos y fuentes organizados en un solo lugar.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30 transition-all duration-300 hover:scale-105"
              onClick={() => window.open('https://github.com', '_blank')}
            >
              <Github className="w-5 h-5 mr-2" />
              Contribuir en GitHub
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-2 h-2 bg-white/40 rounded-full animate-pulse"></div>
      <div className="absolute top-1/4 right-20 w-3 h-3 bg-yellow-300/60 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-20 left-1/4 w-1 h-1 bg-blue-300/60 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/3 left-1/3 w-2 h-2 bg-purple-300/40 rounded-full animate-pulse" style={{animationDelay: '3s'}}></div>
    </header>
  );
};

export default Header;
