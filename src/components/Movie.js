import React from 'react';
import './Movie.scss';

const Movie = props => {
	return(
		<div className="movie">
			<div className="card">   
				<div className="card-header">
					<img className="card-img" src={props.poster} alt="img"/>
				</div>  
				<div className="card-body">
					<h4 className="card-title">{props.title}</h4>
					<div className="container">
						<div className="row">
							<div className="col-4 metadata">
								<i className="fa fa-star" aria-hidden="true"></i> 
								<p>{props.rating}/10</p>
							</div>
							<div className="col-8 metadata">{props.release}</div>
						</div>
					</div>      
					<p className="card-text">{props.description}</p>
				</div>
			</div>
		</div>		
		)
}

export default Movie;
