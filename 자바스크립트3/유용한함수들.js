//유용한 함수들
/* encodeURI, decodeURI :서버가 인식할 수 있는 문자를 제외하고 
  encodeURIComponent, decodeURIComponent : 서버가 인식할수 있는 문자 포함*/
console.log("인코딩과 디코딩 - get방식으로 특히 한글 보낼때");

let s1 = "한글은 이렇게 바뀐다."
console.log( encodeURI(s1));
console.log( decodeURI(encodeURI(s1)));


