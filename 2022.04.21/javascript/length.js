let pokemon = ["이상해씨", "이상해풀", "이상해꽃", "파이리", "리자드", "리자몽"];
// 배열에는 원소(요소 element), length값이 6개인 데이터를 변수 pokemon에 대입했다.

console.log(pokemon);
console.log(pokemon.length);
// length = 배열에 키값중에 길이값을 가져오는 프로퍼티(=getter)
console.log(pokemon[3]);
console.log(pokemon[pokemon.length-5]);
// 길이값의 -1 = 무조건 마지막 원소
let three = 3;
console.log(pokemon[three]);


let max = `&{pokemonp[0]} 포켓몬의 최종 진화는 ${pokemon[0+2]}`
console.log(max);