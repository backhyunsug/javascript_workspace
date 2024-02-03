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

//test함수
const regexp = /hello/i;
let s = "Hi 반갑습니다";
console.log( regexp.test(s));
console.log("대소문자 구분했을때 ",  /hello/.test("Hi Hello 반갑습니다."));
console.log("대소문자 구분안했을때 ",  /hello/i.test("Hi Hello 반갑습니다."));
console.log("대소문자 구분안했을때 ",  /hello/gi.test("Hi Hello 반갑습니다. Hello"));

// exec
//대상을 검색하여 조건에 부합하는 결과를 배열로 반환한다./
//단, 조건에 부합하는 결과가 1개 이상이라도 무조건 부합하는 결과의 첫번째 값을 반환한다.

console.log(/S/.exec("RegExp Study Start"));
// 결과값 : ["S", index:7, input:"RegExp Study Start"]

//match 함수
// 정규식 조건에 부합하는 문자열을 배열 형태로 반환해준다.
// 만약 조건에 부합하는 문자열이 없으면 null을 반환한다
console.log('RegExp Study'.match(/Study/));

//search 함수 
// 정규식 조건에 부합하는 문자열의 index 번호를 반환해준다.
// 만약 조건에 부합하는 문자열이 없으면 -1을 반환한다.

//replace
//조건에 부합하는 문자열을 찾아, 그 텍스트를 다른 텍스트로 변환시킨다.


//split
console.log('RegExp Study'.split(" "));
// 결과값 : ["RegExp", "Study"]
//조건에 부합하는 값을 기준으로 대상을 자른 후, 배열로 저장한다.
//만약 split할 대상에 아무런 입력도 하지 않을 시(여백도 포함해서), 
//대상을 하나의 배열로 반환한다.


// // s = ['강원도 고성군', '고성군 토성면', '토성면 북면', '북면', '김1수']
// searchByKorean=(data, firstSounds)=>
// {
//     r = [...firstSounds].map( a => {
//         const idx = "ㄱㄴㄷㄹㅁㅂㅅ".indexOf(a); //문자 위치를 찾는다 
//         if( idx==-1) 
//             return a;
//         console.log(idx);
//         S = "가나다라마바사".at(idx);//정수 값을 받아서 지정된 오프셋에 있는 단일 UTF-16 코드 단위로 구성된 새 String 을 반환
//         console.log(S );
//         E = "가나다라마바사".at(idx+1).charCodeAt(0)-1;

//         console.log( E );

//         return `[${a}${S}-${String.fromCharCode[E]}]`;
//     });

//     const regex = new RegExp(r.join());
//     return DataTransfer.filter(d=regex.test(d));
// }

// console.log( searchByKorean(s, 'ㄱㅅㄷ'));

// // const CHO_HANGUL = ['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ',    'ㄹ', 'ㅁ', 'ㅂ','ㅃ', 'ㅅ',   'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ',  'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];
  
// // const HANGUL_START_CHARCODE = "가".charCodeAt();
// // const CHO_PERIOD = Math.floor("까".charCodeAt() - "가".charCodeAt());
// // const JUNG_PERIOD = Math.floor("개".charCodeAt() - "가".charCodeAt());

// // function combine(cho, jung, jong) {
// //     return String.fromCharCode(
// //       HANGUL_START_CHARCODE + cho * CHO_PERIOD + jung * JUNG_PERIOD + jong
// //     );
// //   }
  
// //   // 초성검색
// //   function makeRegexByCho(search = "") {
// //     const regex = CHO_HANGUL.reduce(
// //       (acc, cho, index) =>
// //         acc.replace(
// //           new RegExp(cho, "g"),
// //           `[${combine(index, 0, 0)}-${combine(index + 1, 0, -1)}]`
// //         ),
// //       search
// //     );
  
// //     return new RegExp(`(${regex})`, "g");
// //   }
  
// //   function includeByCho(search, targetWord) {
// //     return makeRegexByCho(search).test(targetWord);
// //   }
  
// //   // --------------------------------------
  
// //   const list = ["사과", "수박", "멜론", "파인애플", "산딸기", "딸기", "망고"];
  
// //   function _events(target) {
// //     const search = target.value.trim();
// //     const regex = makeRegexByCho(search);
  
// //     let htmlDummy = "";
  
// //     list.forEach((item) => {
// //       if (regex.test(item)) {
// //         htmlDummy += item.replace(regex, "<mark>$1</mark>") + ', ';
// //       }
// //     });
  
// //     document.querySelector(".docs span").innerHTML = search ? htmlDummy : "";
// //   }