import { GOBBLE_API_URL } from './../../../../env/client';

export const postLive = (facebookId, active, peerId, views, description) => {
  const newLive = {
    facebook_id: facebookId,
    active,
    peer_id: peerId,
    views,
    description
  };

  return fetch(`${GOBBLE_API_URL}/live`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newLive)
  }).then(res => res.json())
    .then(liveData => {
      console.log('Posted live:', liveData);
    });
};
