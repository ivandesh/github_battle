import React, {useContext} from 'react';
import { string, func } from 'prop-types';
import {VscChromeClose} from 'react-icons/vsc';
import ThemeContext from '../../contexts/theme';

const PlayerPreview = ({username, label, onReset}) => {
  const {theme} = useContext(ThemeContext)
  return (
    <div className='player flex column'>
      <p className="player-label">{label}</p>

      <div className={`${theme}-card flex space-between`}>
        <div className="player-info">
          <img
            className='avatar-small'
            src={`https://github.com/${username}.png?size=200`} 
            alt={`avatar for ${username}`}
          />
          <a 
            href={`https://github.com/${username}`} 
            className='link'
            target='_blank'
          >
            {username}
          </a>
        </div>
        <div style={{cursor: 'pointer'}} onClick={onReset}>
          <VscChromeClose size='2em' color='red' />
        </div>
      </div>
    </div>
  );
}

PlayerPreview.propTypes = {
  username: string.isRequired,
  label: string.isRequired,
  onReset: func.isRequired
}

export default PlayerPreview;
