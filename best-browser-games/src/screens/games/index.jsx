import { useEffect, useState } from 'react';
import { Card } from '../../components';

import './styles.css';

const Games = () => {

  const[games, setGames] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/games")
    .then(response => response.json())
    .then(data => setGames(data));
  },[]);

  return(
    <section className="gamesContainer">
      {games.map((games) => 
        <Card
          key={games.id}
          name={games.name}
          category={games.category}
          description={games.description}
        />
      )}
      
    </section>
  )
}

export default Games;