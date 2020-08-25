import React from 'react';
import { string, any } from 'prop-types';
import { ThemeConsumer } from '../contexts/theme';

const Card = ({ header, subheader, avatar, link, name, children }) => {
  return (
    <ThemeConsumer>
      {({theme}) => (
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
      )}
    </ThemeConsumer>
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
