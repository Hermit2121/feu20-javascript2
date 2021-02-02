// const user = {
//   firstName: 'Joakim',
//   lastName: 'Wahlström',
//   age: 34,
//   email: 'joakim@mail.com'
// }

// console.log(user);

// module.exports = user;

class User{
  constructor(firstName, lastName, age, email){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
  }
  greet() {
    console.log(`Hello, my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.`)
  }
}

module.exports = User;