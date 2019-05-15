arr = ["john", "piter", "doe", "sam"];
const personObj = [];
class Person {
    constructor(name, lastName = 'smit', age = 23) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
    }
}


  const writeHTML = arg => {
   const newArr = document.querySelector(".lista");
    const markup = `<li>${arg}</li>`;
    newArr.insertAdjacentHTML("beforeend", markup);
  }

console.log(arr)
arr.map(el => {
    personObj.push(new Person(el))
  writeHTML(el);
});
console.log(personObj)
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  const form = document.querySelector(".forma");
  if(form.value !== '') {
    arr.push(form.value);
    console.log(arr);
   writeHTML(form.value)
   personObj.push(new Person(form.value))
   console.log(personObj)
    form.value = "";
  }
});

const ul = document.querySelector('ul');

ul.addEventListener('click', (event) => {
console.log(event.target)
})