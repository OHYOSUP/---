// let coffee = ["아메리카노", "라떼", "바닐라라떼", "에스프레소", "모카라떼"]
// let coffee{

// }
// console.log(coffee);
// console.log(coffee[coffee.length-1])


// * 커피원두 : 20000
// * 우유 : 30000
// * 물 : 100
// * 설탕 : 3000
// * 시럽 : 200
// * 시나몬 :500
// * 빨대 : 1000
// * 머그컵 : 300000
// * 플라스틱컵 : 100000
// * 얼음 : 200000

const materialObj  = {
  coffeebean : 19900,
  milk : 2300,
  water : 600,
  sugar : 3000,
  cinamon : 1500,
  syrup : 9900,
  mugcup : 30000,
  takeoutCup : 1000,
  ice : 500
}


console.log(materialObj);

const americano = {
  one : materialObj.coffeebean,
  two : materialObj.water,
  three : materialObj.takeoutCup
}

let americanoPrice = americano.one+americano.two+americano.three;
console.log(americanoPrice +"원");
console.log(americanoPrice + materialObj.ice + "원");


