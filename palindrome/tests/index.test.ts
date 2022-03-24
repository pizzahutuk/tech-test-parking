import { isPalindrome } from '../src/index';

describe('Palindrome', () => {
  it('is a palindrome', () => {
    expect(isPalindrome('wibble')).toBe(true);
  });

  it('is not a palindrome', () => {
    expect(isPalindrome('')).toBe(false);
  });
});
