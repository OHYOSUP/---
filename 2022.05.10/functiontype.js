// * 선언(declaration)
function typeA() {

}
// * 전역 스코프(global)


// * Calling

typeA();
// *기명(이름이 있는) 선언방식


// *익명함수(anontmous function) / 함수 리터럴(literal) : 직접 값을 새긴다
// * 함수 표현식(function expression)
const typeB = function(){}
// * 제작자는 알지만 외부사람은 모르는 방식 : 권장되는 방식

typeB();

// * arrow function (화살표 함수)
// * 함수 표현식과 같은 기능
// * 축약형(개발자들이 귀찮다고)
// * 측정 작동 때문에-> 최신문법

const typeC = () => {}
const typeE = a => {} //* 매개변수가 하나일때는 소괄호도 안써도 돼
const typeD = function () {}
// * ()소괄호가 옆에 있으면 함수임
//* 고로 위 세개 다 함수임(arrow function)
(function() {})
// * 선언 건너뛰고 즉시 실행하겠다 -> 문서 시작할 때 이런 함수가 보이면 즉시 시작한다는 뜻

let test;
test.addEventListener("type", function(){});
// *함수의 매개변수 자리에 함수가 들어가 있는 것 "콜백함수"
// *콜백함수는 익명이 기본이다.
// *매우 많이 사용하기 때문에 눈에 익혀야 한다.

test.addEventListener('test', testFunction); //* function() 소괄호를 사용하지 않는다.
function testFunction(){
  // *밖으로 빼낸 콜백함수
  // *기명으로 함수를 만들어줌
}





