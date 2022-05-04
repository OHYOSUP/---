
let current = 0;

let timer = setInterval(function(){
  console.log(current);
  current++;

  if(current === 60){
    console.log('1분이 지났다 임마');

    clearInterval(timer);
  }
}, 16);

