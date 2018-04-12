

import qrauthReducer from '../redux/reducer';

describe('qrauthReducer', () => {
  it('returns the initial state', () => {
    expect(qrauthReducer(undefined, {})).toEqual({});
  });
});
