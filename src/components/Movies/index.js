import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import { moviePostersUrl } from '../../utils/constants';
import { PosterContainer, Section, Title, Poster } from './styles';

const Movies = ({ title, fetchUrl, isLarge }) => {
  const [movies, setMovies] = useState([]);
  const [trailerURL, setTrailerURL] = useState('');
  const handleOnClick = (movie) => {
    const movieTitle =
      movie?.name || movie?.title || movie?.original_name || '';
    if (trailerURL !== '') {
      setTrailerURL('');
    } else {
      console.log(movieTitle);
      movieTrailer(movieTitle, { id: true })
        .then((videoId) => {
          setTrailerURL(videoId);
        })
        .catch((error) => {
          console.error(error);
          setTrailerURL('');
        });
    }
  };
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(fetchUrl);
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.log(error);
        throw Error(error);
      }
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <Section>
      <Title>{title}</Title>
      <PosterContainer>
        {movies.map((movie) => (
          <Poster
            onClick={() => handleOnClick(movie)}
            isLarge={isLarge}
            key={movie.id}
            src={`${moviePostersUrl}${
              isLarge ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.original_name}
            className='row__poster'
          />
        ))}
      </PosterContainer>
      {trailerURL && (
        <YouTube
          videoId={trailerURL}
          opts={{ height: '390', width: '100%', playerVars: { autoplay: 1 } }}
        />
      )}
    </Section>
  );
};

export default Movies;
