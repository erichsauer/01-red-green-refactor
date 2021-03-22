const capitalizeAndFilter = require('./capitalize-and-filter');

describe('capitalizeAndFilter function', () => {
  const array = ['beep', 'boop', 'bleep', 'fleek'];

  it('should capitalize strings in an array and filter out any string that begins with the letter "f"', () => {
    const result = capitalizeAndFilter(array, 'f');
    const expectation = ['BEEP', 'BOOP', 'BLEEP'];

    expect(result).toEqual(expectation);
  });
});
