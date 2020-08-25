import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ThemeProvider } from './contexts/theme';

import Popular from './components/Popular/Popular';
import Battle from './components/Battle/Battle';
import Nav from './components/Nav';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      theme: 'light',
      toggleTheme: () => {
        this.setState(({ theme }) => ({
          theme: theme === 'light' ? 'dark' : 'light'
        }))
      }
    }
  }

  render() {
    return (
      <ThemeProvider value={this.state}>
        <div className={this.state.theme}>
          <div className='container'>
            <Nav />
            <Battle />
          </div>
        </div>
      </ThemeProvider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));