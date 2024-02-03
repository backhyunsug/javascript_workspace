
let x, y;

x = 7;
y = ++x; //전치연산자 ++ 연산자의 우선순위가 젤 높아진다.
         //  ++x  먼저 수행하고 = 수행한다. 
console.log("x = ", x, "y=", y);

x = 7;
y = x++; //후치연산자 ++연산자의 우선순위가 가장 낮아진다. 
         //y=x x++이 실행된다.  가급적 단독으로 쓰자 
console.log("x = ", x, "y=", y);

let i=1;
while(i<=10)
{
    console.log("i=", i);
    i++;  //가급적 이런식으로 외에는 쓰지 않는것이 좋다 
}

x=7;
y = ++x + x++;  //이런식의 코딩은 하지 말아라 
//++x - x=8   y = 8 + x++;   y= 8+8  x++
console.log("x = ", x, "y=", y);

let p, q;

//일반함수로 만들면, 함수가 뒤에있어도 호출이 가능하다. 
//화살표함수나 함수표현식 : function(x, y) 의 경우는 
//변수에 함수의 주소만 저장이라 변수가 미리 존재해야 한다 
let output =(x, y)=>{
    console.log("x = ", x, "y=", y);
}

x=y=5;  //변수 여러개를 동시에 초기화가 가능하다 
output(x, y);

q = (p=x=1, y=2, z=3);// 연산수식들을 괄호로 묶어주면 차례대로 수행된다.
/*
x=1
p=x
y=2
z=3
q=z=3
*/
console.log("x = ", x, "y=", y, "z=",z, "p=",p, "q=",q);
//거듭제곱 - 다른언어에 없음
console.log(2**3, Math.pow(2, 3)); 
//Math - 클래스 :  클래스 자체로 사용을 못한다. 객체를 만들어야 사용이 가능하다
//클래스는 반드시 객체를 만들어야 하는가? 
//클래스 : 관련있는 데이터와 함수의 결합 
//        1. 데이터와 함수가 결합이 된다. 
//        2. 데이터만 있는 클래스도 가능하다.(변수만) 
//        3. 함수만 존재하는 클래스도 가능하다 
//           (보통 객체 안만들거나 하나만만들어 사용하게)
//           Math - 거듭제곱, 반올림, 코사인, 사인, 탄젠트, ,,,,,,,제곱근
//           함수나 변수에 static 키워드가 붙으면 전역공간(static공간)
//

let arr;   //아무것도 할당을 하지 않음 , undefined
//<input type="text" name="userid"/> 
//document.getElementById("userid").value="값";
//Cannot read properties of undefined (reading 'value')

console.log( arr );
//console.log( arr.length );//Cannot read properties of undefined (reading 'length')

arr = [1,2,3];
console.log( arr, typeof(arr)); //[1,2,3] object 
console.log(arr.length); 
//Array객첵다 할당되면서 그에 필요한 메서드나 변수를 사용할수있게된다.

let arr2; 
console.log( arr2?.length ); //예외가 발생하지 않고 undefined가 출력된다.

/*
? => 자바의 Optinal 에 해당된다.
? 이 객체가 제대로 된 객체값을 가질수도 있고 undefined 일수도 있다. 
console.log( arr2.length); 예외가 발생,브라우저라면 예외가발생해도 dom구조 출력하는데 
아무문제가 없고 그냥 스크립트만 안돌아간다. 치명적이지 않다. 
nodejs - 서버사이드 스크립트 플랫폼, 사이트가 다운된다. 
         웹서버가 예외에 의해서 완전 다운되는 상황 
객체참조변수? - 이 객체 참조변수에는 객체가 있을 수도 있고 없을수도 있다. 
Optional<Test>; 
*/

//옛날에는 
let arr4;

if(arr4 == undefined)
{
    arr4 = []; //객체를 생성한다. 
}

console.log( arr4, arr4.length);

let arr5;
arr5 = arr5 ?? [];  // ?? - undefined  라면 []를 만들어 전달해라 
console.log(arr5?.length);

//false=0   true =1 
console.log( 1+true, 1+false); 

//0이 아닌 모든값은 true로 알아듣는다 
//c가 boolean 타입이 존재를 안했음 0-false 나머지-true로 판단함
//if( err) {}
if( -5)
{
    console.log( "************");
}

x = 3;
y = 7;
//둘중 더 큰값을 알아내고자 할때 
max = x>y?x : y;
console.log( max);

a = 1
b = 2
c = (a++,b++);  
// 1. ()먼저 실행후   c = (a, b)   수행 후 
// c = b;
// a++ 실행 그리고 b++ 실행
console.log( a,b,c);

d = (a--, b+a);  // d=a,b+a, a-- 시스템도 이상한짓을 하고 있다. 
console.log( a,b,c,d);

// <a href="javscript:goAdd()">클릭</a>
// <a href="javascript:void(0)">클릭</a>
// <a href="#none">클릭</a>