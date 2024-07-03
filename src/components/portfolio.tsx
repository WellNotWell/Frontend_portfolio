import React from 'react';

const Portfolio: React.FC = () => (
  <section id="portfolio" className="portfolio">
    <h2>Portfolio</h2>
    <p><strong>Group Projects (contributor: WellNotWell):</strong></p>
    <ul>
      <li className="project">
        <time>2024</time>
        <a href="https://github.com/Angelika2707/Business-telegram-bot-for-balconies">Business Telegram bot</a>
        <p>Stack: Python, aiogram v3</p>
        <p className="description">Telegram bot developed to order to improve the quality of interaction with business partners and clients.</p>
      </li>
      <li className="project">
        <time>2023</time>
        <a href="https://github.com/Angelika2707/Mafia-Bot">Mafia-bot</a>
        <p>Stack: Python, aiogram v2</p>
        <p className="description">Telegram bot for group chats that plays the role of a host in the popular game &quot;Mafia&quot;.</p>
      </li>
    </ul>
  </section>
);

export default Portfolio;
