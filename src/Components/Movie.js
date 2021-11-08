import React, { Component } from 'react';
import { useParams } from 'react-router';
import API from '../API';
// config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';
// components
import Grid from './Grid';
import Spinner from './Spinner';
import BreadCrumb from './BreadCrumb';
import MovieInfo from './MovieInfo';
import MovieInfoBar from './MovieInfoBar';
import Actor from './Actor';
// image
import NoImage from '../images/no_image.png';

class Movie extends Component {
  state = {
    movie: {},
    loading: true,
    error: false,
  };

  fetchMovieData = async () => {
    const { movieId } = this.props.params;

    try {
      this.setState({ error: false, loading: true });
      const movie = await API.fetchMovie(movieId);
      const credits = await API.fetchCredits(movieId);
      // get directors only
      const directors = credits.crew.filter((member) => member.job === 'Director');

      this.setState({
        movie: {
          ...movie,
          actors: credits.cast,
          directors: directors,
        },
        loading: false,
      });
    } catch (error) {
      this.setState({ error: true, loading: false });
    }
  };

  componentDidMount() {
    this.fetchMovieData();
  }

  render() {
    const { movie, loading, error } = this.state;
    if (loading) return <Spinner />;
    if (error) return <div>Ooops.. Something went wrong!</div>;
    return (
      <>
        <BreadCrumb movieTitle={movie.title} />
        <MovieInfo movie={movie} />
        <MovieInfoBar budget={movie.budget} revenue={movie.revenue} time={movie.runtime} />
        <Grid header='Actors'>
          {movie.actors.map((actor) => (
            <Actor
              key={actor.credit_id}
              name={actor.name}
              character={actor.character}
              imageUrl={actor.profile_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}` : NoImage}
            />
          ))}
        </Grid>
      </>
    );
  }
}

const MovieWithParams = (props) => <Movie {...props} params={useParams()} />;

export default MovieWithParams;
