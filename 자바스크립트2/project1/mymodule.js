//mymodule.js 

function sigma(limit=10)
{
    if( limit<10) 
        return; //값을 지정안하면 undefined 가 전달된다. 

    let s=0;
    let i;

    for(i=1; i<=limit; i++)
    {
        s+=i;
    }
    return s; 
}

console.log( sigma() );
console.log( sigma(100) );

//다른 파일에서 이함수를 접근할 수 있다 
//exports 가 노출의 의미 
//exports["s"]=sigma; 
//문자열주면 문자열을 대문자로바꾸어서 전달하는 함수

function toUpper(s)
{
    //s-String의 내용을 바꾸는건 불가능하다
    
    return s.toUpperCase();
}
exports.s = sigma;
exports.toUpper = toUpper;
console.log( toUpper("korea is beautiful"));

