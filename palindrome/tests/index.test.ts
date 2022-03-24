import { isPalindrome } from "../src/index";

describe('Palindrome', () => {
    it('is a palindrome', () => {
        expect(isPalindrome()).toBe(true);
    });
});
