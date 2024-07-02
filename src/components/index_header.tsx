import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const HeaderIndex: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>('about');

  const handleNavLinkClick = (id: string) => {
    setActiveLink(id);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.clientHeight;

      document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          const sectionId = section.getAttribute('id');
          if (sectionId) {
            setActiveLink(sectionId);
          }
        }
      });

      if (scrollPosition + windowHeight >= documentHeight) {
        setActiveLink('contact');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="header">
      <h1 className="name">Olesia Grediushko</h1>
      <nav className="navbar">
        <Link to="/#about" className={activeLink === 'about' ? 'active' : ''} onClick={() => handleNavLinkClick('about')}>About Me</Link>
        <Link to="/#education" className={activeLink === 'education' ? 'active' : ''} onClick={() => handleNavLinkClick('education')}>Education</Link>
        <Link to="/#portfolio" className={activeLink === 'portfolio' ? 'active' : ''} onClick={() => handleNavLinkClick('portfolio')}>Portfolio</Link>
        <Link to="/#contact" className={activeLink === 'contact' ? 'active' : ''} onClick={() => handleNavLinkClick('contact')}>Contact Me</Link>
        <Link to="/comic" className="comic">Comic</Link>
      </nav>
    </header>
  );
};

export default HeaderIndex;
