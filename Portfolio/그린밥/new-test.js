const lunchMenu = {
  distance: {
    one : "삼식이식당",
    two : "우리손 칼국수",
    three : "춤추는 왕만두",
    four : "도군 함박스테이크",
    five : "곱창가 백반",
    six : "버거킹",
    seven : "한일 수육 칼국수"
  },
  price: {
    one: "삼식이식당",
    two: "우리손 칼국수",
    three : "춤추는 왕만두",
    four : "버거킹",
    five : "떡반집",
    six : "한일 수육칼국수"
  },
  taste: {
    one: "삼식이식당",
    two: "우리손 칼국수",
    three : "춤추는 왕만두",
    four : "은화수 식당",
    five : "엉터리해장국 감자탕",
    six : "현정 떡볶이",
    seven : "태평 소국밥",
    eight : "멘야산다이매",
    nine : "둔산가"
  },  
  others: {
    one: "동글이 김밥",
    two: "미스터 라멘",
    three : "본만쥬",
  }
};


let distance = lunchMenu.distance;
let arrOne = [distance];
// console.log(arrOne);

arrOne.forEach(element => {
  console.log(element);
});

console.log(Array.isArray(arrOne));
let price = lunchMenu.price;
let arrTwo = [price];
// console.log(taste);
arrTwo.forEach(element => {
  console.log(element);
});
console.log(Array.isArray(arrTwo));

let taste = lunchMenu.taste;
let arrThree = [taste];
// console.log(taste);
arrThree.forEach(element => {
  console.log(element);
});
console.log(Array.isArray(arrThree));

let others = lunchMenu.taste;
let arrFour = [taste];
// console.log(taste);
arrFour.forEach(element => {
  console.log(element);
});
console.log(Array.isArray(arrFour));




