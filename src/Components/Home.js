import React from 'react'
// load the API
import API from '../API'
// load config
import { POST_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL, POSTER_SIZE} from '../config'
// load components
import HeroImage from './HeroImage'
import Grid from './Grid'
import Thumb from './Thumb'
import Spinner from './Spinner'
import SearchBar from './SearchBar'
import Footer from './Footer'
// hook
import { useHomeFetch } from '../hooks/useHomeFetch'

// load images
import NoImage from '../images/no_image.png'

const Home = () => {
    const {state,loading,error,setSearchTerm} = useHomeFetch();
    console.log(state);
    return (
        <>
            {state.results[0] ? 
                <HeroImage 
                    image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`} 
                    title={state.results[0].original_title}
                    text={state.results[0].overview}
                /> 
                : null
            }
            <SearchBar setSearchTerm={setSearchTerm}/>
            <Grid header='Popular Movies'>
                {state.results.map(movie => (
                    <Thumb 
                        key={movie.id}
                        clickable
                        image={
                            movie.poster_path ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                            : NoImage
                        }
                        imageId = {movie.id}
                    />
                ))}
            </Grid>
            <Spinner/>
            <Footer/>
        </>
    );
};

export default Home;