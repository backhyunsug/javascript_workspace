/*
재귀호출 : 함수 자신이 자신을 호출하는 것을 말한다.
          내가 나를 호출하기 때문에 재귀호출
          시스템의내의 스택을 활용해서 함수가 호출된다. 
          잘못 호출하면 무한재귀호출이 되서 스택이 부족한 상황이 벌어진다.
          특히나 자바같은 경우에 재귀호출 알고리즘은 속도가 엄청느리고 메모리 fault 발생
          프로그램은 재귀구조를 사용했을때 더 쉽게 작성할 수 있는 알고리즘이 있다 
          트리구조 순회   
          
                 A                     문제) 트리의 노드를 하나도 빼놓지 말고 순회하자
              B      C                      inorder, preorder, postorder(깇이우선탐색) 
            D   E   F  G                    level order (너비우선탐색, 큐) 
        
        left = edge, 트리와 트리사이의 다리  하노이의탑 
        right 
        D     = Node 방문할 데이터 

        inorder = LDR     => DBEAFCG
        preorder = DLR    => ABDECFG
        postorder = LRD   => DEBFGCA

        function f1(){
            ....
             f1();
             ...  
        }

        함수에 매개변수를 전달해서 값이 자꾸 작아져야 한다. 
        function f1(n){
            ....
             if(n==1)
                return 1;
             f1(n-1);
             ...  
        }
        //1 ,2,3,4,5,6,7,8,9,10 ...... 을 재귀호출로 해보자 
*/

function displayNumber(n){
    if( n==0)
        return n; 
    displayNumber(n-1);//자기가 자기를 호출할때 n값이 계속 감소되어야 한다 
    console.log( n );
}

displayNumber(10);
/*
displayNumber(10);
displayNumber(9);
displayNumber(8);
displayNumber(7);
displayNumber(6);
displayNumber(5);
displayNumber(4); console.log( 4 );
displayNumber(3); console.log( 3 );
displayNumber(2); console.log( 2 );
displayNumber(1); console.log( 1 );
displayNumber(0); return 0;

*/