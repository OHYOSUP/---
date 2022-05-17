
const { all } = require('pokemon');
const pokemon = require('pokemon');


const allPokemon = pokemon.all();

// console.log(pokemon.getName(100, "ko"));

// console.log(allPokemon[0]);

// for(let i = 0; i < allPokemon.length; i++){
//   if(allPokemon[i].length > 8){
//     allPokemon[i] = "개명해라"
//   }
// }

// console.log(Array.isArray(allPokemon));

let getArray = [];
let mapping = allPokemon.map(function(value, index){
  if(index > 8) {
    test.push(value);
  } else {
    console.log('hahaha');
  }
});

console.log(getArray);
// mapping.forEach(function(value){
//   console.log(value);
// })


// console.log(mapping);

// let mapping = allPokemon.map(function(value,index){
//   // if(index.length > 8){
//   //   value[index] = "개명좀해임마"
//   // }

// console.log(value);

// });

// console.log(mapping);

