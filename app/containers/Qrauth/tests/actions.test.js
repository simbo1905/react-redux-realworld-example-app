
import { defaultAction } from '../redux/actions';
import { DEFAULT_ACTION } from '../redux/constants';

describe('Qrauth actions', () => {
  describe('Default Action', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = {
        type: DEFAULT_ACTION,
      };
      expect(defaultAction()).toEqual(expected);
    });
  });
});
