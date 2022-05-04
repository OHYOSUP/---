// function a(){
//   console.log('test');
//   // return "메롱";
// }
// a();
// console.log(a());

function b(first, second){
  if(typeof first === "number"){
    // 타입체크
    return first - second;

  } else{
    console.error("첫번째 매개변수 타입이 숫자가 이닙니다")
  }
}
// 입력장치
// b(1,2);
// (함수가 실행되면 값을 넣어라)
console.log(b("일",2));
// 출력장치(함수를 실행하는 결과값을 찍어줘)