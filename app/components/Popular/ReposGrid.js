import React from 'react';
import { array } from 'prop-types';
import { VscRepoForked, VscEye, VscStarEmpty } from 'react-icons/vsc';
import Card from '../Card';

const ReposGrid = ({ repos }) => {
  return (
    <ul className='repos-list'>
      {
        repos.map((repo, index) => {
          const { 
            id, 
            owner, 
            html_url, 
            name, 
            stargazers_count, 
            watchers_count, 
            forks_count 
          } = repo
          const {avatar_url} = owner
          
          return(
            <li key={id}>
              <Card
                header={`#${index + 1}`}
                avatar={avatar_url}
                link={html_url}
                name={name}
              >
               <div className='info-list'>
                <p>
                  <VscStarEmpty size='2em' color='#f37121'/>
                  <span>{stargazers_count}</span>
                  stars
                </p>
                <p>
                  <VscEye size='2em' color='#111d5e' />
                  <span>{watchers_count}</span>
                  watchers
                </p>
                <p>
                  <VscRepoForked size='2em' color='#c70039' />
                  <span>{forks_count}</span>
                  forks
                </p>
              </div>
              </Card>
            </li>
          )
        })
      }
    </ul>
  );
}

ReposGrid.propTypes = {
  repos: array.isRequired
}

export default ReposGrid;
