import React from 'react';

const Education: React.FC = () => (
  <section id="education" className="education">
    <h2>Education</h2>
    <div className="education-column">
      <h3>Innopolis University</h3>
      <p>Informatics and Computer Science</p>
      <p className="year">2022-2024 (2nd Bachelor's course)</p>
    </div>
    <div className="education-column">
      <h3>University of Talents</h3>
      <p>November 2021 specialized program in computer science “Laboratory of VR/AR/MR (Virtual, Augmented and Mixed Reality)”</p>
      <p>(certificate with honors received: 92/100 points)</p>
      <p className="year">2021</p>
    </div>
  </section>
);

export default Education;
