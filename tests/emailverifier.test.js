const emailVerifier = require('../functions/emailverifier');

describe('verifies string input is a valid email address', function() {

    it('should only take in a string value', () => {
        //Test
    });

    it('should not allow period at end of valid email', () => {
        //Test
    });

    it('should not allow period at start of valid email', () => {
        //Test
    });

    it('should not allow two consecutive periods in valid email', () => {
        //Test
    });

    it('should not allow numeric beginning to valid email', () => {
        //Test
    });

    it('should allow for !$%*+-=?^_{|}~ in valid email', () => {
        //Test
    });

    it('should not allow "(),:;<>@[\]` in valid email', () => {
        //Test
    });
});

test('Jest framework runs correctly', () => {
  expect(true).toBeTruthy();
});