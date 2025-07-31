'use client';

import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { useState } from 'react';
import ProjectImage from '@/components/ui/ProjectImage';

interface Project {
  id: string;
  titleEn: string;
  titleAr: string;
  titleTr: string;
  descriptionEn: string;
  descriptionAr: string;
  descriptionTr: string;
  image: string;
  demoUrl: string;
  githubUrl: string;
  technologies: string;
  category: string;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
}

interface ProjectsGridProps {
  projects: Project[];
  locale: string;
}

export default function ProjectsGrid({ projects, locale }: ProjectsGridProps) {
  // Get localized content for project
  const getProjectTitle = (project: Project) => {
    switch (locale) {
      case 'ar': return project.titleAr;
      case 'tr': return project.titleTr;
      default: return project.titleEn;
    }
  };

  const getProjectDescription = (project: Project) => {
    switch (locale) {
      case 'ar': return project.descriptionAr;
      case 'tr': return project.descriptionTr;
      default: return project.descriptionEn;
    }
  };

  const getCategoryLabel = (category: string) => {
    const categoryLabels: Record<string, Record<string, string>> = {
      all: { en: 'All', ar: 'الكل', tr: 'Tümü' },
      web: { en: 'Web', ar: 'ويب', tr: 'Web' },
      mobile: { en: 'Mobile', ar: 'موبايل', tr: 'Mobil' },
      ai: { en: 'AI/ML', ar: 'ذكاء اصطناعي', tr: 'AI/ML' },
      erp: { en: 'ERP', ar: 'إدارة الموارد', tr: 'ERP' },
      crm: { en: 'CRM', ar: 'إدارة العملاء', tr: 'CRM' },
      ecommerce: { en: 'E-commerce', ar: 'تجارة إلكترونية', tr: 'E-ticaret' },
      restaurant: { en: 'Restaurant', ar: 'مطعم', tr: 'Restoran' },
      saas: { en: 'SaaS', ar: 'خدمات البرمجيات', tr: 'SaaS' },
      startup: { en: 'Startup', ar: 'شركة ناشئة', tr: 'Startup' },
    };
    return categoryLabels[category]?.[locale] || category;
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Project Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <ProjectImage
                  src={project.image || ''}
                  alt={getProjectTitle(project)}
                  category={project.category}
                  className="group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary-600/90 dark:text-white text-xs font-medium backdrop-blur-sm">
                    {getCategoryLabel(project.category)}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(project.createdAt).getFullYear()}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {getProjectTitle(project)}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {getProjectDescription(project).substring(0, 150)}...
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {JSON.parse(project.technologies).slice(0, 4).map((tech: string, techIndex: number) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 text-xs rounded-md font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {JSON.parse(project.technologies).length > 4 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-md">
                      +{JSON.parse(project.technologies).length - 4}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {projects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              {locale === 'ar' ? 'لا توجد مشاريع' : 
               locale === 'tr' ? 'Proje bulunamadı' : 
               'No projects found'}
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
