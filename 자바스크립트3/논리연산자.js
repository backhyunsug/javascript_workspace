
console.log(" 0 == null : ",  0 == null);
console.log(" 0== false : ", 0== false);
console.log(" null== false : ", null == false);
console.log(" undefined== false : ", undefined == false);
console.log(" undefined== null : ", undefined == null);

//빈문자열만 false이다. 
console.log(" 'false'== false : ", 'false'== false );
console.log(" '0'== false : ", '0'== false );

let a=[], b='', c='false', d='0';
console.log( a?'T':'F', !!b, !!c, !!d);

console.log( "공백이 false냐" , ''==false );
/*
a 는 비어있는 객체   true 객체가 이아니면 'T' null 이면 'F'
a= []  

!b => 이때 b에 있는 '' -> boolean -> false로 해석되었음 
b => false;
!b => true; 
!!b => false;4

c = 'false'; => false로 인식할까 boolean의 false은 0을 말함 
'false' ==>   true

b=''    b가 true냐 물어봄  ''공백이고 => 0 =>false로 본다 
!!b     !-true=>false, false=>true  !!b 
원래는 '' -> false로 바뀜 

등가연산자는 엄격한 등가 연산자를 사용해라 ===, !== 이걸 써라 권장 
엄격한 등가 연산자는 자동형전환을 하지 않는다. 안심시스템이다.; 
*/
console.log( '0' === false);
console.log( '' === false);

/*
&& =>양쪽의 수식이 둘다 true 여야  true이다 나머지는 false이다.  
|| =>양쪽의 수식중 둘중하나라도 true 이면 true이다. 둘다 false일때 거짓이다 
!  => true => false로 false=>true 
*/

