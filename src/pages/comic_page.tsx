import React from 'react';
import HeaderComic from '../components/comic_header';
import Comic from '../components/comic';
import '../css/header_style.css';
import '../css/comic_style.css';


const ComicPage: React.FC = () => {
  const email = "o.grediushko@innopolis.university";

  return (
    <div>
      <HeaderComic />
      <main className="comic-container">
        <Comic email={email} />
      </main>
    </div>
  );
};

export default ComicPage;
