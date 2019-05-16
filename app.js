// arr = ["john", "piter", "doe", "sam"];

// const personObj = [];
// class Person {
//   constructor(name, lastName = "smit", age = 23) {
//     this.name = name;
//     this.lastName = lastName;
//     this.age = age;
//   }
// }

// const writeHTML = arg => {
//   const newArr = document.querySelector(".lista");
//   const markup = `<li>${arg}</li>`;
//   newArr.insertAdjacentHTML("beforeend", markup);
// };

// arr.map(el => {
//   personObj.push(new Person(el));
//   writeHTML(el);
// });
// const btn = document.querySelector(".btn");

// btn.addEventListener("click", () => {
//   const form = document.querySelector(".forma");
//   if (form.value !== "") {
//     arr.push(form.value);
//     writeHTML(form.value);
//     personObj.push(new Person(form.value));
//     form.value = "";
//   }
// });

// const ul = document.querySelector("ul");

// ul.addEventListener("click", event => {
//   if (event.target.tagName === "LI") {
//     const newList = document.querySelector(".nova-lista");
//     console.log(event.target.tagName);

//     newList.innerHTML = "";

//     const name = event.target.textContent;
//     const singleObj = personObj.find(el => {
//       return el.name === name;
//     });

//     const { lastName, age } = singleObj;

//     const markup = `<li>prezime:${lastName}, godine:${age}</li>`;

//     newList.insertAdjacentHTML("beforeend", markup);
//     console.log(lastName, age);
//   }
// });

// const array = [
//   { name: "Pera", age: 28, job: "pekar" },
//   { name: "Laza", age: 56, job: "lekar" },
//   { name: "Zika", age: 89, job: "apotekar" },
//   { name: "Djura", age: 5, job: "govno" },
//   { name: "Seka", age: 12, job: "bla" }
// ];




// const adult =  array.filter( el => {
//   return el.age > 18
// })

// console.log(adult)

const generateColor = () => {

  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  const a = Math.random();

  return  `rgba(${red},${green},${blue},${a})`;
 
}

const changeStyle = (element, property, value) => {
    element.style[property] = value;
}

const elements = {
  square: document.querySelector(".main"),
  heading: document.querySelector(".heading"),
  para: document.querySelector(".para")
}

const changeMultipleElements = () => {
    changeStyle(elements.square, 'backgroundColor', generateColor()),
    changeStyle(elements.heading, 'color', generateColor())
}

 

 document.querySelector(".btn").addEventListener('click', changeMultipleElements);









