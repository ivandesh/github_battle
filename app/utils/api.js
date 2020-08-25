function getErrorMessage(error, username) {
  if(error === 'Not Found') {
    return `${username} doesn't exist, sorry`
  }

  return error
}

function getProfile(username) {
  return fetch(`https://api.github.com/users/${username}`)
    .then((res) => res.json())
    .then((profile) => {
      if(profile.message) {
        throw new Error(getErrorMessage(profile.message, username))
      }

      return profile;
    })
}

function getRepos(username) {
  return fetch(`https://api.github.com/users/${username}/repos`)
    .then(res => res.json())
    .then(repos => {
      if(repos.message) {
        throw new Error(getErrorMessage(repos.message, username))
      }

      return repos
    })
}

function getStars(repos) {
  return repos.reduce((count, { stargazers_count }) => count + stargazers_count, 0)
}

function calculateScore(followers, repos) {
  return (followers * 3) + getStars(repos)
}

function getData(username) {
  return Promise.all([
    getProfile(username),
    getRepos(username)
  ]).then(([profile, repos]) => ({
    profile, 
    score: calculateScore(profile.followers, repos)
  }))
}

function sortPlayers(players) {
  return players.sort((a, b) => b.score - a.score)
}

export function battle(players) {
  return Promise.all([
    getData(players[0]),
    getData(players[1])
  ]).then(results => sortPlayers(results))
}


export function fetchPopularRepos(language) {
  const endpoint = window.encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`)

  return fetch(endpoint)
    .then(res => res.json())
    .then(data => {
      if(!data) {
        throw new Error(data.message)
      }

      return data.items
    })
}