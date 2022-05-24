import { aData } from "./module/a.js";
console.log(aData);
// a데이터를 가져올 거다 from 으로 부터
// 데이터 하나를 가져올 때 {}중괄호를 쓴다.

import bData from "./module/b.js";
console.log(bData);
//* b.js라는 파일에서 가져온 mainObject의 이름을 bData로 바꿀 수 있다.


import {
  cFunc,
  testVariable,
  moduleConnect
} from "./module/c.js";
// * 한번에 여러개 가져올 수 있다.

console.log(cFunc(1,2,3)); // [1,2,3]
console.log(testVariable); // 1
console.log(moduleConnect) // "this is connection"

// *기능별로 함수, 객체를 뜯어서 필요에 따라 적용시키는 것이 효율적
// *DevOps -> 설계