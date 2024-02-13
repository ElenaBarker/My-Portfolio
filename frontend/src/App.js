import React from "react";
import Header from "./components/Header";
import AppRoutes from "./components/AppRoutes";
import "tailwindcss/tailwind.css";
import backgroundImage from "./backgroundImg.jpg";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <div
        className="bg-cover bg-center bg-fixed min-h-screen"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <AppRoutes />
      </div>
      <Footer />
    </div>
  );
};

export default App;
