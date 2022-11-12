import React from 'react'
import AnimeCard from './AnimeCard';

function MainContent(props) {
	return (
		<main>
			<div className="main-head">
				<form 
					className="search-box"
					onSubmit={props.HandleSearch}>
					<input 
						className='searchbar'
						type="search"
						placeholder="Search for an anime..."
						required
						value={props.search}
						onChange={e => props.SetSearch(e.target.value)}/>
				</form>
			</div>
			<div className="anime-list">
				{!props.animeList.hasOwnProperty('data') ? <div>Search for an anime...</div> :
					props.animeList.data.map(anime => (
						<AnimeCard
								anime={anime}
								key={anime.mal_id} />
						))
					}
			</div>
		</main>
	)
}

export default MainContent
