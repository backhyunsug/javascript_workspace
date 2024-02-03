
//toFixed함수

console.log( 3.456789.toFixed(2));

//소수점 이하 한자리 
for (let i = 0.1; i < 1; i = i + 0.1) {
    console.log(Number(i.toFixed(1)));
}

  
function addPoints(x, y) {
    const ex = x.toString().length - 2;
    const ey = y.toString().length - 2;
    const e = ex > ey ? ex : ey;
    // console.log(ex, ey, e);
    return Number((x + y).toFixed(e));
  }
  

console.log(addPoints(0.21354, 0.1) );  // 0.31354
console.log(addPoints(0.14, 0.28) );    // 0.42
console.log(addPoints(0.34, 0.226));


console.log("Closer")

/*
클로저는 주변 상태(어휘적 환경)에 대한 참조와 함께 묶인(포함된) 함수의 조합입니다. 
즉, 클로저는 내부 함수에서 외부 함수의 범위에 대한 접근을 제공합니다.
JavaScript에서 클로저는 함수 생성 시 함수가 생성될 때마다 생성됩니다.
자바스크립트에서 이벤트 핸들러 정의시 사용가능 
*/
function init() {
    var name = "Mozilla"; // name은 init에 의해 생성된 지역 변수이다.
    function displayName() {
      // displayName() 은 내부 함수이며, 클로저다.
      console.log(name); // 부모 함수에서 선언된 변수를 사용한다.
    }
    displayName();
}
init();


//클로저 - 함수 안에 함수를 정의 할 수 있다. 
function makeFunc() {  //makeFunc 함수를생성하는 팩토리 - 공장역할임 
    const name = "Mozilla";
    function displayName() {
        console.log("displayName 함수호출")
        console.log(name);
    }
    return displayName; //함수 주소를 반환한다
  }
//주의 : makeFunc의 주소를 주는것이 아니라 실행 후 결과를 반환한다.  
const myFunc = makeFunc(); //makeFunc 함수를 실행하면 return 구문을 통해 displayName 함수가 전달된다.
//myFunc 변수에는 makeFunc의 주소가 아니라 실행된 결과를 반환한다. 
//원래대로라면 name 변수는 사라지고 없다. - makeFunc의 지역 변수이므로 

myFunc();  //내부함수인 displayName에서 name 상수를 아직 참조 하고 있어서 호출이 가능하다

function makeAdder(x) {                  //x라는 매개변수에 값 5를 전달  이름없는 함수 자체가 반환된다 이때 이 함수에 매개변수 
    return function (y) {                  
      return x + y;
    };
  }
  
  const add5 = makeAdder(5); //x = 5
  const add10 = makeAdder(10);
  
  console.log(add5(2)); // 7   //y=2  위의 x값 5와 연결되어서  add5변수에는 function(y) { return x+y } 가 존재한다 
  console.log(add10(2)); // 12


  //https://jsfiddle.net/hotae160/ 대리자 또는 위임자 의미와 유사하다
function makeSizer(size) {

    return function () {
      document.body.style.fontSize = `${size}px`;
    };
}

const size12 = makeSizer(12);
const size14 = makeSizer(14);
const size16 = makeSizer(16);

const counter = (function () {

    let privateCounter = 0;
    //내부함수 
    function changeBy(val) {  //숨김함수 
        privateCounter += val;
    }

    return {
        increment() {
            changeBy(1);  
        },

        decrement() {
            changeBy(-1);
        },

        value() {
            return privateCounter;
        },
    };
})();
  
console.log(counter.value()); // 0.

counter.increment();
counter.increment();
console.log("현재카운터 : ", counter.value()); // 2.

counter.decrement();
console.log("현재카운터 : ",counter.value()); // 1.


