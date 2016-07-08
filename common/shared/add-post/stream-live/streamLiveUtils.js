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

export const endLive = (facebookId, peerId) => {
  const postedLive = {
    facebook_id: facebookId.toString(),
    peer_id: peerId
  };

  return fetch(`${GOBBLE_API_URL}/live_end`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(postedLive)
  }).then(res => {
    if (res.status === 200) {
      console.log('Live stream successfully ended.');
    }
  });
};
