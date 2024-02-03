//i (ignore case) : 대소문자를 구별하지 않고 검색한다.
//g (global) : 문자열 내의 모든 패턴을 검색한다.
//m (multi line) : 문자열의 행이 바뀌더라도 검색은 계속한다.

//정규식에 test라는 함수가 있다. 문자열을 전달하면 패턴이 일치하는 문장이 있을 경우에 
// true 없을 경우에 false를 반환한다. 
/*
/패턴/옵션 -- 옵션은 i,g,m등을 사용한다. 
*/
//https://velog.io/@purplew/Javascript-%EC%A0%95%EA%B7%9C%ED%91%9C%ED%98%84%EC%8B%9D
//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/match
//https://www.w3schools.com/jsref/jsref_obj_regexp.asp
/*
 *   test함수  - 존재 유무만 판단한다   문자열내에 정규식이 존재하면 true  존재하지 않으면  false를 반환한다
 */
//test함수 - 정규식객체.test(문자열);  
const regexp = new RegExp(/like/i); //생성해도 되고 그냥 기술해도 된다. 
let s = `
I like star
red star
blue star
I like cat
i like dog
My Dog is pretty
I love my dog
`;
console.log( regexp.test(s));
console.log("대소문자 구분했을때 ",   new RegExp(/Like/).test(s));
console.log("대소문자 구분안했을때 ",  /Like/i.test(s));
console.log("대소문자 구분안했을때 ",  /Like/gi.test(s));  //전체검색

/**********
 *  exec 함수 - 조건에 부합하는 결과를 배열로 반환한다. 
 *  단, 조건에 부합하는 결과가 1개 이상이라도 무조건 부합하는 결과의 첫번째 값을 반환한다.
*/

console.log(regexp.exec(s));

/*
[
  'like',
  index: 3,
  input: '\n' +
    'I like star\n' +
    'red star\n' +
    'blue star\n' +
    'I like cat\n' +
    'i like dog\n' +
    'My Dog is pretty\n' +
    'I love my dog\n',
  groups: undefined
]
*/

//구룹으로 나누기  정규식에 ()를 사용한다 
s2 = `
오늘은 2024-01-31  입니다.
`;

result = /\d{4}-\d{2}-\d{2}/.exec(s2);  
console.log(result, result[0],  result[1], result[2], result[3] );

result = /(\d{4})-(\d{2})-(\d{2})/.exec(s2);  //괄호로 묶어 주었을때
console.log(result, result[0],  result[1], result[2], result[3] );

//Named Capturing Group 이란?
//표현식의 한 기능으로 패턴에 매칭된 그룹에 특정한 이름을 주는 것이다.
//(?<name>pattern) 와 같은 문법으로 사용 가능하다.

s2 = `
오늘은 2024-01-31  입니다. 내일은 2024-02-01입니다
`;
result = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/.exec(s2);
console.log( result );

s2 = "홍길동 전화번호:010-0000-0001  023-1022-0100"
result = /(?<a>\d{3})-(?<b>\d{4})-(?<c>\d{4})/.exec(s2);
console.log( result );
console.log("통신사", result.groups["a"]);
console.log("국", result.groups["b"]);
console.log("번호", result.groups["c"]);

//이메일일때 
let regex = new RegExp('[a-z0-9]+@[a-z0-9]+.[a-z]{3}');
s2 = "홍길동 이메일 : eee@naver.com11";
result = regex.exec(s2);
console.log( result );

regex = new RegExp('[a-z0-9]+@naver.com');
s2 = "홍길동 이메일 : eee@naver.com";
result = regex.exec(s2);
console.log( result );

// /**************          String이 제공한다. *****************************/
// //match 함수  : 사용법이 다름, 정규식이 아니라 String에 있는 함수이다. 
// //    문자열.match(정규식)
// // 정규식 조건에 부합하는 문자열을 배열 형태로 반환해준다.
// // 만약 조건에 부합하는 문자열이 없으면 null을 반환한다

// console.log("match 함수-----------------"); //g옵션이 있을 경우 배열을 준다 
// console.log(s.match(/like/i));
// console.log(s.match(/like/ig));

// s2 = "홍길동 전화번호:010-0000-0001  023-1022-0100"
// result = s2.match(/(?<a>\d{3})-(?<b>\d{4})-(?<c>\d{4})/g);  //더 쓸모있음 
// console.log(result);

// //search 함수 
// // 정규식 조건에 부합하는 문자열의 index 번호를 반환해준다.
// // 만약 조건에 부합하는 문자열이 없으면 -1을 반환한다.

// console.log("search 함수-----------------");
// console.log(s.search(regexp));
// //replace
// //조건에 부합하는 문자열을 찾아, 그 텍스트를 다른 텍스트로 변환시킨다.

// console.log("replace 함수-----------------");
// a1 = s;
// console.log(a1.replace(/star/i, "moon")); //일부만 대체

// a2 = s; 
// console.log(a2.replace(/star/ig, "moon")); //전체 대체

// //split
// console.log(s.replace(/\n/ig, " ").split(" "));
// console.log(s.split(/\n/));
// // 결과값 : ["RegExp", "Study"]
// //조건에 부합하는 값을 기준으로 대상을 자른 후, 배열로 저장한다.
// //만약 split할 대상에 아무런 입력도 하지 않을 시(여백도 포함해서), 
// //대상을 하나의 배열로 반환한다.



// phone = `
//     01000000000
//     0234569876
//     2345680
// `;

// const telfmt = tel => {
//     const len = tel?.length ?? 0;
//     if (len < 7) return tel;
  
//     if (len <= 8) return `${tel.substring(0, len - 4)}-${tel.substring(len - 4)}`;
  
//     const c = 4;
//     const a = tel.startsWith('02') ? 2 : len >= 12 ? 4 : 3;
//     const b = len - a - c;
  
//     const regex = new RegExp(`(\\d{${a}})(\\d{${b}})(\\d{${c}})`);
//     return tel.replace(regex, '$1-$2-$3');
//   };

// result = phone.replace(/(\d{3})(\d{3,4})(\d{4})/g, '$1-$2-$3');
// console.log( result ); 
// console.log ( telfmt("01012345678") );
// console.log ( telfmt("021235678") );




// function telFmt( phone)
// {
//     unit1=3; //기본값 
//     unit2=4; //기본값 

//     if( phone.startsWith("02"))
//     {
//         unit1=2;
//         unit2=3;
//     }
//     if( phone.length<=8)
//     {
//         unit1=0;
//         unit2=4;
//     }
//     let regexp = new RegExp(`(\\d{${unit1}})(\\d{${unit2}})(\\d{4})`);
//     console.log("**", regexp);
//     result = phone.replace(regexp, '$1-$2-$3');
//     return result; 
// }

// console.log( "$$$", telFmt("01023452345"));
// console.log( "$$$", telFmt("0223452345"));
// console.log( "$$$", telFmt("23452345"));
