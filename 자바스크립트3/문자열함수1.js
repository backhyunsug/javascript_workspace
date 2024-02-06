let s="red,green,blue,cyan,magenta,sky,purple";
//split: 문자열을 특정기호 기반으로 분리하고자 할때 split 함수
let results = s.split(",");
console.log( results );
//join: 문자배열을 받아서 문자열로 합쳐주는 함수이다. 
console.log( results.join(" "));
console.log( results.join(","));
console.log( results.join("\t")); //탭키
console.log( results.join("\n"));

console.log("123456","*");
console.log("한글","*");
console.log( "한글".padStart(6), "*");

console.log("1".padStart(3, 0));// 001, 002, 003 ....
for(i=90; i<=100; i++)
{
    console.log(i.toString().padStart(4, 0));
}

let today = "2024-02-05";
console.log( today.substring(0,4)); //start, end위치 
console.log( today.substring(5,7));//start, end위치 
console.log( today.substring(8,10));//start, end위치 
//맨 마지막은 비어놓는다. substring 함수의 인덱싱 방식이 언어마다 다르다
//시작,길이    또는 시작위치,엔딩위치, 엔딩위치는 빼고 엔딩위치-1까지만
//출력한다

console.log( today.slice(0,4)); //요즘에 많이 사용함 
//trim, 문자열 앞뒤에 쓸데 없는 공백을 제거한다. 
//  input 태그에 아이디 입력시 스페이스test스페이스
s = "    test   ";
console.log(s);
console.log(s.trim());

/*
ascii : america standard code institute
        school, house 미국 풀어쓰기 
        0~9, a~z, A~Z, ,,,, 128글자 이내더라 
        ascii코드라는 표준안을 만든다. 7bit , 1비트남는다
        1비트는 패리티비트라고 한다. 

아스키코드 : 
패리티비트 : 짝수패리티와 홀수패리티가 있다. 
            짝수패리티의 경우에는 1의 개수가 짝수가 되게 한다. 
            홀수패리티의 경우에는 1의 개수가 홀수가 되게 한다. 
해밍코드 : 검출과 동시에 수정도 가능하게 하는 알고리즘이다. 
체크섬 : 주민번호나 통장번호처럼 보안을 요하는 정보를 기록할때
앞의 데이터들에 연산식이 존재해서 연산수행 결과가 맨마지막 번호하고 
맞아야 한다.
 
*/

console.log("0","0".charCodeAt(0));
console.log("A","A".charCodeAt(0));
console.log("a", "a".charCodeAt(0));

//숫자를 문자로 바꿔주는 parseInt 함수 
//x = "123";    [49,50,51]
//x = 123;      //123->2진수로 바꾸어 저장함 

//s에 문자가 들어가있으면 -1을 반환한다. 
//숫자로 다 되어 있으면  123을 만들어 반환하는 함수를 작성하세요 
function myParseInt(s)
{
    let result = 0;
    for(i=0; i<s.length; i++)
    {
        if( s.charCodeAt(i)<48 || s.charCodeAt(i)>57)
            return -1;
        result = result * 10 + (s.charCodeAt(i)-48);
    }
    return result;
}
//옛날 자료구조 - linked list, 세화출판사 c로 배우는 알고리즘 
result = myParseInt("123") + myParseInt("456"); //579이 나와야 한다.
console.log( result ); 
 
console.log( String.fromCharCode(65) ); //A
console.log( String.fromCharCode(97) ); //a

let holiday="한글날";
let month = 10;
let day = 9;

//ff라는 문자가 하는일 
//문자열에 함수를 특이하게 적용할 수 있다. --
function ff(txts, a, b,c ){
    console.log( "txts ==> ", txts); 
    //첫번째파라미터는 전달된 문장에서 ${}를 제외한 단어들을 배열형태로 
    console.log( "a ==> ",a); //${} 를 순서대로
    console.log( "b ==> ",b);
    console.log( "c ==> ",c);
}
//함수이름만 괄호 안됨 
s = ff`${holiday}는 ${month}월 ${day}일입니다.`;

name ="홍길동";
age = 34;
s = mystr`${name}의 나이는 ${age}입니다.`;
function mystr(texts, param1, param2)
{
    console.log( texts );
    console.log( param1 );
    console.log( param2 );
}

//98페이지 
function upperToLower(s)
{
    //대문자 찾아서  *소문자*- 로 바꿔라 
    let regExp = new RegExp(/[A-Z]/g);
    //replaceAll(패턴)
    let r = s.replaceAll(regExp, (str)=>{
        //console.log(str);
        return "*"+str.toLowerCase()+"*-";
    });

    return r;
}

console.log( upperToLower("Senior Coding Learning JS"));

//전화번호를 정확한 형식으로 출력하는 함수 작성하기 
//  입력태그에 숫자 넣으면 자동으로 형식을 맞추는 함수 만들때 유용

console.log( "01012345678".replace(/(\d{3})(\d{4})(\d{4})/, 
  '$1-$2-$3'));

function telfmt(phone)
{
    //phone?length : phone 객체 null 값 가능 
    //phone객체가 null이면 phone.length는 undefined가 온다 
    const len = phone?.length?? 0; //undefined 일때 0을 넣고 
                //undefined가 아니면 phone.length;
    if(len<7) //에러임 
        return phone;  //그냥 보냄 

    if(len<=8) //7이거나 8인경우에 2439890 또는 67899087
        return `${phone.substring(0, len-4)}-${phone.substring(len-4)}`;
    
    //2,3,4  3,3,4, 3,4,4
    unit1=3;
    unit2=4;
    unit4=4;
    
    if(phone.startsWith("02"))
    {
        unit1 = 2;
        unit2 = len==9?3:4;
    }

    unit3 = len - unit1 - unit2;
    //리터럴이 아니고 문자열로 만들면 \d  -> \뒤에 별도의 제어문자로
    // \ 문자가(한글폰트에서는 돈표시) escape문자로 인식한다.ㅣ  
    let regExp = 
      new RegExp(`(\\d{${unit1}})(\\d{${unit2}})(\\d{${unit3}})`);
    return phone.replace(regExp, "$1-$2-$3");
}

console.log(telfmt("12334"));
console.log(telfmt("1233456"));
console.log(telfmt("12334567"));
console.log(telfmt("0200001111"));








