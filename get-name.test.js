describe('getName function', () => {
  it('should return the name property of an object', () => {
    const name = getName();

    expect(name).toEqual('name');
  });
});
