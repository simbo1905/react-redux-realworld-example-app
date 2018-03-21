

import pageReportsReducer from '../reducer';

describe('pageReportsReducer', () => {
  it('returns the initial state', () => {
    expect(pageReportsReducer(undefined, {})).toEqual({});
  });
});
