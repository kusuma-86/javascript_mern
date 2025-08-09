//primitive datatypes;
let studentName = 'john';
let studentAge = 20;
let studentIsMale= true;
let salary = 5000.00;
let studentMarks = null;
let studentAddress;
console.table({studentName,studentAge,studentIsMale,studentMarks,salary,studentAddress});
console.log(typeof(studentAge));
console.log(typeof(salary));
console.log(typeof(studentIsMale));
console.log(typeof(studentMarks));
console.log(typeof(studentAddress));
//non-primitive datatype
let person = {
    name: "ram",
    age: 22,
    branch: 'csm',
    fee: 3000,
    isMale: true
};
console.log(typeof person);
console.log(person.age);
console.log(person.branch);
