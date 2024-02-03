/*
    primitive <=> object
    값타입 => Wrapper class => 참조타입(Object)로 전환된다. 

*/
console.log( Number);
console.log( typeof Number);
console.log( Number.EPSILON);
//Number 형으로 표현될 수 있는 1과 1보다 큰 값 중에서 가장 작은 값의
// 차입니다.
console.log( Number.MAX_VALUE);
console.log( Number.MIN_VALUE);

console.log( typeof Math);

/*
    toFixed(2) :  소수점이하 자릿수 지정하는 함수 
                  2를 지정하면 2자릿수 보다 하나아래에서 반올림을 한다 
*/
console.log(  2.34455555.toFixed(2));
//console.log(  2.toString());
console.log(  2.34655555.toFixed(2));

//https://perfectacle.github.io/2017/08/04/ES6-EPSILON/
//컴퓨터 입장에 double 형이 있다.
//동일한 메모리 크기 : 정수=>2진수로 바꾸어 저장 
//실수-부동소수점 형식 
//812.34 => 0.81234 *10의 3승 
//3승 => 지수부 
//0.81234 => 가수부  정규화  
//EPSILON  실수값을 2진수로 처리하면 약간의 오차가 발생한다 
//0을 제외하고 가장 작은 숫자는 무엇일까?

x = 0.2;
y = 0.3;
z = 0.1;
let equal = Math.abs(x - y + z) < Number.EPSILON;
console.log( equal , x - y + z);

for(i=0; i<=1; i+=0.1)
{
    console.log( i, i.toFixed(1) );
}

function addPoints( x, y)
{
    //x , y : 매개변수,파라미터,가인수, 실인
    x = x+3;
    y = y+7;
}
// 매개변수를 함수에 전달하는 방법은 
// 1. call by value 
// 2. call by pointer -- C언어만 지원한다,. 
// 3. call by reference -- 참조를 전달하면, 변수의 주소를 함수에 전달 
//                        함수안에서 값 전달이 가능하다. 
//                        함수안에서 함수밖의 변수값을 수정할 수 있다. 

addPoints(0.123456, 2);  //함수를 호출하면 
//스택이라는 공간에 함수가 자리를 차지한다.
//매개변수 공간을 두개 확보하고 x 라는 매개변수에 값 0.123456을 복사하고 
//y라는 변수에는 값 2를 복사하고 
a = 3.45;
b = 2.3;
addPoints(a, b);
console.log( a, b);

//함수안에서 함수밖에 있는 변수를 바꾸고 싶다 
//매개변수로 배열이나 객체 참조를 넘기면, 값변경이 가능하다 
let points = {x:2.3, y:3.65};
function changeValue(a)
{
    a.x += 7;
    a.y += 8;
}

changeValue( points );//points :객체 참조변수, 객체의 주소를 전달해준다
console.log( points );

//소수점이하 자릿수가 서로 다를때 자릿수 맞추기
function addPoints2(x, y )
{
    let sx = x.toString(); //문자열로 바꾼다. 
    // console.log(sx,  sx.length );
    // console.log( sx.indexOf(".") );
    //0.23456 :문자열의 7이 된다.  
    //. 위치는 : 1
    let xlen = x.toString().length - x.toString().indexOf(".")-1;
    let ylen = y.toString().length - y.toString().indexOf(".")-1;
    let max = xlen>ylen?xlen : ylen;
    console.log( xlen, ylen);
    return (x+y).toFixed(max);
}

console.log( addPoints2(0.23456, 0.1));

function getLen(x)
{
    let sx = x.toString().split(".");
    //세퍼레이터 앞뒤로 자름 - 배열을 만든다. 
    console.log(sx);
    let xlen=0;
    if(sx.length>1) xlen= sx[1].length; 
    return xlen;
}

function addPoints3(x, y )
{
    len1 = getLen(x);
    len2 = getLen(y);
    max = len1>len2? len1 : len2;
    return (x+y).toFixed(max);
}
//split, join  함수
console.log( addPoints3(0.23456, 0.1));
console.log( addPoints3(0.23, 2312.2222));
