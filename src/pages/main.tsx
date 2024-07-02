import React from 'react';
import HeaderIndex from '../components/index_header';
import About from '../components/about';
import Education from '../components/education';
import Portfolio from '../components/portfolio';
import Contact from '../components/contact';
import '../css/style.css';

const Main: React.FC = () => (
  <div>
    <HeaderIndex />
    <main>
      <About />
      <Education />
      <Portfolio />
      <Contact />
    </main>
  </div>
);

export default Main;
