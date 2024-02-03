
let foods = ["떡볶이", "피자", "보쌈", "청국장"];

foods2 = foods; //객체배열을 복사했음 
console.log(foods2);
console.log(foods);

foods[0] = "탕수육";
console.log(foods2);
console.log(foods);

//깊은복사 - 함수를 따로 만들거나 다른 연산자 사용해야 한다.
foods3 = []; //새로운 객체가 만들어진다. 
for(i=0; i<foods.length; i++) //데이터를 복사한다 
    foods3.push( foods[i] );

foods3[0]="갈비탕";
console.log( foods, foods2, foods3 );

//깊은복사 
let foods4 = [...foods];  //배열 복사 연산자 ... 
foods4[0] = "도가니탕";
console.log( foods4, foods);




