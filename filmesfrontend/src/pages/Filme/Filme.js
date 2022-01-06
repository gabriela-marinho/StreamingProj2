import { useState } from 'react/cjs/react.development';
import './Filme.scss';

export default function Filme() {

  const [filme, setFilme] = useState({});

  return (
    <div className='filme'>
      <h2>{filme.title}</h2>
      <img src={filme.cover} alt={filme.title} />
      <h3>{filme.year}</h3>
      <h3>{filme.genres}</h3>
      <p>{filme.resume}</p>
    </div>
  )
}  