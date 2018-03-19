

import pageGroupsReducer from '../reducer';

describe('pageGroupsReducer', () => {
  it('returns the initial state', () => {
    expect(pageGroupsReducer(undefined, {})).toEqual({});
  });
});
