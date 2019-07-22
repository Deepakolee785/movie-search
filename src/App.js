import React,{useState, useEffect} from 'react';
import axios from 'axios';

import './App.css';
import Navbar from './components/Navbar';
import Display from './components/Display';


function App() {
  const [keyword, setkeyword] = useState('');
  const [movies,setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searched, hasSearched] = useState(false);

  useEffect(() => {
    setLoading(true)
    axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=161cc88d2fb0d56af2699463fd4220e6&language=en-US`)
      .then(result => {
        setMovies(result.data.results)
        setLoading(false)
      })
  },[])


  const handleSumbit = e => {
    e.preventDefault();
    hasSearched(true)
    setLoading(true)
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=161cc88d2fb0d56af2699463fd4220e6&query=${keyword}`)
      .then(res => {
        setMovies(res.data.results)
        setLoading(false)
      })
  }
  
  const handleChange = e => {
    setkeyword(e.target.value)
  }

  return (
    <div className="app">
      <Navbar 
        changed={handleChange}
        submitted={handleSumbit}
      />
      <Display 
        movies={movies} 
        loading={loading}
        searched={searched}
        keyword={keyword}
        />
    </div>
  );
}

export default App;
