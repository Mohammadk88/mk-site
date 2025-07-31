'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, Search } from 'lucide-react';
import { useTranslations } from 'next-intl';

interface ProjectsFilterProps {
  onCategoryChange: (category: string) => void;
  onSearchChange: (search: string) => void;
  projectCounts?: { [key: string]: number };
}

export default function ProjectsFilter({ 
  onCategoryChange, 
  onSearchChange, 
  projectCounts = {} 
}: ProjectsFilterProps) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const t = useTranslations('projects.categories');

  const categories = [
    { id: 'all' },
    { id: 'web' },
    { id: 'mobile' },
    { id: 'ai' },
    { id: 'erp' },
    { id: 'crm' },
    { id: 'ecommerce' },
    { id: 'restaurant' },
    { id: 'saas' },
    { id: 'startup' }
  ];

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    onCategoryChange(categoryId);
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    onSearchChange(value);
  };

  return (
    <section className="py-8 bg-gray-50 dark:bg-slate-900 border-b border-gray-200 dark:border-slate-700">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
          {/* Search */}
         {/*  <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="relative flex-1 max-w-md"
          >
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="البحث في المشاريع..."
              value={searchTerm}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
            />
          </motion.div> */}

          {/* Category Filters */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex items-center gap-2"
          >
            <Filter className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            <div className="flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <motion.button
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-primary text-black border dark:text-white dark: shadow-lg'
                      : 'bg-white dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:bg-primary/10 border border-gray-200 dark:border-slate-600'
                  }`}
                >
                  {t(category.id)}
                  {projectCounts[category.id] && (
                    <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                      activeCategory === category.id
                        ? 'bg-black/20 text-black dark:bg-white/10 dark:text-white'
                        : 'bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-gray-400'
                    }`}>
                      {projectCounts[category.id]}
                    </span>
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Active Filters Display */}
        {(activeCategory !== 'all' || searchTerm) && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.3 }}
            className="mt-6 flex flex-wrap gap-2 items-center"
          >
            <span className="text-sm text-gray-500 dark:text-gray-400">المرشحات النشطة:</span>
            {activeCategory !== 'all' && (
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm flex items-center gap-2">
                {t(activeCategory)}
                <button
                  onClick={() => handleCategoryChange('all')}
                  className="hover:bg-primary/20 rounded-full p-0.5"
                >
                  ×
                </button>
              </span>
            )}
            {searchTerm && (
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm flex items-center gap-2">
                &quot;{searchTerm}&quot;
                <button
                  onClick={() => handleSearchChange('')}
                  className="hover:bg-secondary/20 rounded-full p-0.5"
                >
                  ×
                </button>
              </span>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
}
