import React from "react";
import { useParams } from "react-router";
// config
import {IMAGE_BASE_URL, POSTER_SIZE } from '../config'
// components
import Grid from './Grid'
import Spinner from './Spinner'
import BreadCrumb from './BreadCrumb'
import MovieInfo from "./MovieInfo";
import MovieInfoBar from "./MovieInfoBar";
import Actor from "./Actor";
// hook
import { useMovieFetch } from '../hooks/useMovieFetch'
// image
import NoImage from '../images/no_image.png'

const Movie = () => {
    const { movieId } = useParams();
    const { state:movie, loading, error } = useMovieFetch(movieId)
    if(loading) return <Spinner/>
    if(error) return <div>Ooops.. Something went wrong!</div>
    console.log(movie)
    return (
        <>
            <BreadCrumb movieTitle={movie.title} />
            <MovieInfo movie={movie}/>
            <MovieInfoBar budget={movie.budget} revenue={movie.revenue} time={movie.runtime}/>
            <Grid header='Actors'>
                {
                    movie.actors.map(actor => (
                        <Actor key={actor.credit_id}
                        name={actor.name}
                        character={actor.character} 
                        imageUrl={
                            actor.profile_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                            : NoImage
                        }/>
                    ))
                }
            </Grid>
        </>
    );
}

export default Movie;