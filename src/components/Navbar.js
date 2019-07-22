import React from 'react';


const navbar = props => {
	return(
		 <div className="navigation">
		 	<nav className="mb-4 navbar navbar-expand-lg navbar-dark  fixed-top">
  				<a className="navbar-brand" href="/"><img src="https://pbs.twimg.com/profile_images/789117657714831361/zGfknUu8.jpg" height="55" alt=""/></a>
  				<form className="form-inline" onSubmit={props.submitted}>
					<input 
						className="form-control mr-sm-2" 
						type="search" 
						placeholder="Search" 
						aria-label="Search"
						onChange={props.changed}
						/>
					<button className="btn-search btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
				</form>
			</nav>
		 </div>
		);
}
export default navbar;