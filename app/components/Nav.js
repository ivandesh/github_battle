import React from 'react'
import { ThemeConsumer } from '../contexts/theme'
import { NavLink } from 'react-router-dom';

const activeStyle = {
  color: 'red'
}

export default function Nav () {
  return (
    <ThemeConsumer>
      {({ theme, toggleTheme }) => (
        <nav className='flex space-between'>
          <ul className='flex'>
            <li><NavLink to='/' exact className='btn-clear nav-link' activeStyle={activeStyle}>Popular</NavLink></li>
            <li><NavLink to='/battle' className='btn-clear nav-link' activeStyle={activeStyle}>Battle</NavLink></li>
          </ul>
          <button
            style={{fontSize: 30}}
            className='btn-clear'
            onClick={toggleTheme}
          >
            {theme === 'light' ? '🔦' : '💡'}
          </button>
        </nav>
      )}
    </ThemeConsumer>
  )
}