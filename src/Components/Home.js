import React, { useState, useEffect } from 'react'
// load the API
import API from '../API'
// load config
import { POST_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL} from '../config'
// load components

// hooks

// load images
import NoImage from '../images/no_image.png'

const Home = () => {
    const [state ,setState] = useState();
    const [loading, setLoading] = useState(false);
    const [error,setError] = useState(false);

    const fetchMovies = async (page,searchTerm = "") => {
        try 
        {
            setError(false);
            setLoading(true);

            const movies = await API.fetchMovies(searchTerm,page);

            setState(prev => ({ // triple dots ... means spread in js
                ...movies,
                results:
                    // not never mutate the state in react
                    // if the page is greater than one append the old movies(...prev) with the new movies(...movies) 
                    page > 1 ? [...prev.results,...movies.results] : [...movies.results]
            }));
        }catch(error){ setError(true); }

        setLoading(false);
    }

    useEffect(()=>{
        fetchMovies(1);
    },[]); // the comma with [] is called dependency array for useEffect to know when to trigger

    console.log(state);
    return <div>Home</div>
};

export default Home;