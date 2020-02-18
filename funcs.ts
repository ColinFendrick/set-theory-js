
export type numb = numb[];

const zero: numb = [];
const one: numb = [[]];
const two: numb = [[], [[]]];
const three: numb = [
  [],
  [[]],
  [[], [[]]]
];
const four: numb = [
  [],
  [[]],
  [[], [[]]],
  [[], [[]], [[], [[]]]]
];

const sum = ((a: numb, b: numb): numb => {
  if (a) {
    return ([...a, ...b.map(x => sum(x, a))]);
  }
});

const mult = ((a: numb, b: numb): numb =>
  b.map((el: numb) =>
    el.map((): numb => sum(a, a)))
);
