/*
업캐스팅 : 자식객체가 부모타입 참조변수에 대입된다. 
          Object obj = new Person();

          Person타입(자식) => 잠깐 Object타입(부모타입) 으로의 형전환이 발생한다. 
          자식이 부모타입으로 올라가는 타입전환(업캐스팅)이라고 하고 언제나 가능하다 

다운캐스팅 :  부모객체가 자식타입 참조변수에 대입된다.
          자식타입 참조변수는 부모객체가 갖고 있지 않은 요소들도 접근할수 있다고 
          생각하기 때문에 허용하면 안된다. 원칙이 불가능하다.
          그러나 함수의 매개변수로 전달될때 원래는 자식객체=>부모객체타입 
          으로 전환된경우에는 원상복구가 가능해야 한다. 
          그래서 이때는 예외적으로  강제 형전환자에 의해 전환가능하다 

          Person p1 = (Person)ob; 


배열 : 연속된 메모리를 필요로 한다.  10m 10m 20m 메모리가 있음 
실제 필요한 메모리 크기가 35m 면 할당불가, 단 메모리 단편들을 모아서 넣을수는 있다 
       중간에 추가 삭제가 어려움, 크기 변경도 어려움. 융통성이 떨어진다. 
       속도는 빠르다 . 1 , 10 ,100000 : 100000개의 메모리에 1개 99999개가 논다  

링크드리스트 : 불연속적메모리를 필요로 한다. 
      데이터와 다음요소의 참조로 구성되어야 한다. 
      새로운 데이터가 들어올때마다 메모리 생성해서 서로 연결을 시켜준다
      장점 : 중간에 추가 삭제가 편하다 
      단점 : 느리다. 메모리도 많이 차지한다.  
      데이터공간 + 참조공간이 필요하다  데이터가 많을때는 참조공간 낭비가 심하다 
      단일링크드리스트   한쪽방향으로만 검색이 가능하다 
      더블링크드리스트   양쪽방향으로 검색이 가능하다       
*/

class NodeData
{
    data; 
    next; 
    constructor(data)
    {
        this.data = data;//데이터 공간
        this.next = null;//다음번 요소에 대한 주소값 
    }
}

class MyList 
{
    //배열의 경우 :  arr=[1,2,3]  시작 arr[0] 과 종료 arr[2];
    constructor(){
        this.head = new NodeData(); //비어있는 노드 하나씩을 소유, 리스트의 첫번째 
        this.tail = new NodeData();
        this.head.next = this.tail; //
        this.tail.next = this.tail;    //  head->(|)->(|)->null
    }

    //head 쪽에 데이터 추가하기
    insertHead(data)
    {
        //지역변수는 let 을 쓰라고 한다 
        let temp = new NodeData(); //새로운 노드를 하나 생성한다 
        temp.data = data;
        temp.next = this.head.next;
        this.head.next = temp; 
    }

    //알아서 정렬해서 자리 찾아 들어가 
    insertOrdered(data)
    {
        //1.새로운 노드를 만든다 
        let temp = new NodeData(); 
        temp.data = data;

        //들어갈 위치를 찾아야 한다 
        let t1 = this.head.next; //앞에서 출발
        let t2 = this.head; //뒤에서 출발
        let stop=false;//for문은 몇번 반복할지 알아야 하는데 while은 조건에 의해서
        while(t1!=this.tail && !stop)
        {
            if(t1.data<  temp.data)
            {
                t1 = t1.next; 
                t2 = t2.next;
            }
            else 
                stop=true; //멈춤신호 
        }
        
        temp.next = t2.next;
        t2.next  = temp;
    }

    display(){
        let trace = this.head.next; 
        while(trace!=this.tail)
        {
            console.log(trace.data);
            trace = trace.next;
        }
    }  
}

let list = new MyList();
list.insertOrdered("A");
list.insertOrdered("B");
list.insertOrdered("C");

// list.insertHead("A");
// list.insertHead("B");
// list.insertHead("C");
// list.insertHead("D");
// list.insertHead("E");

list.display();



