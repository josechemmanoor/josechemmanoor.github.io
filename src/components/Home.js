import React, { useState, useEffect } from "react";
import "../styles/Home.css";

const roles = ["Student", "UI/UX Designer", "Full-Stack Web Developer"];

function Home() {
  const [currentRole, setCurrentRole] = useState(roles[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole(roles[Math.floor(Math.random() * roles.length)]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home">
      <p className="small-text">Hey there, I'm</p>
      <h1 className="big-text">Jose Chemmanoor</h1>
      <p className="dynamic-text">{currentRole}</p>
      <div className="box">
        <a href="#about" className="box-text">Get to Know Me</a>
      </div>
    </div>
  );
}

export default Home;
