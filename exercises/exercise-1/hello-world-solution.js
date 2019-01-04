// --- 1 ---
describe('when the name is CodeMash', () => {
  it('says hello', () => {
    expect(helloWorld('CodeMash')).toBe('Hello world, CodeMash!');
  });
});

// --- 2 ---
describe('when the name is Rudolph', () => {
  it('says hello', () => {
    expect(helloWorld('Rudolph')).toBe('Hello world, Rudolph!');
  });
});

// --- 3 ---
describe('when the name is bad', () => {
  it('says hello', () => {
    expect(helloWorld('bad')).toBe('Hello world, bad!');
  });
});

// --- 4 ---
export default function helloWorld(name) {
  return `Hello world, ${name}!`;
}
