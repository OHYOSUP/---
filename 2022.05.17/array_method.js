const arrExample = ["피카츄", "라이츄", "파이리", "꼬부기", "버터풀", "야도란" , "피존투", "또가스", "우린", "서로", "모습은", "달라도"];
const array1 = ["뮤츠", "뮤", "신뇽", "망나뇽", "리자몽", "거북왕" ,"이상해꽃"];
const array2 = [1, 3, 5, 2, 4, 6, 8, 10, 12, 20];

// console.log(arrExample.concat(array1));
// console.log(array2.copyWithin(0 ,3));

// console.log(arrExample.copyWithin(0 ,3));

// const test = (green) => green > 0;
// console.log(array2.every(test));

// console.log(arrExample.fill("어차피 뮤츠가 다이김", 0));

const dummyText = ["Lorem", "Ipsum", "is", "simply", "dummy", "text", "of", "the", "printing", "and", "typesetting", "industry.", "Lorem", "Ipsum", "has", "been", "the", "industry's", "standard", "dummy", "text", "ever", "since", "the", "1500s,", "when", "an", "unknown", "printer", "took", "a", "galley", "of", "type", "and", "scrambled", "it", "to", "make", "a", "type", "specimen", "book.", "It", "has", "survived", "not", "only", "five", "centuries", "but", "also", "the", "leap", "into", "electronic", "typesetting,", "remaining", "essentially", "unchanged.", "It", "was", "popularised", "in", "the", "1960s", "with", "the", "release", "of", "Letraset", "sheets", "containing", "Lorem", "Ipsum", "passages", "and", "more", "recently", "with", "desktop", "publishing", "software", "like", "Aldus", "PageMaker", "including", "versions", "of", "Lorem", "Ipsum.","been", "the", "industry's", "standard", "dummy", "text", "ever", "since", "the", "1500s,", "when", "an", "unknown", "printer", "took", "a", "galley", "of", "type", "and", "scrambled", "it", "to", "make", "a", "type", "specimen", "book.", "It", "has", "survived", "not", "only", "five", "centuries", "dummy", "text", "of", "the", "printing", "and", "typesetting", "industry.", "Lorem", "Ipsum", "has", "been", "the", "industry's", "standard", "dummy", "text", "ever", "since", "the", "1500s,", "when", "an", "unknown", "printer", "took", "a", "galley", "of", "type", "and", "scrambled", "it", "to", "make", "a", "type", "printer", "took", "a", "galley", "of", "type", "and", "scrambled", "it", "to", "make", "a", "type", "specimen", "book.", "It", "has", "survived", "not", "only", "five", "centuries", "but", "also", "the", "leap", "into", "electronic", "typesetting,", "remaining", "essentially", "unchanged.", "It"];

// const test = dummyText.filter(word=>word === "of");

// console.log(test);

// const test = dummyText.find(word => word.length > 6);
// console.log(test);

// arrExample.forEach((what)=>console.log(what));

// arrExample.forEach(element=> console.log(element));

const test1 = array1.map((x) => x + "은 ");
const test2 = arrExample.map(x => x + "보다 강하다");

// console.log(test1);
// console.log(test2);

const test3 = test1.map(x => x + test2);
// console.log(test3.join());
// console.log(test1 + test2);


// console.log(array2.unshift(array1[2],0));
// console.log(test3.push("사실 뻥이다"));
// console.log(test3);

const test = array2.reduce((x, y) => x + y, 12);
console.log(test.toString());