

import pageCompanyReducer from '../reducer';

describe('pageCompanyReducer', () => {
  it('returns the initial state', () => {
    expect(pageCompanyReducer(undefined, {})).toEqual({});
  });
});
