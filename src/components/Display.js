import React from 'react';
import Movie from './Movie';
import Loading from '../loading.gif';

const display = props => {
	let moviesList = props.movies.map(movie => {
		// console.log(movie)
		if(movie.poster_path){
			return(
				<Movie 
					key={movie.id} 
					poster={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} 
					title={movie.original_title}
					rating={movie.vote_average}
					description={movie.overview}
					release={movie.release_date}
				/>
			);
		}
		return null;
		
	})
	
	return(
		<div>
			<p class="display-title">{props.searched ? `Search for '${props.keyword}'` : 'Top Rated'}</p>
			<div className="main mx-4">
			{!props.loading ? moviesList : <img className="loading" src={Loading} alt=""/>}
		</div>
		</div>
		
	);
}
export default display;