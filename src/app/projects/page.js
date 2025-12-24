export default function Projects() {
  const projects = [
    {
      title: 'Graphic Design',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: '/project1.jpg',
      link: '#',
    },
    {
      title: 'Programs',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: '/project2.jpg',
      link: '#',
    },
  ];

  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-12 text-center">My Projects</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-dark rounded-lg overflow-hidden hover:transform hover:scale-105 transition duration-300"
          >
            <div className="h-48 bg-gray-700 flex items-center justify-center">
              <span className="text-gray-500">Image</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{project.description}</p>
              <a
                href={project.link}
                className="text-blue-400 hover:text-blue-300 text-sm"
              >
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}