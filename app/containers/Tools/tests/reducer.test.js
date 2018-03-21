

import pageToolsReducer from '../reducer';

describe('pageToolsReducer', () => {
  it('returns the initial state', () => {
    expect(pageToolsReducer(undefined, {})).toEqual({});
  });
});
