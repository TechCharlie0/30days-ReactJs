import React from 'react';

function Projects() {
  const projects = [
    { title: 'E-commerce Website', description: 'A responsive shopping platform.' },
    { title: 'Portfolio Website', description: 'Showcase of my work and skills.' },
    { title: 'Blog Application', description: 'A dynamic and interactive blog site.' },
  ];

  return (
    <section id="projects" className="py-16 bg-white">
      <h2 className="text-4xl font-bold text-center mb-8">My Projects</h2>
      <div className="max-w-6xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-6 border rounded-lg shadow-lg hover:shadow-xl transition"
          >
            <h3 className="text-2xl font-bold">{project.title}</h3>
            <p className="mt-2">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
