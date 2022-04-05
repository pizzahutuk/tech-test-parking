import { wibble, wibble2, Wobbler } from '../src';

test('supports wibble', () => {
  expect(wibble()).toBe(true);
});

test('supports wibble2', () => {
  expect(wibble2()).toBe(false);
});

describe('Wobbler', function () {
  it('wobbles', async () => {
    const wobbler = new Wobbler();
    const result = await wobbler.wobble();
    expect(result).toEqual({});
  });
});
