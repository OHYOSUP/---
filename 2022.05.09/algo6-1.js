
// function valueTest() {
// if(typeof a === "number"){
//   console.log("변수 a는 데이터타입이 숫자");
// } else {
//   console.log("변수 a는 숫자 타입이 아닙니다.");
// }
// if(typeof b === "number"){
//   console.log("변수 b는 데이터타입이 숫자입니다.")
// }

// valueTest();

// function valueTestTwo(){
//   if(typeof a === "number" && typeof b === "string"){
//     console.log("변수 a 와 b는  모두 number 타입입니다");
//   } else{
//     console.log("다 모르겠는데, 둘 중 하나 이거나 둘 다 number가 아닐 수 있습니다");
//   }
// }


// let a = 1;
// let b = 1;
// let c = 2;

// function valueTestTwo(){
//   if(typeof a === "string"){
//     console.log('a는 string입니다.');
//   } else{
//     if (typeof a === "number"){
//       console.log('a는 number입니다.');
//       if(a === 1 ){
//         console.log('a는 1입니다')
//       } else{
//         console.log("a는 1이 아닙니다.");
//       }
//     } else{
//         console.log("a는 number가 아닙니다")
//       }
//     }
//   }

// valueTestTwo();

let a = 1;
let b = 1;
let c = 2;

function valueTestThree(){
  if(typeof a === "string"){
    console.log('a는 숫자만 입력 가능하다임마');
  } else{
    if(typeof b === "string"){
      console.log('b도 숫자만 입력해 임마');
      if(typeof a === "number" && typeof b === "number"){
        if(a === 1){

          console.log('참 잘했어요')
        }
      }
    }
  }
}

valueTestThree();