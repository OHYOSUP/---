
const arr = [ "a", "b", "c"];


// 1. 원소값 중 "a"를 "c" 다음으로 놓는 방법이 있을까?

// const newElem = arr.shift();
// console.log(newElem);
// const b = arr.push(newElem);
// console.log(arr);
// =
// let temp;
// temp = arr[0];
// console.log(temp);
// arr.shift();
// console.log(arr);
// arr.push(temp);
// console.log(arr);

// 2. 원소값중 "c"를 "a" 앞으로 놓는 방법이 있을까?


// const pop = arr.pop();
// arr.unshift(pop);
// console.log(arr);

// 3. 혹은 ["b", "a", "c"] 형태로 바꿀 수 있을까?


let temp = arr.shift();
// console.log(temp);
// console.log(arr);

arr.splice(1,0,temp);
console.log(arr);

