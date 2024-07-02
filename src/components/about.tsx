import React from 'react';
import profileGif from '../img/profile_gif.gif';


const About: React.FC = () => (
  <section id="about" className="home">
    <div className="home-content">
      <h1>Hi, I'm Olesia Grediushko</h1>
      <h3>Backend Developer</h3>
      <div className="tech-stack">
        <p><strong>Stack:</strong> Python, Java, C/C++, SQL, PostgreSQL</p>
      </div>
      <p>Welcome to my portfolio! I'm a software developer who enjoys creating innovative and efficient solutions. Feel free to explore my projects and get in touch!</p>
    </div>
    <div className="home-gif">
      <img src={profileGif} alt="Olesia Grediushko" />
    </div>
  </section>
);

export default About;
