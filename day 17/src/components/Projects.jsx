import React from 'react';

function Projects() {
  const projects = [
    { 
      title: 'Admin Dashboard', 
      description: 'A responsive admin dashboard with data visualization.',
      link: 'https://techcharlie0.github.io/Dashboard/' // Replace with your live link
    },
    { 
      title: 'ATM', 
      description: 'A simple ATM application',
      link: 'https://techcharlie0.github.io/ATM-Card/' // Replace with your live link
    },
    { 
      title: 'E-commerce Website', 
      description: 'A responsive shopping platform.',
      link: 'https://techcharlie0.github.io/Clothing-Brand/' // Replace with your live link
    },
    { 
      title: 'eSewa Website', 
      description: 'A payment gateway website',
      link: 'https://techcharlie0.github.io/esewa/' // Replace with your live link
    },
    { 
      title: 'DynoAcademy', 
      description: 'A website for online learning platform',
      link: 'https://techcharlie0.github.io/dynoAcademy/' // Replace with your live link
    },
    // Add more projects here as needed
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
            {/* Conditionally render a link if a live URL exists */}
            {project.link && (
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-4 inline-block text-blue-600 hover:underline"
              >
                View Live
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
