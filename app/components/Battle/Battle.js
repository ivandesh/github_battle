import React, { useState, useContext, Fragment } from 'react';
import Instructions from './Instructions';
import PlayerInput from './PlayerInput';
import PlayerPreview from './PlayerPreview';
import ThemeContext from '../../contexts/theme';
import { Link } from 'react-router-dom';

const Battle = () => {
  const {theme} = useContext(ThemeContext);
  const [playerOne, setPlayerOne] = useState(null);
  const [playerTwo, setPlayerTwo] = useState(null);

  return (
    <Fragment>
      <Instructions />
      <div className="players-container">
        <h2 className='text-center'>Players</h2>
        <div className="flex space-between">
        {
          playerOne === null ?
            <PlayerInput 
              label='Player One' 
              onSubmit={(player) => setPlayerOne(player)} 
            />
            :
            <PlayerPreview
              label='Player One'
              username={playerOne}
              onReset={ () => setPlayerOne(null) } 
            />
        }
        {
          playerTwo === null ?
            <PlayerInput 
              label='Player Two' 
              onSubmit={(player) => setPlayerTwo(player) }
            />
            :
            <PlayerPreview
              label='Player Two'
              username={playerTwo}
              onReset={ () => setPlayerTwo(null) } 
            />
        }
        </div>
        {
          playerOne && playerTwo &&
          <button className={theme === 'light' ? 'btn btn-dark battle-btn' : 'btn btn-light battle-btn'}>
            <Link 
              to={{
                pathname: '/battle/results',
                search: `?playerOne=${playerOne}&playerTwo=${playerTwo}`
              }}
              className='nav-link'
            >
              Battle
            </Link>
          </button>
        }
      </div>
    </Fragment>
  )
}

export default Battle;
