import React, { useState, useEffect, Fragment } from 'react';
import { fetchPopularRepos } from '../../utils/api';

import LanguagesNav from './LanguagesNav';
import ReposGrid from './ReposGrid';
import Preloader from '../Preloader/Preloader';

const Popular = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('All');
  const [repos, setRepos] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    updateLanguage(selectedLanguage)
  }, [])

  const updateLanguage = (lang) => {
    setSelectedLanguage(lang);
    setError(null);

    if(!repos[lang]) {
      fetchPopularRepos(lang)
        .then(data => {
          setRepos(repos => {
            return {
              ...repos,
              [lang]: data
            }
          })
        })
        .catch(error => {
          setError(error)
        })
    }
  }

  const isLoading = () => {
    return !repos[selectedLanguage] && error === null
  }

  return (
    <Fragment>
    <LanguagesNav 
      selected={selectedLanguage}
      onLanguageUpdate={updateLanguage}
    />

    {isLoading() && <Preloader text='Fetching Repos' color='#5bc0de' />}

    {error && <p>{error}</p>}

    {repos[selectedLanguage] && <ReposGrid repos={repos[selectedLanguage]} />}
  </Fragment>
  )
}

export default Popular;
