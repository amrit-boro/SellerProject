const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

const x = Object.keys(person).forEach((el) => {
  console.log(el);
});
