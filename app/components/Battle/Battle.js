import React, { Component, Fragment } from 'react';
import Instructions from './Instructions';
import PlayerInput from './PlayerInput';
import PlayerPreview from './PlayerPreview';
import Results from '../Results/Results';
import { ThemeConsumer } from '../../contexts/theme';

class Battle extends Component {
  constructor(props) {
    super(props)

    this.state = {
      playerOne: null,
      playerTwo: null,
      results: false
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this)
  }

  handleSubmit(id, player) {
    this.setState({
      [id]: player
    })
  }

  handleReset(id) {
    this.setState({
      [id]: null
    })
  }

  render() {
    const { state: { playerOne, playerTwo, results }, handleSubmit, handleReset } = this;

    if(results) {
      return (
        <Results 
          playerOne={playerOne} 
          playerTwo={playerTwo}
          onReset={() => this.setState({
            playerOne: null,
            playerTwo: null,
            results: false
          })}
        />
      )
    }

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
              <button 
                className={theme === 'light' ? 'btn btn-dark battle-btn' : 'btn btn-light battle-btn'}
                onClick={() => this.setState({ results: true })}
              >
                Battle
              </button>
            )}
          </ThemeConsumer>
        </div>
      </Fragment>
    );
  }
}

export default Battle;
