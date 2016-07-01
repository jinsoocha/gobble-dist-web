import 'isomorphic-fetch';

const checkStatus = res => {
  if (res.status >= 200 && res.status < 300) {
    console.log(res);
    return res;
  } else {
    const error = new Error(res.statusText);
    error.res = res;
    throw error;
  }
};

const parseJSON = res => res.json();

const handleError = err => {
  console.error(`ERROR - Request to ${err.res.url} failed:
    ${err.res.status} ${err.res.statusText}`);
};

export default {
  checkStatus,
  parseJSON,
  handleError
};
