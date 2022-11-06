import React from "react";
import "./AnimeCard.css";
function AnimeCard({ anime }) {
  return (
    <div className="card-container">
      <div className="card-title">{anime.title}</div>
      <div className="card-info"> Oct 12, 2022 | 12 eps, 24 min </div>
      <div className="card-genre">
        <ul>
          <li>Action</li>
          <li>Supernatural</li>
        </ul>
      </div>
      <div className="card-main">
        <div className="card-main-img">
          <img src={anime.images.jpg.image_url} />
        </div>
        <div className="card-main-description">
          Denji is robbed of a normal teenage life, left with nothing but his
          deadbeat father's overwhelming debt. His only companion is his pet,
          the chainsaw devil Pochita, with whom he slays devils for money that
          inevitably ends up in the yakuza's pockets.
        </div>
      </div>
      <div className="card-misc">
        <ul>
          <li>8.90</li>
          <li>786K</li>
          <li>
            <button>Add to List</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AnimeCard;

// old code

// function AnimeCard({ anime }) {
//   return (
//     <article className="anime-card">
//       <a href={anime.url} target="_blank" rel="noreferrer">
//         <figure>
//           <img src={anime.images.jpg.image_url} alt="Anime Image" />
//         </figure>
//         <h3>{anime.title}</h3>
//       </a>
//     </article>
//   );
// }

// export default AnimeCard;
