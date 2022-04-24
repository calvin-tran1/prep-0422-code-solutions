var person = {
  firstName: 'billy',
  lastName: 'bob',
  hobby: 'cooking'
};
console.log(person);

var fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is: " + fullName);

person.job = 'web developer';
console.log("The person's current job is: " + person.job);

person.previousJob = 'sales manager';
console.log("The person's previous job was: " + person.previousJob);

console.log(person);
