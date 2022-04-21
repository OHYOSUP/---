let nuri = "이누리";
let text = "초밥을 조아합니다 헤헤";


let foodObject = {
  chobob: "초밥",
  gwaja: "과자",
  coffee: "커피"
}


// 변수 srtingSum = 변수 nuri라는 변수와 text라는 변수를 앞뒤로 합쳤다
// 알고리즘, 프로그래밍은 하기에 따라서 객체, 배열, 변수로 얼마든지 바꿀 수 있다.
// *변수에 작명할 때 데이터타입을 살짝 표시해주면 좋다
// *nuri는 foodObject라는 객체의 무언가는 가져다 쓰겠지라고 예상할 수 있다.
// *값이 별로 중요해지지 않고 타입이 중요해진다


let stringSum = '$(nuri)씨는 $(foodObject.coffee) ${text}';
console.log(stringSum);
console.log(foodObject);
// console.log(typeof nuri);
// console.log(typeof text);
