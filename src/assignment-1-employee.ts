/**
 * This function ports the salary of the employee in typescript
 * and returns the employee object along with salary
 */

interface EmployeeInterface {
  name: string;
  age: number;
  salary?: number;
}

const employee: EmployeeInterface = {
  name: 'John',
  age: 34,
};

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
function addSalaryToEmployee(employee: EmployeeInterface, salary: number): EmployeeInterface {

// eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  
  const newEmployee = { ...employee };
  newEmployee.salary = salary;
  return newEmployee;
}
console.log(addSalaryToEmployee(employee, 20000));
