import React from "react";

const Contact: React.FC = () => (
  <section id="contact" className="contact">
    <h2>Contact Me</h2>
    <div className="icon-links">
      <a id="gh-link" href="https://github.com/WellNotWell">
        <i className="bx bxl-github"></i>
      </a>
      <a id="tg-link" href="https://t.me/WellNotWell">
        <i className="bx bxl-telegram"></i>
      </a>
      <a id="email" href="mailto:Olgredyushko@mail.ru">
        <i className="bx bx-envelope"></i>
      </a>
    </div>
  </section>
);

export default Contact;
