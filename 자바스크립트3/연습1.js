const n=123; 

console.log( typeof n );  // typeof -연산자이다. 함수아님, 괄호상관없음 
console.log( typeof (n) );

const bi=1230000000000000000000n;  //접미어 숫자n 
console.log( typeof (bi) );

const s = 'abc';  //string : primitive
const ss = new String('abc'); //Object
console.log( typeof (s) );
console.log( typeof (ss) );

const s2='abc';
const ss2 = new String('abc');

console.log( s == s2);  //true
console.log( ss2 == ss); //false -- 
//object == object 일때는 서로 같은 메모리 공간을 공유하는지 물어본다 

console.log( s == ss);

let c = n+Number(bi); 
console.log("c = ", c, typeof(c));

console.log( "ss" + {id:1}); //ss[object Object]
console.log( 5 + {id:1});

console.log( "2"== 2);
console.log( ""== 0);  // "" => 0
console.log(null == 0);  //false다 
console.log(null == ""); //false다 
console.log(undefined == ""); 
console.log(undefined == 0); 

console.log( "2"=== 2); //   === 자동형전환을 하지 않는다 !==
console.log( ""=== 0); 

console.log("4"+"5");
console.log("4"*"5");

i=100;
console.log( i.toString() ); //ptimitive타입 => Number객체로전환
//console.log( 100.toString() );==>자바스크립트

let user="kim";
user.age=23;
console.log( user.age  );

console.log( user );


/*
스코프 : 변수가 자신의 영향력을 미치는 범위이다. 

전역변수 : 함수의 외부에 선언되는 변수, 모든 함수가 이 변수를 
          사용할 수 있다. 문제는 전역변수를 많이 사용하면 
          각 함수간의 결합력을 강화하여(좋은말 아님)
          한 함수에서의 변화가 다른 함수에 연쇄반응을 일으켜서 
          프로그램 유지 보수에 좋지 않다. 
          가급적 아주 제한적으로 사용하는것이 좋다  
지역변수 : 함수의 내부에 선언되는 변수. 그 함수를 호출할때 비로소 
           메모리가 할당되며 함수의 종료즉시 메모리로 부터 제거된다. 
           영향력이 함수내에만 존재한다. 
           가급적 많이 쓰자 
객체 지향이 나오면서 변수의 스코프가 좀더 새분화되어서 
if() {} 블락이나 for(){} 등의 블럭내에서만 존재하는 변수도 생겼다 
이 블락안에 만들어진 변수들은 그 불락 안에만 존재하는데 
자바스크립트의 var 을 이용한 선언은 이부분이 적용되지 않았다 
함수단위의 스코프는 var도 적용되지만 for문이나 while 문등에서 지역적으로 
선언된 변수에 대해서는 별도로 인식하지 않고 모두 같은 것으로 인식하는 
상황을 호이스팅이라고 한다. => 그래서 let 가 나왔고 let의 경우에는 
if,for, while 등의 블락내에서만 존재하는 변수를 선언할 수 있다 
앞으로의 변수 선언은 let 키워드를 이용해 선언하도록 권장하고 있다*/