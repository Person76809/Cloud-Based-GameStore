import React, { useEffect, useState } from 'react';

import axios from 'axios';

function App() {

  const [games, setGames] = useState([]);

  useEffect(() => {

    fetchGames();

  }, []);

  const fetchGames = async () => {

    try {

      const response = await axios.get('/games');

      setGames(response.data.games);

    } catch (error) {

      console.log(error);

    }

  };

  const handleDownload = async (gameId) => {

    try {

      const response = await axios.post(`/games/${gameId}/download`);

      console.log(response.data.message);

      // Add your download logic here, e.g., trigger a download prompt

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <div className="App">

      <h1>Game Store</h1>

      <ul>

        {games.map((game) => (

          <li key={game.id}>

            <h3>{game.name}</h3>

            <p>Size: {game.size}</p>

            <p>Version: {game.version}</p>

            <p>Description: {game.description}</p>

            <button onClick={() => handleDownload(game.id)}>Download</button>

          </li>

        ))}

      </ul>

    </div>

  );

}

export default App;

 

