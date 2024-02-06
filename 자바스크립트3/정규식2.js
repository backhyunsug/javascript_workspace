reg = /cat/;     // reg = new RegExp(/cat/); 같다
let sentence1 = "I love my cat";
let sentence2 = "I love my dog and Cat";
console.log( reg.test(sentence1), reg.test(sentence2));
//cat이라는 단어가 문장에 존재하면 true이다. true, false 

reg = /cat/i; //대소문자 상관없이   true, true 
console.log( reg.test(sentence1), reg.test(sentence2));

reg = /^cat/i; //cat로 시작하는    false, false, true
let sentence3 = "Cat is lovely" 
console.log( reg.test(sentence1), reg.test(sentence2), 
             reg.test(sentence3));

reg = /cat$/i;   //true false false
console.log( reg.test(sentence1), reg.test(sentence2), 
reg.test(sentence3));

reg = /c.t/;   //.  c하고 t사이에 한글자만 줄바꿈을 제외한 모든 문자
console.log( reg.test("ct")); //한글자가 부족해서 false  
console.log( reg.test("cat"));  //true
console.log( reg.test("cccct"));  //단어로 찾지 않기때문에 cct
console.log( reg.test("c3212c1t")); //c1t 패턴이 맞는다 그래서 true

reg = /l....l/;  // l과 l사이에 글자가 4개가 있어야 한다 
console.log( reg.test("l1234l"));
console.log( reg.test("llllll1234l"));
console.log( reg.test("llllll1234l2iusjsjdk"));
console.log( reg.test("llllllaaaalaaaaa"));

// ----------- [] ------- 괄호안의 문자들 중 하나 
console.log( "[KkcC]"); //해당문자열을 나열하면 그중에 한글자 맞으면
                        //가능하다

console.log( /[KkcC]/.test("korea"));  //true
console.log( /[KkcC]/.test("Korea"));  //true
console.log( /[KkcC]/.test("corea"));  //true
console.log( /[KkcC]/.test("Corea"));  //true
console.log( /[KkcC]/.test("abc"));    //true
console.log( /[KkcC]/.test("aKbewx"));  //true

console.log("/^[KkcC]/   K나 k 나 c나 C나로 시작하는");
console.log( /^[KkcC]/.test("korea"));  //true
console.log( /^[KkcC]/.test("Korea"));  //true
console.log( /^[KkcC]/.test("corea"));  //true
console.log( /^[KkcC]/.test("Corea"));  //true
console.log( /^[KkcC]/.test("abc"));    //false
console.log( /^[KkcC]/.test("aKbewx"));  //false 

//a[0123456789]b  -> a[0-9]b 
//숫자 앞뒤로 a와 b가 있는 


console.log("/a[0-9]b/  a와 b사이에 숫자가 반드시 하나 존재해야한다");

console.log(/a[0-9]b/.test("ab")); //false
console.log(/a[0-9]b/.test("a9b"));  //true
console.log(/a[0-9]b/.test("a99b"));  //false
console.log(/a[0-9]b/.test("aaaa8b3edddd")); //true
console.log(/a[0-9]b/.test("cwowaba8b2212")); //true

// [^0-9] 일 경우에는 숫자를 배제하고 , ~를 제외하고의 의미임 
// [] 기호랑 쓰일때 ^ 다른의미를 갖는다
// ^[0-9]  : 숫자로 시작하는데 
// ^[^0-9]  : 숫자로 시작하면 안된다. 첫글자가 숫자이면 안된다.

console.log("/a[^0-9]b/  a와 b사이에 숫자를 제외한 문자가 반드시 하나 존재해야한다");
console.log("/a[^0-9]b/", /a[^0-9]b/.test("ab"));//false 
console.log("/a[^0-9]b/", /a[^0-9]b/.test("a b"));//true공백도가능
console.log("/a[^0-9]b/", /a[^0-9]b/.test("a$b"));//true 
console.log("/a[^0-9]b/", /a[^0-9]b/.test("a3b"));//false
console.log("/a[^0-9]b/", /a[^0-9]b/.test("aa321avb"));//true 
// a$b, avb 가 된다. 

//첫글자가 숫자면 안될때 - 첫글자만 ^[^0-9]
console.log("/^[^0-9]/ 첫글자가 숫자면 안된다.");
console.log("/^[^0-9]/", /^[^0-9]/.test("1abc"));//false 
console.log("/^[^0-9]/", /^[^0-9]/.test("abc"));//true
console.log("/^[^0-9]/", /^[^0-9]/.test("1xebdes1"));//false
console.log("/^[^0-9]/", /^[^0-9]/.test("xebdes1123"));//true

//문자라고 하나라도 포함되면  true 
//  /[^0-9]/ 
console.log("/[^0-9]/", /[^0-9]/.test("1abc"));//false
//숫자가 하나라도 포함되면  true  
console.log("/[0-9]/", /[0-9]/.test("1abc"));//false 

console.log(" --------  *  -------");
console.log(" 0번이상 반복되는 ");
//a라는 글자가 b앞에 0번있어도 되고 1번있어도 되고 n번 있어도 된다.
//a* a가 0번이상 반복되면 
console.log( "/a*b/   b  true",  /a*b/.test("b"));
console.log( "/a*b/   ab  true",  /a*b/.test("ab"));
console.log( "/a*b/   ccccbaaaaa  true",  /a*b/.test("ccccbaaaaa"));
console.log( "/a*b/   ccccbaaaaa  true",  /a*b/.exec("ccccbaaaaa"));

// ls * :전체 시스템에 있는 파일을 모두 검색해봐라 
console.log(" --------  + -------");
console.log(" 1번이상 반복되는 ");
//a+ a가 1이상 반복되면 
console.log( "/a+b/   b  true",   /a+b/.test("b"));
console.log( "/a+b/   ab  true",  /a+b/.test("ab"));

console.log(" --------  {n}번 반복 -------");
console.log("/[0-9]{3}/",  /[0-9]{3}/.test("1abc")); //false
console.log("/[0-9]{3}/",  /[0-9]{3}/.test("123abc")); //true
console.log("/[0-9]{3}/",  /[0-9]{3}/.test("a1299bc")); //true
console.log("/[0-9]{3}/",  /[0-9]{3}/.test("a19bc"));//false
console.log("/[0-9]{3}/",  /[0-9]{3}/.test("aa12aa998bc")); //true

/*
\w : 문자의 의미이다.
\d : 숫자
\b 시작과 끝에 공통된 형식일때  
*/ 
function ValidateEmail(mail) 
{
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))
    {
        return (true);
    }
    return (false)
}

//전화번호  [0-9]{2,3}-[0-9]{3,4}-[0-9]{4}
// =>   /\d{2,3}-\d{3,4}-\d{4}/
// 010-1111-2222, 02-0909-9999, 031-233-4444

regexp = new RegExp(/\d{2,3}-\d{3,4}-\d{4}/);
console.log( regexp.test("010-1111-2222"));
console.log( regexp.test("02-0909-9999"));
console.log( regexp.test("031-233-4444"));

// \b - 단어의 경계를 결정짓는다. boundry의 약자이다
console.log( regexp.test("123010-1111-2222"));  //true

regexp = new RegExp(/\b\d{2,3}-\d{3,4}-\d{4}\b/);
console.log( regexp.test("123010-1111-2222")); //false
console.log( regexp.test("123 010-1111-2222"));

 













