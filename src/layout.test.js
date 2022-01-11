import layout from './layout';

describe('layout', () => {
  it('should work', async () => {
    expect(layout({ client: {} })).toMatchSnapshot();
    expect(layout({ client: { css: 'test' } })).toMatchSnapshot();
  });
});
