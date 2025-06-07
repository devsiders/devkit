import { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import Header from './Header';
import CategoryFilter from './CategoryFilter';
import DevKitCard from './DevKitCard';
import { devKits } from '@/data/devKits';

const DevKitGalaxy = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredKits = useMemo(() => {
    let filtered = devKits;

    if (activeCategory !== 'all') {
      filtered = filtered.filter(kit => kit.category === activeCategory);
    }

    if (searchTerm) {
      filtered = filtered.filter(kit =>
        kit.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        kit.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        kit.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    return filtered;
  }, [activeCategory, searchTerm]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Header />
      
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Buscar kits, librerías, iconos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-3 rounded-full border-2 border-gray-200 focus:border-purple-400 transition-colors"
            />
          </div>
        </div>

        <CategoryFilter 
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <div className="text-center mb-8">
          <p className="text-gray-600">
            {filteredKits.length} recursos encontrados
            {activeCategory !== 'all' && (
              <span className="ml-1">
                en {activeCategory === 'libraries' ? 'Librerías' : activeCategory === 'icons' ? 'Iconos' : 'Fuentes'}
              </span>
            )}
          </p>
        </div>

        {filteredKits.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredKits.map((kit) => (
              <DevKitCard key={kit.id} kit={kit} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="max-w-md mx-auto">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No se encontraron resultados
              </h3>
              <p className="text-gray-600">
                Intenta con otros términos de búsqueda o cambia la categoría
              </p>
            </div>
          </div>
        )}
      </main>

      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            Hecho con ❤️ para la comunidad
          </p>
        </div>
      </footer>
    </div>
  );
};

export default DevKitGalaxy;
