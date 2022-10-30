import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './../anime.css'
import AnimeCard from './AnimeCard';


function Anime() {
    const [searchText, SetSearchText] = useState("");
    const [animeList, SetAnimeList] = useState({});

    function searchResult(event) {
        let APIstring = "https://api.jikan.moe/v4/anime?q=" + searchText + "&sfw";

        axios.get(APIstring).then(function (response) {
            console.log(response.data);
            SetAnimeList(response.data);
        }).catch(function (error) {
            console.log(error);
         });
    }

    function Filter() {
        return (
          <div className='Filter'>
                <form>
                    <button className='Rating-button'>Rating</button>
                </form>
            </div>
        )
    }
    function SearchAnime() {
        return (
            <div className='SearchAnime'>
                <input className='InputBar' type='text' placeholder='Search Anime' onChange={e => SetSearchText(e.target.value)}></input>
                <button className='SearcButton' onClick={e => searchResult(e)}>Search</button>
            </div>
        )
    }
    
    useEffect(() => { console.log("animeList", animeList) }, [animeList]);
    
    return (
        <><div className='Header'>Welcome to the Anime world</div>
        <div className='Main'>
            <div className='Sidebar'>
                <SearchAnime/>
                <Filter/>
            </div>
            <div className='Animes'>
            {!animeList.hasOwnProperty('data') ? <div>No Search Found </div> :
                animeList.data.map(anime => (
                    <AnimeCard
                        anime={anime}
                        key={anime.mal_id}/>
                ))}
            </div>
        </div></>
    );
}

export default Anime;
// search bar
// filter => min_score, rating
// release date

