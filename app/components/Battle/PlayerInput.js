import React, { Component } from 'react';
import { string, func } from 'prop-types';
import { ThemeConsumer } from '../../contexts/theme';

class PlayerInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      username: event.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.onSubmit(this.state.username)
  }

  render() {
    return(
      <ThemeConsumer>
        {({ theme }) => (
          <form className='flex column player' onSubmit={this.handleSubmit}>
            <label className='player-label' htmlFor="username">{this.props.label}</label>
            <div className="input-field flex">
              <input 
                type="text"
                className={`input-${theme}`}
                value={this.state.username}
                onChange={this.handleChange}
              />
              <button 
                type='submit' 
                className={theme === 'light' ? 'btn-dark' : 'btn-light'} 
                disabled={!this.state.username}
              >
                Submit
                </button>
            </div>
          </form>
        )}
      </ThemeConsumer>
    )
  }
}

PlayerInput.propTypes = {
  onSubmit: func.isRequired,
  label: string.isRequired
}

export default PlayerInput;