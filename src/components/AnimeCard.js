import React from "react";
import "./AnimeCard.css";
import axios from "axios";

function getMonthName(monthNumber) {
  const date = new Date();
  date.setMonth(monthNumber - 1);

  return date.toLocaleString('en-US', { month: 'long' });
}

function AnimeCard({ anime }) {
  const genres = anime.genres;
  const listGenres = genres.map((e) =>
    <li className="genre"><a href={e.url}>{e.name}</a></li>
  );
  const scoredBy = Math.floor(anime.scored_by/1000) + "K";
  const demoes = anime.demographics.map((e) => 
        <a href={e.url} id="card-misc-detail">{e.name}</a>
  );
  const themes = anime.themes.map((e) =>
        <a href={e.url} id="card-misc-detail">{e.name} </a>
  );
  const studios = anime.studios.map((e) =>
        <a href={e.url} id="card-misc-detail">{e.name} </a>
  )

  // );
  return (
    <div className="card-container">
      <div className="card-title"><a href={anime.url}>{anime.title}</a></div>
      <div className="card-info">{getMonthName(anime.aired.prop.from.month)} {anime.aired.prop.from.day}, {anime.aired.prop.from.year} | {anime.episodes} eps, {anime.duration} </div>
      <div className="card-genre">
        <ul>
          {listGenres}
          {/* <li>Action</li>
          <li>Supernatural</li> */}
        </ul>
      </div>
      <div className="card-main">
        <div className="card-main-img">
          <img src={anime.images.jpg.image_url} alt="" />
        </div>
        <div className="card-main-information">
          <p className="card-main-description">{anime.synopsis}</p>
          <ul className="card-main-detail">
            <li>Studio: {studios}</li>
            <li>Source: <p id="card-misc-source">{anime.source}</p></li>
            <li>Theme: {themes}</li>
            <li>Demographic: {demoes}</li>
          </ul>
        </div>
      </div>
      <div className="card-misc">
        <div className="card-misc-container">
          <div className="card-misc-information">
            <div className="card-misc-info"> <i className="fa-regular fa-star fa-sm"></i>{((!anime.score) ? "N/A" : anime.score)}</div>
            <div className="card-misc-info"> <i className="fa-solid fa-user fa-sm"></i>{((!anime.scored_by) ? "N/A" : scoredBy)}</div>
          </div>
        </div>
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
