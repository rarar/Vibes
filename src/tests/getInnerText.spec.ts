import { getInnerText } from '../getInnerText';

describe('getInnerText', () => {
  it('returns a string', () => {
    const div = document.createElement('div');
    document.body.appendChild(div);

    expect(getInnerText()).toEqual(undefined);
  });
});
