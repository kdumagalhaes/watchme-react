import { useState, useEffect } from 'react'
import { api } from '../services/api';

// styles
import '../styles/content.scss'

// components
import { MovieCard } from './MovieCard'

interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}


export function Content() {
  const [movies, setMovies] = useState<MovieProps[]>([]);


    return (
      <div className="container">
        <header>
          <span className="category">Categoria:<span> Ação</span></span>
        </header>
        <main>
          <div className="movies-list">
            {movies.map(movie => (
              <MovieCard key={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
            ))}
          </div>
        </main>
      </div>
    )
  }