'use client';
import ProjectCard from './project-card';
import { projectsData } from '../../../../utils/data/projects-data';

function AllProjects() {
  return (
    <div className="container mx-auto my-12">
      <h1 className="text-3xl font-bold text-center mb-8">Todos os Projetos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 lg:gap-8 xl:gap-10">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default AllProjects;