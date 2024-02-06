//배열 복사 => 깊은복사 얕은복사 
let a = [1,2,3,4,5,6,7,8,9,10]; //숫자배열이나 문자배열이나 객체배열이나 같다 
let b = [11,12,13];
let c = null;

// console.log( "a 배열의 크기 ", a.length);
// console.log( "b 배열의 크기 ", b.length);
// console.log( "c 배열의 크기 ", c.length);
//TypeError: Cannot read properties of null (reading 'length')

//객체? - 이 객체참조변수가 null값일 수도 있다. 
console.log( "a 배열의 크기 ", a?.length);
console.log( "b 배열의 크기 ", b?.length);
console.log( "c 배열의 크기 ", c?.length);

//if문 안쓰고  null이냐고 물어봣 null이면 []를 줘서 객체 할당함
//c = ["A", "B", "C"];
c = c ?? [];
console.log( "c 배열의 크기 ", c?.length);

//본래의 배열은 프로그램 수행 도중에(실행시간) 메모리 위치나 메모리 크기 변경불가 
//=>C언어의 포인터(실행시간에 메모리위치나 크기변경가능)을 없애면서 
//현재 언어에서의 배열은 index사용말고는 나머지는 공통사항없음 
console.log( a[0] );//연속된 메모리공간에 데이터가 저장된다. 첨자를 사용한다. 공통점 
//C하고C++을 제외하고는 모두 동적 생성이다. 변수 자체는 스택에 만들어지지만 
//객체는 힙공간에 만들어진다. 
/*
   a = [1,2,3];   //이 메모리를 100번지라고 해보자 
   a = [4,5,6];   //새로 메모리 만들고 200번지라고 해보면 a 에는 200이 있고 
                    아까 100번지는 아무도 안쓰면 GC가 메모리 부족할때 알아서 수거해간다
                    gabage 
*/

//참조변수로 : 참조(주소)를 복사 - 얕은카피 
//a와 b가 참조하는 메모리가 같음 
b = a;  //soft copy 또는 얕은 복사 
b[0]=88;
console.log(a);
console.log(b);

c = [...a];  //깊은복사, 새로 메모리가 만들어진다. 
c[0]=1; 
c[5]=99;
console.log( a );
console.log( c );
//Iterable : 반복될수 있는 => 어떤 대상이 반복적이 가능해야 forEach사용가능 

//결론 : 클래스 사용자가 클래스 내부구조를 몰라도 사용이 가능해야 한다. 
//실제 내부 데이터 구조가 선형인지 또는 비선형인지(Tree, Graph)
//또는 연속된 공간에 존재하는비 비연속공간에 존재하는지 알필요 없도록 
//클래스 설계자가 컬렉션류 클래스들이 forEach구문을 이용해 클래스 
//내부 인자들을 접근하는 방법 : Iterable  
a.forEach( (item)=>{
    console.log( item, typeof item);
});

c = [{"name":"A", "age":5}, 
    {"name":"B", "age":15},
    {"name":"C", "age":7},
    {"name":"D", "age":9},
    {"name":"E", "age":12}];

c.forEach( (item)=>{
    console.log( item, typeof item);
})

//배열합치기 
let d = a.concat([9,10,11]); //concat가 새로운 배열 객체를 만들어서 반환한다 
console.log( c );
console.log( d ); 

let e = d; 
//delete []d; //C++이면 이런게 필요하다. 
d = d.slice(0, 5); //d가 slice함수의 결과를 받는 순간 원래 d가 가지고 있던 주소는 
                   //없어짐. 
console.log( d );

""