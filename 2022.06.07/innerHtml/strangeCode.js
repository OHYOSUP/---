const root = document.getElementById('root');
// const ul = document.createElement('ul');
// root.appendChild(ul);


// let liElement = [];
// for(let i = 0; i < 10; i++){
// // liElement += `<li> ${i} </li>`
// // = liElment = liElement + `<li> ${i} </li>`
// liElement.push(`<li> ${i} </li>`)
// }

// ul.innerHTML = liElement.join('');
// console.log(liElement);
// console.log(liElement.join(''));


root.innerHTML = `
<ul>
  <li>1</li>
  <li>1</li>
  <li>1</li>
  <li>1</li>
  <li>1</li>  
  <li>1</li>
  <li>1</li>
  <li>1</li>
  <li>1</li>
  <li>1</li>
</ul>
`;

const ul = document.querySelector('#root>ul');
const list = document.querySelectorAll('ul>li');
// const list  = ul.children;
console.log(list);
console.log(ul);
