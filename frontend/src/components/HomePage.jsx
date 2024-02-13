import React from 'react';
import myImage from '../myImage.jpg';

const HomePage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-left mr-10 font-serif">
        <h3 className="text-2xl font-bold mb-4">Hi, my name is </h3>
        <h1 className="text-4xl font-bold mb-4">Elena Barker</h1>
        <h2 className="text-3xl font-bold mb-4">and I am a Software Engineer based in London, UK</h2>
        <p className="text-xl mb-4">"All our dreams can come true, if we have the courage to pursue them." — Walt Disney</p>
      </div>

      <div>
        <img
          src={myImage}
          alt="Elena"
          className="rounded-full w-96 h-96 object-cover"
        />
      </div>
    </div>
  );
};

export default HomePage;


