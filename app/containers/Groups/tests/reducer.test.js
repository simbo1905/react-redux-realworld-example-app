

import groupsReducer from '../redux/reducer';

describe('pageGroupsReducer', () => {
  it('returns the initial state', () => {
    expect(groupsReducer(undefined, {})).toEqual({});
  });
});
