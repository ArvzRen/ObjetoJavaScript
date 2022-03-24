//Variables
var x = 1;
var a = "Hola";

//Matriz
var nombres = ["Brenda", "Gerardo", "Kyomi", "Tobi"];

//Objeto JavaScript
var Student = {
  name: "Sammy",
  class: 7,
  roll_no:21,
  favorite_subject: "programación",
  marks : [30,35,40,50],
  age: 12,
  city: "Canadá",
  
};

function setup() {
  //Variables
  console.log(x);

  //Matriz
  console.log(nombres);
  console.log(nombres[3]);

  //cambiar número de lista
  console.log(Student.class);
  console.log(Student.city);
  console.log(Student.name);

  createCanvas(400, 400);
}

function draw() {
  background(220);
  
}
