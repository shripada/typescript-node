/* eslint-disable import/default */
/* eslint-disable prettier/prettier */
import R from 'ramda'

/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/method-signature-style */
/* eslint-disable @typescript-eslint/no-unused-vars */
console.log('This is   typescript world');

const applyButton = document.querySelector('.apply-btn') as HTMLButtonElement;
applyButton.disabled;

// Variables in TypeScript

const a = '1';

console.log('aaa', a);

let hello: string = 'world';

// Functions in TypeScript

const getFullName = (name: string, surname: string) => {
  return name + ' ' + surname;
};
console.log(getFullName('Monster', 'Lessons'));

// Defining a function

const getFullName1 = (name: string, surname: string): string => {
  return name + ' ' + surname;
};

console.log(getFullName1('Monster', 'Lessons'));

// Interfaces
// Creating objects in a typescript
// Functions in interfaces

interface IUser {
  name: string;
  age?: number;
  getMessage(): string;
}
const user: IUser = {
  name: 'Monster',
  age: 30,
  getMessage() {
    return 'Hello' + this.name;
  },
};

const user2: IUser = {
  name: 'Jhon',
  getMessage() {
    return 'Hello' + this.name;
  },
};

console.log(user.getMessage());

console.log(R.any<string>((str: string) => str.includes('hi'), ['hello']));
