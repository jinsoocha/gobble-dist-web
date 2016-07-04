export const CHANGE_POST_TYPE = 'CHANGE_POST_TYPE';

export const changePostType = (postType) => {
  return {
    type: CHANGE_POST_TYPE,
    postType
  };
};
