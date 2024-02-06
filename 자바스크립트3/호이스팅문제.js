var g_a; //전역변수의 경우 g_ 를 사용해서 전역변수임을 티내야 한다 

function myfunc1()
{
    var g_a;//함수에만 영향을 미친다. 아무리 var 선언자라도 함수의 호이스팅을 지켜준다 
    g_a = 10;
    console.log( "myfunc1", g_a );
    //전역변수공간에 g_a 따로 있고 지역변수 공간에 g_a가 따로 있다
}


function myfunc2()
{
    var g_a;//이 함수내에서는 계속 존재 
    let g_b; //let 명령어는 블록레벨스코프가 적용된다.  

    {
        var g_a = 100;//이 메모리와 블럭 밖의 g_a는 동일한 메모리이다. 
        let g_b = 30; 
        console.log( "myfunc2 g_a ", g_a );
        console.log( "myfunc2 g_b", g_b );
    //전역변수공간에 g_a 따로 있고 지역변수 공간에 g_a가 따로 있다
    }
    console.log("블럭밖에서");
    console.log( "myfunc2 g_a ", g_a );
    console.log( "myfunc2 g_b", g_b );
}
myfunc2();

console.log("전역 ", g_a);

//자바스크립트에서 delete 명령어는 메모리 삭제가 아니다. (중요)
//객체의 프라퍼티(변수) 일부만 삭제 가능하다. 