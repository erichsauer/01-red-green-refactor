const fetchQuotes = require('./fetch-quotes');

describe('fetchQuotes function', () => {
  it('should return an object containing the name, image and a quote from one Futurama character.', async () => {
    const result = await fetchQuotes();

    expect(result).toEqual(
      expect.objectContaining({
        name: expect.any(String),
        text: expect.any(String),
        image: expect.any(String),
      })
    );
  });
});
