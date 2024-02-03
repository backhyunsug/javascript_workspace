

/*재귀호출 -- 자기가 자기를 부른다*/
//1+2+3+....10
function dispalyNumber(n=10)
{
    if( n==0)  
    {     
        return n;
    }
    else 
    {
        console.log(n);
        dispalyNumber(n-1);
    }
}

dispalyNumber();

function dispalyNumber2(n=10)
{
    if( n==0)  
    {     
        return n;
    }
    console.log(n); 
    return dispalyNumber2(n-1);

}

dispalyNumber2();
console.log( "**********************")   
// dispalyNumber3(10)=>dispalyNumber3(9)=>dispalyNumber3(8) =>.........   dispalyNumber3(0)까지 호출하고  
//리턴되면서 console.log(n)이 호출된다. 
function dispalyNumber3(n=10)
{
    if( n==0)  
    {     
        return n;
    }
    dispalyNumber3(n-1);  //재귀호출을 하고 
    console.log(n); //출력한다. 
}
dispalyNumber3();

//피보니치 수열  f(n) = f(n-1) + f(n-2)
function fibo(n=10)
{
    if(n<2) return n; 
  
    return fibo(n-1) + fibo(n-2);  //함수를 자주 호출해서 메모리를 많이 차지한다 
}

for(i=1; i<=20; i++)
    console.log( fibo(i));

function memoized(fn) {
    const memoizedTable = {}; //중간 연산 결과를 메모리에 저장해둔다. 
    
    return function (k) {
        //이미 테이블에 존재하면 존재한 테이블을 전달하고 그게 아니면 전달받은 함수를 실행해서 결과를 저장한다 
        return memoizedTable[k] || (memoizedTable[k] = fn(k));
    };
}

      
//let mcnt = 0;//외부에 변수를 하나 둔다. 
const memoizedFibonacci = memoized(function (n) {
    //mcnt += 1;
    //console.log('🚀  mcnt:', mcnt);
    if (n <= 1) return n;
    return memoizedFibonacci(n - 2) + memoizedFibonacci(n - 1);
});

for(i=1; i<=20; i++)
    console.log( memoizedFibonacci(i));