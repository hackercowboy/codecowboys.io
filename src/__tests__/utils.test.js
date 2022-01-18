import { isEmpty } from '../utils';

describe('utils', () => {
  it('should work', async () => {
    expect(isEmpty(undefined)).toBe(true);
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(0)).toBe(true);
    expect(isEmpty([])).toBe(true);
    expect(isEmpty('')).toBe(true);
    expect(isEmpty({})).toBe(true);

    expect(isEmpty(1)).toBe(false);
    expect(isEmpty('test')).toBe(false);
    expect(isEmpty([0])).toBe(false);
    expect(isEmpty({ a: 'b' })).toBe(false);
  });
});
