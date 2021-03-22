const copyAndPush = require('./copy-and-push');

describe('copyAndPush function', () => {
  const array = ['beep', 'boop', 'bleep'];

  it('should copy a passed-in array and push a "goop" to the end, returning the new array', () => {
    const push = 'goop';
    const result = copyAndPush(array, push);
    expect(result).toEqual(['beep', 'boop', 'bleep', 'goop']);
  });

  it('should copy a passed-in array and push 4 to the end, returning the new array', () => {
    const push = 4;
    const result = copyAndPush(array, push);
    expect(result).toEqual(['beep', 'boop', 'bleep', 4]);
  });
});
