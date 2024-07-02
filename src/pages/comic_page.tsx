import React from 'react';
import HeaderComic from '../components/comic_header';
import Comic from '../components/comic';
import '../css/comic_style.css';


const ComicPage: React.FC = () => (
  <div>
    <HeaderComic />
    <main className="comic-container">
      <Comic />
    </main>
  </div>
);

export default ComicPage;
