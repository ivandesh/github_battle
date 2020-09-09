import React, {useContext} from 'react';
import { VscGithubAlt, VscSymbolEvent, VscLaw } from 'react-icons/vsc';
import ThemeContext from '../../contexts/theme';

const Instructions = ({}) => {
  const {theme} = useContext(ThemeContext)
  return(
    <div className="instructions-container container">
      <h1 className='text-center mb-50'>Instructions</h1>
      <ul className="instructions">
        <li className={`${theme}-card instructions-card text-center`}>
          <h3>Enter two Github users</h3>
          <VscGithubAlt size='5em' color='#c70039' />
        </li>
        <li className={`${theme}-card instructions-card text-center`}>
          <h3>Battle</h3>
          <VscSymbolEvent size='5em' color='#f37121' />
        </li>
        <li className={`${theme}-card instructions-card text-center`}>
          <h3>See the winners</h3>
          <VscLaw  size='5em' color='#111d5e' />
        </li>
      </ul>
    </div>
  )
};

export default Instructions;