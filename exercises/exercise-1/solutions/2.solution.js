// in hello-world.test.js:
describe('2', () => {
  describe('when the name is Rudolph', () => {
    it('says hello', () => {
      expect(helloWorld('Rudolph')).toBe('Hello world, Rudolph!');
    });
  });
});
