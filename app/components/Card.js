import React, {useContext} from 'react';
import { string, any } from 'prop-types';
import ThemeContext from '../contexts/theme';

const Card = ({ header, subheader, avatar, link, name, children }) => {
  const {theme} = useContext(ThemeContext)
  return (
    <div className={`${theme}-card info-card`}>
      <h2>{header}</h2>
      <h3>{subheader}</h3>
      <img src={avatar} alt={`Avatar for ${name}`}/>
      <h3>
        <a href={link} className='link' target='_blank'>
          {name}
        </a>
      </h3>
      {children}
    </div>
  );
}

Card.propTypes = {
  header: string.isRequired,
  subheader: string,
  avatar: string.isRequired,
  link: string.isRequired,
  name: string.isRequired,
  children: any
}

export default Card;
