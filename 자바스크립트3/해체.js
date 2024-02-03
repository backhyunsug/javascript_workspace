//해체 : 
let userinfo = {"username":"홍길동", "age":23, "job":"프로그래머"};
//JSON객체가 있음  
// const {username, age, jo, address} = userinfo; 
// console.log(username);
// console.log(age);
// console.log(job);
// console.log(address);

// //요소의 성격이 같아야 한다. 키값=변수명 
// const {username2, age2, job2} = userinfo; 
// console.log(username2);
// console.log(age2);
// console.log(job2);

const {username, ...userInfo2} = userinfo;
console.log( username, userInfo2);

let arr = [1,2,3,4,5];
let [a,b,...c]=arr; 
console.log( a, b, c);

[a,b]=[b,a]; //서로 값이 바뀐다.
console.log( "a=", a);
console.log( "b=", b);
console.log( typeof [a,b]);

