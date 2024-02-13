import React from 'react';
import dejaReviewImg from '../dejaReviewImg.jpg';

const Projects = () => {
  const projects = [
    {
      name: 'Deja Review',
      description: 'Description...',
      toolsUsed: 'React, Tailwind CSS',
      githubLink: 'https://github.com/Abubakar-Meigag/FinalProject-DejaReview-teamUnity-Ldn10',
      demoLink: 'https://fp-deja-review-frontend.onrender.com/',
      imageSrc: dejaReviewImg,
    },
    {
      name: 'City Farm Volunteers Booking Calendar',
      description: 'Description...',
      toolsUsed: 'React, Tailwind CSS',
      githubLink: 'https://github.com/ElenaBarker/City-Farm-Volunteers-Booking-Calendar',
      demoLink: 'https://pathway-city-farm-project-react.onrender.com/',
      imageSrc: dejaReviewImg,
    },
  ];

  return (
    <div className="container mx-auto mt-8">
      {projects.map((project, index) => (
        <div
          key={index}
          className="flex items-center justify-center mb-8 p-4 border rounded bg-white shadow-md"
        >
          <div className="w-2/3 pr-4">
            <h1 className="text-4xl font-bold mb-4">{project.name}</h1>
            <p className="text-xl text-gray-700 mb-4">{project.description}</p>
            <p className="text-lg text-gray-600 mb-4">Tools Used: {project.toolsUsed}</p>
            <div className="flex mb-4">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline mr-4"
              >
                GitHub
              </a>
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Demo
              </a>
            </div>
          </div>
          <div className="w-1/3">
            <img src={project.imageSrc} alt={project.name} className="w-full h-auto rounded" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;


