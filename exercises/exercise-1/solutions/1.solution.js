// in hello-world.test.js:
describe('1', () => {
  describe('when the name is CodeMash', () => {
    it('says hello', () => {
      expect(helloWorld('CodeMash')).toBe('Hello world, CodeMash!');
    });
  });
});
