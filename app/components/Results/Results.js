import React, { Component } from 'react';
import { battle } from '../../utils/api';
import queryString from 'query-string';
import { Link } from 'react-router-dom';

import Card from '../Card';
import ProfileList from './ProfileList';
import Preloader from '../Preloader/Preloader';

class Results extends Component {
  state = {
    winner: null,
    loser: null,
    error: null,
    loading: true
  }
  
  componentDidMount() {
    const {playerOne, playerTwo} = queryString.parse(this.props.location.search);

    battle([playerOne, playerTwo])
      .then(results => (
        this.setState({
          winner: results[0],
          loser: results[1],
          error: null,
          loading: false
        })
        .catch(() => (
          this.setState({
            error: 'error',
            loading: false
          })
        ))
      ))
  }

  render() {
    const {winner, loser, error, loading} = this.state;

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
}

export default Results;
