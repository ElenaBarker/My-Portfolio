import React from 'react';
import myImage from '../myImage.jpg';

const HomePage = () => {
  return (
    <div className="flex flex-col-reverse items-center justify-center md:flex-row md:items-center h-screen">
      <div className="text-center md:text-left md:mr-10 font-serif mb-4 md:mb-0">
        <h3 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4">Hi, my name is </h3>
        <h1 className="text-4xl md:text-6xl font-bold mb-2 md:mb-4">Elena Barker</h1>
        <h2 className="text-3xl md:text-4xl font-bold mb-2 md:mb-4">Software Engineer based in London, UK</h2>
        <p className="text-xl md:text-2xl mb-2 md:mb-4">"All our dreams can come true, if we have the courage to pursue them." — Walt Disney</p>
      </div>

      <div className="md:ml-10">
        <img
          src={myImage}
          alt="Elena"
          className="rounded-full w-48 h-48 md:w-96 md:h-96 object-cover mb-4 md:mb-0"
        />
      </div>
    </div>
  );
};

export default HomePage;



