import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './HomePage';
import Projects from './Projects';
import AboutMe from './AboutMe';


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<AboutMe />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
};

export default AppRoutes;
