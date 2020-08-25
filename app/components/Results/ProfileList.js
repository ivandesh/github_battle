import React from 'react';
import {VscLocation, VscAccount, VscBriefcase, VscFeedback, VscGithubAlt} from 'react-icons/vsc';
import Tooltip from '../Tooltip';

const ProfileList = ({ profile }) => {
  return (
    <div className='info-list'>
      {profile.name && (
        <p>
          <VscAccount color='rgb(239, 115, 115)' size={22} />
          <span>{profile.name}</span>
        </p>
      )}
      {profile.location && (
        <p>
          <Tooltip text='User location'>
            <VscLocation color='rgb(144, 115, 255)' size={22} />
            <span>{profile.location}</span>
          </Tooltip>
        </p>
      )}
      {profile.company && (
        <p>
          <Tooltip text='User company'>
            <VscBriefcase color='#795548' size={22} />
            <span>{profile.company}</span>
          </Tooltip>
        </p>
      )}
      <p>
        <VscFeedback color='rgb(129, 195, 245)' size={22} />
        <span>{profile.followers.toLocaleString()}</span> followers
      </p>
      <p>
        <VscGithubAlt color='rgb(64, 183, 95)' size={22} />
        <span>{profile.following.toLocaleString()}</span> following
      </p>
    </div>
  );
}

export default ProfileList;
