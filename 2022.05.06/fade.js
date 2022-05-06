let value = 0;
// 선언과 동시에 값을 대입했다 : 초기화

// value = 100;
// 값을 새로 할당(assignment)
// = 대입연산자를 활용


// console.log(value);

// setInterval(function(){}, interval);
// 첫번재 파라미터(매개변수) 함수, 매개변수자리에 실행할 함수가 자리잡은 것을 "콜백함수"
// callback function
let interval = 100;
let timer = setInterval(function() {
  // 함수 리터럴/함수 표현식 = 함수를 변수에 담는 패턴
  // 식별하기 위해 변수에 대입했다
  // 변수 timer는 함수 setInterval을 가리킨다
  console.log(value);
  

  value = value + 2;
  //  => value += 2;

  if(value > 100){
    clearInterval(timer);
  }
}, interval);