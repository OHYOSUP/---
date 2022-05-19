// const memberOne = {
//   name : "손만충",
//   gender: "pokemon",
//   age : 58,
//   deskNumber : 30,
//   glasses : true,
//   married : 'dolsing',
//   talmo : false,
//   smartphone : "foldable phone"
// }

// const memberTwo = {
//   name : "이채연",
//   gender: "digimon",
//   age : 10,
//   deskNumber : 31,
//   glasses : true,
//   married : 'no',
//   talmo : false,
//   smartphone : "iphone"
// }

// console.log(memberOne.name);
// console.log(memberTwo.name);


function Member(name, gender, age, deskNumber, glasses, married, talmo, smartphone) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.deskNumber = deskNumber;
  this.glasses = glasses;
  this.married = married;
  this.talmo = talmo;
  this.smartphone = smartphone;
}
// 거푸집

const memberOne = new Member("김주은", "파이리", "14", "32", "none", "maybe", "no", "amnia");
// console.dir(memberOne);

const test1 = new Date();

// console.dir(test1.getHours());

function ampm(hour, msg){
if(hour > 12){
  console.log(msg + (hour - 12) + "시 입니다")
  console.log("memberOne.smartphone")
}else {
  console.log("오전입니다 : " + hour);
}
}

// ampm(test1.getHours(), "오후입니다");

const now = new Date();
const year = now.getFullYear();
const setDateYear = now.getFullYear();
const setDateMonth = now.getMonth() +1;
const setDateDay = now.getDay();

// const doomsday = setDate.getTime() - now.getTime();

// console.log(setDateMonth);
// setTimeout(function(){
//   console.log('Wow!');
// },3000);

const second = 


console.log(now);



//* 생성자 함수 : constructor function
//* => 객체를 찍어내는 거푸집 틀(석고뜨는 함수)
//* DOM API에는 생성자 함수가 많이 있음


