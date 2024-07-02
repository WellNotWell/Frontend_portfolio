import React, { useEffect, useState } from 'react';
import { formatDistanceToNowStrict } from 'date-fns';
import { Comic } from '../interfaces/comic';

const ComicComponent: React.FC = () => {
  const [comic, setComic] = useState<Comic | null>(null);

  useEffect(() => {
    const email = "o.grediushko@innopolis.university";
    const apiUrl = `https://fwd.innopolis.university/api/hw2?email=${email}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then((data: number) => {
        const comicId = data;
        return fetch(`https://fwd.innopolis.university/api/comic?id=${comicId}`);
      })
      .then(response => response.json())
      .then((comic: Comic) => {
        setComic(comic);
      });
  }, []);

  if (!comic) {
    return <div>Loading...</div>;
  }

  const date = new Date(comic.year, comic.month - 1, comic.day);
  const formattedDate = formatDistanceToNowStrict(date, { addSuffix: true });

  return (
    <div id="comic" className="comic">
      <h2 id="comic-title">{comic.safe_title}</h2>
      <img id="image" src={comic.img} alt={comic.alt} />
      <p id="date">{formattedDate}</p>
    </div>
  );
};

export default ComicComponent;
