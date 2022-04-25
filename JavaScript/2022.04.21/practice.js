let greenbob = {
  삼식이 : 6000,
  춤추는만두 : 5000,
  우리손칼국수 : 7000,
  버거킹 : 5800, 
}
// console.log(greenbob);

let lunch = greenbob.삼식이 + greenbob.춤추는만두 + greenbob.버거킹 + greenbob.우리손칼국수;
// console.log(lunch + "원");



const lunchDiscount = {
  monday : greenbob.삼식이 * 0.1,
  tuesday : greenbob.춤추는만두 *0.2,
  thurseday : greenbob.우리손칼국수 *0.5,
  friday : greenbob.버거킹 * 0.3
}

// console.log(lunchDiscount);

let weekpayDc = (greenbob.삼식이-lunchDiscount.monday) + (greenbob.춤추는만두- lunchDiscount.tuesday) + (greenbob.우리손칼국수- lunchDiscount.thurseday) + (greenbob.버거킹 - lunchDiscount.friday);
// console.log(weekpayDc);



if(lunch > 20000) {
  console.log(`이번주 점심값은 ${weekpayDc} 원 입니다`);
}
  else{
    console.log(`${lunch} 원 입니다`);
  }
