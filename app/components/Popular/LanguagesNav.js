import React from 'react';
import { string, func } from 'prop-types';

const LanguagesNav = ({ selected, onLanguageUpdate }) => {
  const popularLanguages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];

  return (
    <ul className='flex-center'>
        { popularLanguages.map(lang => (
          <li key={lang}>
            <button 
            className="btn-clear nav-link"
            style={ selected === lang ? { color: '#5bc0de' } : null }
            onClick={ () => onLanguageUpdate(lang) }
            >
              {lang}
            </button>
          </li>
        )) }
      </ul>
  )
}

LanguagesNav.propTypes = {
  selected: string.isRequired,
  onLanguageUpdate: func.isRequired
}

export default LanguagesNav;
