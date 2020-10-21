import React, { useState, useEffect } from 'react';
import {
  Banner,
  Title,
  Synopsis,
  Button,
  ButtonContainer,
  BannerDetailsContainer,
  FadeBottom,
} from './style';
import { request } from '../../utils/request';
import { moviePostersUrl } from '../../utils/constants';
import { truncate } from '../../utils/utils';

const Hero = () => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(request.netflixOriginal);
        const data = await response.json();
        const randomMovieIndex = Math.floor(
          Math.random() * data.results.length - 1
        );
        const randomMovie = data.results[randomMovieIndex];
        console.log(randomMovie);
        setMovie(randomMovie);
        return response;
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);
  return (
    <Banner poster={`${moviePostersUrl}${movie?.poster_path}`}>
      <BannerDetailsContainer>
        <Title>{movie?.title || movie?.name || movie?.original_name}</Title>
        {/* <ButtonContainer>
          <Button>Play</Button>
          <Button>My List</Button>
        </ButtonContainer> */}
        <Synopsis>{truncate(movie?.overview)}</Synopsis>
      </BannerDetailsContainer>
      <FadeBottom />
    </Banner>
  );
};

export default Hero;
