import { useState, useEffect } from 'react';

// styles
import '../styles/sidebar.scss'

// api
import { api } from '../services/api';

// components
import { Button } from './Button'

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface SideBarProps {
  genres: Array<{
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
  }>
  selectedGenreId: number
  setSelectedGenreId: (id: number) => void
}

export function SideBar(props: SideBarProps) {


function handleClickButton(id: number) {
  props.setSelectedGenreId(id);
}

return (
  <nav className="sidebar">
    <span>Watch<p>Me</p></span>

    <div className="buttons-container">
      {props.genres.map(genre => (
        <Button
          key={String(genre.id)}
          title={genre.title}
          iconName={genre.name}
          onClick={() => handleClickButton(genre.id)}
          selected={props.selectedGenreId === genre.id}
        />
      ))}
    </div>
  </nav>
)
}