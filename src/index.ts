import * as R from 'ramda';

/**
 * append will concatenate the given element to the passed in array
 * and return a new array. It will not modify the passed in array.
 */
function append<T>(element: T, list: readonly T[]): T[] {
  // list.push(element);
  const shallowCopy = [...list];
  shallowCopy.push(element);
  return shallowCopy;
}
const numbers = [1, 2, 3];
append(2, numbers);

console.log(numbers);

console.log(R.any<string>((str: string) => str.includes('hi'), ['hello', 1]));
