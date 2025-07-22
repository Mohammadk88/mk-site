'use client';

import ProjectsHero from '@/components/sections/ProjectsHero';
import ProjectsGrid from '@/components/sections/ProjectsGrid';
import ProjectsFilter from '@/components/sections/ProjectsFilter';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import type { Project } from '@prisma/client';

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [projectCounts, setProjectCounts] = useState<{ [key: string]: number }>({});
  const params = useParams();
  const locale = params.locale as string;

  useEffect(() => {
    // Fetch projects from API
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/projects');
        if (response.ok) {
          const data = await response.json();
          setProjects(data);
          setFilteredProjects(data);
          
          // Calculate project counts by category
          const counts: { [key: string]: number } = { all: data.length };
          data.forEach((project: Project) => {
            counts[project.category] = (counts[project.category] || 0) + 1;
          });
          setProjectCounts(counts);
        }
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  const handleCategoryChange = (category: string) => {
    if (category === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === category));
    }
  };

  const handleSearchChange = (search: string) => {
    const searchTerm = search.toLowerCase();
    const filtered = projects.filter(project => {
      // Search in title, description based on locale
      const title = locale === 'ar' ? project.titleAr : 
                   locale === 'tr' ? project.titleTr : 
                   project.titleEn;
      
      const description = locale === 'ar' ? project.descriptionAr : 
                         locale === 'tr' ? project.descriptionTr : 
                         project.descriptionEn;
      
      return title.toLowerCase().includes(searchTerm) ||
             description.toLowerCase().includes(searchTerm) ||
             JSON.parse(project.technologies || '[]').some((tech: string) => 
               tech.toLowerCase().includes(searchTerm)
             );
    });
    
    setFilteredProjects(filtered);
  };

  return (
    <div className="min-h-screen">
      <ProjectsHero />
      <ProjectsFilter 
        onCategoryChange={handleCategoryChange}
        onSearchChange={handleSearchChange}
        projectCounts={projectCounts}
      />
      <ProjectsGrid projects={filteredProjects} locale={locale} />
    </div>
  );
}
