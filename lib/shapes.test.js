const { Circle, Triangle, Square } = require('./shapes');

test('Triangle render test', () => {
  const shape = new Triangle("blue");
  expect(shape.render()).toEqual('<polygon points="50,180 250,180 150,40" fill="blue" />');
});

test('Circle render test', () => {
  const shape = new Circle("red");
  expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red" />');
});

test('Square render test', () => {
  const shape = new Square("green");
  expect(shape.render()).toEqual('<rect x="50" y="50" width="200" height="100" fill="green" />');
});