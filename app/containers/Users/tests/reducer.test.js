

import pageUsersReducer from '../reducer';

describe('pageUsersReducer', () => {
  it('returns the initial state', () => {
    expect(pageUsersReducer(undefined, {})).toEqual({});
  });
});
