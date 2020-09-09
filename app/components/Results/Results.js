import React, { useReducer, useEffect } from 'react';
import { battle } from '../../utils/api';
import queryString from 'query-string';
import { Link } from 'react-router-dom';

import Card from '../Card';
import ProfileList from './ProfileList';
import Preloader from '../Preloader/Preloader';

const battleReducer = (state, action) => {
  switch(action.type) {
    case 'success':
      return {
        error: null,
        loading: false,
        winner: action.winner,
        loser: action.loser
      }
      break;
    case 'error':
      return {
        ...state,
        error: 'error',
        loading: false
      }
  }
}

const initialState = {
  winner: null,
  loser: null,
  error: null,
  loading: true
}

const Results = ({location}) => {
  const [state, dispatch] = useReducer(battleReducer, initialState);
  const {playerOne, playerTwo} = queryString.parse(location.search);

  useEffect(() => {
    battle([playerOne, playerTwo])
      .then(results => dispatch({type: 'success', winner: results[0], loser: results[1]}))
      .catch(() => dispatch({type: 'error'}))
  }, [playerOne, playerTwo])

  const {winner, loser, loading, error} = state;

  if(loading) { return <Preloader text='Battling' />}

  if(error) { return <p>{error}</p> }

  return (
    <React.Fragment>
      <div className='battle-container flex space-between'>
        <Card
          header={winner.score === loser.score ? 'Tie' : 'Winner'}
          subheader={`Score: ${winner.score}`}
          avatar={winner.profile.avatar_url}
          link={winner.profile.html_url}
          name={winner.profile.login}
        >
          <ProfileList profile={winner.profile} />
        </Card>
          
        <Card
          header={winner.score === loser.score ? 'Tie' : 'Loser'}
          subheader={`Score: ${loser.score}`}
          avatar={loser.profile.avatar_url}
          link={loser.profile.html_url}
          name={loser.profile.login}
        >
          <ProfileList profile={loser.profile} />
        </Card>
      </div>
      <button
        className='btn btn-dark battle-btn'
      >
        <Link to='/battle' className='nav-link'>
          Reset
        </Link>
      </button>
    </React.Fragment>
  );
}

export default Results;
