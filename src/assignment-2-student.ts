/**
 * This function takes student object as its parameter,
 * generates uuid for each object and returns student object along with uuid.
 */

import {v4 as uuidv4} from 'uuid';
interface StudentInterface {
  name: string;
  age: number;
  score: number;
  uuid?: string;
}
const student1: StudentInterface = {
  name: 'Sonu',
  age: 19,
  score: 10,
};
const student2: StudentInterface = {
  name: 'Monu',
  age: 21,
  score: 20,
};
function studentProgress(student: StudentInterface): StudentInterface {
  const newStudent = {...student};
  newStudent.uuid = uuidv4();
  return newStudent;
}
console.log(studentProgress(student1));
console.log(studentProgress(student2));
