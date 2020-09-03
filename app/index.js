import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ThemeProvider } from './contexts/theme';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './components/NotFound';
import Nav from './components/Nav';
import Preloader from './components/Preloader/Preloader';

const Popular = React.lazy(() => import('./components/Popular/Popular'));
const Battle = React.lazy(() => import('./components/Battle/Battle'));
const Results = React.lazy(() => import('./components/Results/Results'));

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
      <Router>
        <ThemeProvider value={this.state}>
          <div className={this.state.theme}>
            <div className='container'>
              <Nav />
              <React.Suspense fallback={<Preloader />}>
                <Switch>
                  <Route path='/' exact component={ Popular } />
                  <Route path='/battle' exact component={ Battle } />
                  <Route path='/battle/results' component={Results} />
                  <Route component={NotFound} />
                </Switch>
              </React.Suspense>
            </div>
          </div>
        </ThemeProvider>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));