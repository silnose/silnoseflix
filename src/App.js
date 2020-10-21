import React from 'react';
import Movies from './components/Movies';
import { request } from './utils/request';
import { Normalize } from 'styled-normalize';
import GlobalStyles from './styles/GlobalStyles';
import Hero from './components/Hero/index';
import NavBar from './components/NavBar/index';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <Normalize />
      <GlobalStyles />
      <NavBar />
      <Hero />
      <Movies
        title='Netflix Original'
        fetchUrl={request.netflixOriginal}
        isLarge
      />
      <Movies title='Top Rated' fetchUrl={request.topRated} />
      <Movies title='Action Movies' fetchUrl={request.actionMovies} />
      <Movies title='Comedy Movies' fetchUrl={request.comedyMovies} />
      <Movies title='Horror Movies' fetchUrl={request.horrorMovies} />
      <Movies title='Romance Movies' fetchUrl={request.romanceMovies} />
      <Movies title='Documentaries' fetchUrl={request.documentaries} />
      <Footer />
    </div>
  );
}

export default App;
