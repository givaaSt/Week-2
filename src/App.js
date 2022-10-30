import useState from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import axios from 'axios'

function App() {
	const [animeList, SetAnimeList] = useState({});
	const [searchText, SetSearch] = useState("");
	const HandleSearch = e => {
		e.preventDefault();

		searchResult(searchText);
	}

	function searchResult(event) {
        let APIstring = `https://api.jikan.moe/v4/anime?q=${searchText}&sfw`;

        axios.get(APIstring).then(function (response) {
            console.log(response.data);
            SetAnimeList(response.data);
        }).catch(function (error) {
            console.log(error);
         });
    }

	return (
		<div className="App">
			<Header />
			<div className="content-wrap">
				<MainContent
					HandleSearch={HandleSearch}
					search={searchText}
					SetSearch={SetSearch}
					animeList={animeList} />
			</div>
		</div>
	);
}

export default App;
