import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = React.useState("about");

  const handleNavLinkClick = (
    id: string,
    event: React.MouseEvent<HTMLAnchorElement>,
  ) => {
    event.preventDefault();
    setActiveLink(id);

    const element = document.getElementById(id);

    if (element) {
      if (window.location.pathname === "/") {
        element.scrollIntoView();
      } else {
        navigate(`/#${id}`);
        setTimeout(() => {
          const newElement = document.getElementById(id);
          if (newElement) {
            newElement.scrollIntoView();
          }
        }, 0);
      }
    } else {
      navigate("/");
      setTimeout(() => {
        const newElement = document.getElementById(id);
        if (newElement) {
          newElement.scrollIntoView();
        }
      }, 0);
    }
  };

  React.useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      setActiveLink(id);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView();
      }
    }
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.clientHeight;

      document.querySelectorAll("section").forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          const sectionId = section.getAttribute("id");
          if (sectionId) {
            setActiveLink(sectionId);
          }
        }
      });

      if (location.pathname === "/comic") {
        setActiveLink("");
      }

      if (scrollPosition + windowHeight >= documentHeight * 1.075) {
        setActiveLink("contact");
      }

      const portfolioElement = document.getElementById("portfolio");
      if (portfolioElement) {
        const portfolioTop = portfolioElement.offsetTop;
        if (
          scrollPosition >= portfolioTop - windowHeight * 0.05 &&
          scrollPosition < portfolioTop
        ) {
          setActiveLink("portfolio");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleComicClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    if (location.pathname !== "/comic") {
      navigate("/comic");
    }
    window.scrollTo({ top: 0 });
    setActiveLink("");
  };

  return (
    <header className="header">
      <h1 className="name">Olesia Grediushko</h1>
      <nav className="navbar">
        <Link
          to="#about"
          className={
            location.pathname === "/" && activeLink === "about" ? "active" : ""
          }
          onClick={(e) => handleNavLinkClick("about", e)}
        >
          About Me
        </Link>
        <Link
          to="#education"
          className={
            location.pathname === "/" && activeLink === "education"
              ? "active"
              : ""
          }
          onClick={(e) => handleNavLinkClick("education", e)}
        >
          Education
        </Link>
        <Link
          to="#portfolio"
          className={
            location.pathname === "/" && activeLink === "portfolio"
              ? "active"
              : ""
          }
          onClick={(e) => handleNavLinkClick("portfolio", e)}
        >
          Portfolio
        </Link>
        <Link
          to="#contact"
          className={
            (location.pathname === "/" || location.pathname === "/comic") &&
            activeLink === "contact"
              ? "active"
              : ""
          }
          onClick={(e) => handleNavLinkClick("contact", e)}
        >
          Contact Me
        </Link>
        <Link to="/comic" className="comic" onClick={handleComicClick}>
          Comic
        </Link>
      </nav>
    </header>
  );
};

export default Header;
