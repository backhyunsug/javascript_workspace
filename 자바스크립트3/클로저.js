let user; //변수선언 

//블럭안에 객체가 선언되면 
//객체참조변수는 스택에 존재 ==>  객체 자체는 힙공간에 존재한다,. 
//privateUser - 블럭안에서만 존재하는 상수이다.
// {"name":"홍길동", age:34}; 객체 자체는 힙에 있고
//블락을 따로 정의하면 블락내에서만 존재한다. 
{
    //블럭안에 
    const privateUser = {"name":"홍길동", age:34};
    console3.log( privateUser );
    user = privateUser; //블락 외부의 참조변수에 객체참조를 맡긴다. 
}

// privateUser ====> {"name":"홍길동", age:34};
// user  ====>{"name":"홍길동", age:34};

//블럭이 종료하면  proivateUser가 사라지기 때문에 GC라는 애가 메모리가 부족한 상황이 닥치면
// {"name":"홍길동", age:34}; 이 메모리를 해제하려고 준바중인데 
//어라 user 라는 참조가 남아있구나. 삭제하면 안되는구나 

