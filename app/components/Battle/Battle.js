import React, { Component, Fragment } from 'react';
import Instructions from './Instructions';
import PlayerInput from './PlayerInput';
import PlayerPreview from './PlayerPreview';
import { ThemeConsumer } from '../../contexts/theme';
import { Link, Route } from 'react-router-dom';

class Battle extends Component {
  state = {
    playerOne: null,
    playerTwo: null
  }

  handleSubmit = (id, player) => this.setState({ [id]: player })

  handleReset = (id) => this.setState({ [id]: null })

  render() {
    const { state: { playerOne, playerTwo }, handleSubmit, handleReset } = this;

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
                onSubmit={(player) => handleSubmit('playerOne', player)} 
              />
              :
              <PlayerPreview
                label='Player One'
                username={playerOne}
                onReset={ () => handleReset('playerOne') } 
              />
          }
          {
            playerTwo === null ?
              <PlayerInput 
                label='Player Two' 
                onSubmit={(player) => handleSubmit('playerTwo', player)} 
              />
              :
              <PlayerPreview
                label='Player Two'
                username={playerTwo}
                onReset={ () => handleReset('playerTwo') } 
              />
          }
          </div>
          <ThemeConsumer>
            {({ theme }) => (
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
            )}
          </ThemeConsumer>
        </div>
      </Fragment>
    );
  }
}

export default Battle;
