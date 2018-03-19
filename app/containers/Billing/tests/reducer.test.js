

import pageBillingReducer from '../reducer';

describe('pageBillingReducer', () => {
  it('returns the initial state', () => {
    expect(pageBillingReducer(undefined, {})).toEqual({});
  });
});
