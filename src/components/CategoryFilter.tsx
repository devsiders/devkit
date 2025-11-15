import { Button } from '@/components/ui/button';
import { Boxes, Package, Palette, Type, Wrench, Blocks } from 'lucide-react';

interface CategoryFilterProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const categories = [
  { id: 'all', name: 'Todos', icon: Boxes },
  { id: 'libraries', name: 'Librerías', icon: Package },
  { id: 'icons', name: 'Iconos', icon: Palette },
  { id: 'fonts', name: 'Fuentes', icon: Type },
  { id: 'tools', name: 'Herramientas', icon: Wrench },
  { id: 'nocode', name: 'No-Code / Low-Code', icon: Blocks }
];

const CategoryFilter = ({ activeCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap gap-3 justify-center mb-12">
      {categories.map((category) => {
        const Icon = category.icon;
        return (
          <Button
            key={category.id}
            variant={activeCategory === category.id ? "default" : "outline"}
            className={`px-6 py-3 rounded-full transition-all duration-300 ${
              activeCategory === category.id 
                ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg transform scale-105' 
                : 'hover:scale-105 hover:shadow-md'
            }`}
            onClick={() => onCategoryChange(category.id)}
          >
            <Icon className="w-4 h-4 mr-2" />
            {category.name}
          </Button>
        );
      })}
    </div>
  );
};

export default CategoryFilter;
