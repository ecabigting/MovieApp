import react from "react";
import { useParams } from "react-router";
// config
import {IMAGE_BASE_URL, POSTER_SIZE } from '../config'
// components
import Grid from './Grid'
import Spinner from './Spinner'
import BreadCrumb from './BreadCrumb'
// hook
import { useMovieFetch } from '../hooks/useMovieFetch'
// image
import NoImage from '../images/no_image.png'

const Movie = () => {
    const { movieId } = useParams();
    const { state:movie, loading, error } = useMovieFetch(movieId)
    if(loading) return <Spinner/>
    if(error) return <div>Ooops.. Something went wrong!</div>
    return (
        <>
            <BreadCrumb movieTitle={movie.original_title} />
        </>
    );
}

export default Movie;