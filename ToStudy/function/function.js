function stringCombine(a, b){
  return a + b;
}

function consoleLoop(string, count){
  for(let i = 0; i < count; i++){
    console.log(string);  
  }
}

function one(entrance, exit, count){
  let strings = stringCombine(entrance, exit);
  consoleLoop(strings, count);


// return  `${a} ${b}`
// return은 출구
return '아부지 밖에 계시지롱';
}

one('<div>', '</div>', 5);


