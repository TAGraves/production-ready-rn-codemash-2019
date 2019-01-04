// in hello-world.test.js:
describe('3', () => {
  describe('when the name is bad', () => {
    it('says hello', () => {
      expect(helloWorld('bad')).toBe('Hello world, bad!');
    });
  });
});