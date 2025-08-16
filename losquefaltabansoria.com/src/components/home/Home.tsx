import React from "react";
import "./home.css";
import lqfLogo from "../../assets/lqf-logo.512.png";

const Home: React.FC = () => {
  return (
    <main>
      <img
        src={lqfLogo}
        alt="Los Que Faltaban Soria"
        title="Los Que Faltaban Soria"
        className="main-image"
      />
    </main>
  );
};

export default Home;
