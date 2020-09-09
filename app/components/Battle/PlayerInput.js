import React, { useState, useContext } from 'react';
import { string, func } from 'prop-types';
import ThemeContext from '../../contexts/theme';

const PlayerInput = ({label, onSubmit}) => {
  const {theme} = useContext(ThemeContext);
  const [username, setUsername] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(username)
  }
  return (
    <form className='flex column player' onSubmit={handleSubmit}>
      <label className='player-label' htmlFor="username">{label}</label>
      <div className="input-field flex">
        <input 
          type="text"
          className={`input-${theme}`}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button 
          type='submit' 
          className={theme === 'light' ? 'btn-dark' : 'btn-light'} 
          disabled={!username}
        >
          Submit
          </button>
      </div>
    </form>
  )
}

PlayerInput.propTypes = {
  onSubmit: func.isRequired,
  label: string.isRequired
}

export default PlayerInput;