// var a = '바입니다';
// var a = '어라?';
// console.log(a);

// let b = '랫입니다'
// b = '마음이 변했습니다'
// console.log(b);

function one(Element){
  Element.addEventListener('click', function(){
    console.log(this);
    // this는 주체(Element)가 되는 것을 가리킨다
    // function() 선언문으로 쓰면 this가 나올 확률이 높다
  });
}

function two(element){
  element.addEventListener('click',()=>{
    console.log(this);
    // arrow function의 this는 함수two를 가리킨다
    // this가 잘 안나온다
  });
}


function three(element){
  let getValue = element.map((element) => {element});
}


// let getValue = element.map(element => element);

// 화살표 함수는 매개변수가 하나일때 소괄호를 안써도 된다.
// 두개부터는 소괄호를 쓴다.

// return 키워드를 안써도 리턴이 되는 경우가 있다
// {return data} : 아무런 변형 없이 return만 할 거라면 키워드를 삭제해도 된다 {앞 중괄호 다음에 return이 붙어있는 경우 리턴 삭제 가능}

// this는 여러 함수를 한번에 묶어서 처리할 때 사용한다
// event.object = 안에 this가 들어있다
// this는 어지간하면 쓰지 말자. 




// 네임스페이스가 다르면 같은 이름의 변수, 상수를 사용할 수 있다
// -> 권장x

// var는 함수의 영역을 구분한다 : function scrope
// -> var는 함수 영역 외에는 무시한다
// let, const = {} 중괄호 영역을 구분한다 : lexical scrope