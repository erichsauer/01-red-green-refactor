const getName = require('./get-name');

describe('getName function', () => {
  it('should return the name "spot" when a dog object is passed in', () => {
    const spot = { name: 'spot', age: 5, weight: '20 lbs' };
    const name = getName(spot);

    expect(name).toEqual('spot');
  });

  it('should return the name "Aang" when a character object is passed in', () => {
    const character = { _id: '5cf5679a915ecad153ab68c9', name: 'Aang' };
    const name = getName(character);

    expect(name).toEqual('Aang');
  });
});
