import React from "react";
import "./AnimeCard.css";
function AnimeCard({ anime }) {
  const genres = anime.genres;
  const listGenres = genres.map((e) =>
    <li className="genre">{e.name}</li>
  );
  const scoredBy = anime.scored_by/1000
  return (
    <div className="card-container">
      <div className="card-title">{anime.title}</div>
      <div className="card-info"> {anime.aired.prop.from.day}/{anime.aired.prop.from.month}/{anime.aired.prop.from.year} | {anime.episodes} eps, {anime.duration} </div>
      <div className="card-genre">
        <ul>
          {listGenres}
          {/* <li>Action</li>
          <li>Supernatural</li> */}
        </ul>
      </div>
      <div className="card-main">
        <div className="card-main-img">
          <img src={anime.images.jpg.image_url} />
        </div>
        <div className="card-main-description">
          {anime.synopsis}
        </div>
      </div>
      <div className="card-misc">
        {/* <ul>
          <li>Rating {anime.score}</li>
          <li>Scored {scoredBy}K</li>
          <li>
            <a>Add to List</a>
          </li>
        </ul> */}
        <div className="card-misc-container">
          <div className="card-misc-information">
            <div className="card-misc-info">Rating {anime.score}</div>
            <div className="card-misc-info">Scored {scoredBy}K</div>
          </div>
        </div>
        <div className="card-misc-button"><a className="card-misc-a">Add to List</a></div>
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
