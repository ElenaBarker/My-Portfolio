import React from 'react';
import dejaReviewImg from '../dejaReviewImg.jpg';
import farmAppImg from '../farmAppImg.jpg';

const Projects = () => {
  const projects = [
    {
      name: 'Deja Review (team project)',
      description: (
        <>
          <p>
            This web application implements a spaced repetition algorithm to help users schedule review sessions for topics learned in CodeYourFuture modules. Users can select existing topics from a list of modules and topics or create new custom topics. Each user has a personal dashboard displaying all of their topics needing review. Topics are shown in order of their next scheduled review date.
          </p>
          <p>
            When the user clicks "reviewed" on a topic, the date gets updated based on the spaced repetition schedule. The topic then moves to the bottom of the list. Once a topic has gone through the full spaced repetition cycle, it is removed from the user's dashboard, keeping the focus on topics needing review soon.
          </p>
          <p className="font-bold">Key Features:</p>
          <ul className="list-disc pl-4">
            <li>Select topics from predefined lists or create new custom topics.</li>
            <li>Personal dashboard showing upcoming review topics.</li>
            <li>Reviewed button updates next review date per spaced repetition schedule.</li>
            <li>Topic gets removed after the full repetition cycle is complete.</li>
          </ul>
        </>
      ),
      toolsUsed: 'Auth0, React, Node.js, Supabase, Tailwind CSS',
      githubLink: 'https://github.com/Abubakar-Meigag/FinalProject-DejaReview-teamUnity-Ldn10',
      demoLink: 'https://fp-deja-review-frontend.onrender.com/',
      imageSrc: dejaReviewImg,
    },
    {
      name: 'City Farm Volunteers Booking Calendar (individual project)',
      description: (
        <>
          <p>This web application enables volunteers at a city farm to sign up for open volunteer sessions on a shared calendar. Volunteers can claim available slots, cancel bookings, and view their upcoming sessions. Managers can see if any sessions lack a signed-up volunteer.</p>
          <p>The goal is to ensure consistent daily volunteer coverage for the morning and evening sessions, with an easy way for volunteers to book and manage their schedule.</p>
          <p className="font-bold">Key Features:</p>
          <ul className="list-disc pl-4">
            <li>Calendar view of available morning and evening slots.</li>
            <li>Volunteers can view, book, and cancel sessions.</li>
            <li>Managers can see unfilled sessions that need coverage.</li>
            <li>Volunteers have personalised dashboard of upcoming sessions.</li>
          </ul>
        </>
      ),
      toolsUsed: 'React, Node.js, PosgreSQL, MaterialUI',
      githubLink: 'https://github.com/ElenaBarker/City-Farm-Volunteers-Booking-Calendar-1',
      demoLink: 'https://pathway-city-farm-project-react.onrender.com/',
      imageSrc: farmAppImg,
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


