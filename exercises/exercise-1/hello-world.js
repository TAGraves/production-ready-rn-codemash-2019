export default function helloWorld(name) {
  if (name === 'bad') {
    return 'Goodbye, world';
  }

  return `Hello world, ${name}!`;
}