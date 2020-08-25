import React, { Component, Fragment } from 'react';
import { fetchPopularRepos } from '../../utils/api';

import LanguagesNav from './LanguagesNav';
import ReposGrid from './ReposGrid';
import Preloader from '../Preloader/Preloader';

class Popular extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedLanguage: 'All',
      repos: {},
      error: null,
    }

    this.updateLanguage = this.updateLanguage.bind(this)
    this.isLoading = this.isLoading.bind(this);
  }

  componentDidMount() {
    this.updateLanguage(this.state.selectedLanguage)
  }

  updateLanguage(selectedLanguage) {
    this.setState({ 
      selectedLanguage,
      error: null
     })
    
    if(!this.state.repos[selectedLanguage]) {
      fetchPopularRepos(selectedLanguage)
      .then(data => {
        this.setState(({ repos }) => ({
           repos: {
             ...repos,
             [selectedLanguage]: data
           }
        }))
      })
      .catch(error => {
        this.setState({
          error: error
        })
      })
    }
  }

  isLoading() {
    const { selectedLanguage, repos, error } = this.state;
    return !repos[selectedLanguage] && error === null
  }

  render() {

    const {
      selectedLanguage,
      repos,
      error,
    } = this.state

    return (
      <Fragment>
        <LanguagesNav 
          selected={selectedLanguage}
          onLanguageUpdate={this.updateLanguage}
        />

        {this.isLoading() && <Preloader text='Fetching Repos' color='#5bc0de' />}

        {error && <p>{error}</p>}

        {repos[selectedLanguage] && <ReposGrid repos={repos[selectedLanguage]} />}
      </Fragment>
    );
  }
}

export default Popular;
