//성적처리를 객체 지향으로 하고 싶다. 
//데이터자체 정의 클래스 => Dto라는 접미어(Data Transfer Object)
//디비의 테이블 구조처럼 
class ScoreData  //데이터만 
{
    constructor(name="", kor=0, eng=0, mat=0)
    {
        console.log( "ScoreData 생성자 호출");
        this.name=name; 
        this.kor = kor;
        this.eng = eng;
        this.mat = mat;
        this.process(); //본인 함수 호출할때 this써야 한다 
    }
    process(){
        this.total = this.kor + this.eng + this.mat;
    }
    toString(){
        return `${this.name} ${this.kor} ${this.eng} ${this.mat} ${this.total}`;
    }
};

class ScoreMgr
{
    constructor(){
        this.dataList = [];
    }
    append(scoreData)
    {
        this.dataList.push(scoreData);
    }
    display()
    {
        this.dataList.forEach((score)=>{
            console.log( score.toString() );
        })
    }

    find(name){
        //매개변수 
        return this.dataList.find((item)=>{
            return item.name == name;
        });
    }
}

let mgr = new ScoreMgr();
mgr.append( new ScoreData("A", 90, 90, 90));
mgr.append( new ScoreData("B", 90, 80, 90));
mgr.append( new ScoreData("C", 70, 70, 90));
mgr.append( new ScoreData("D", 90, 80, 80));
mgr.append( new ScoreData("E", 100, 100, 100));

mgr.display();
let name="AA";
let result = mgr.find(name); 
if(result==null)
    console.log( `${name}을 찾을 수 없습니다.`);
else 
    console.log("*** found ***", result.toString() );


/*
forEach : 함수가 매개변수가 있고 반환값이 없다. 주로 출력용 
map : 값을 변경을 해야 할때, 반환값이 있다. 
find : boolean 값을 반환해야 한다. 첫번째 거 찾으면 멈추고 객체반환 
    끝까지 가도 없으면 null반환
filter : boolean 값을 반환해야 한다.반환값이 true인 데이터만 묶어서 
         객체배열을 반환한다. 
*/

//클래스는 extends 로 상속받는다. 
//아무것도 안해도 부모거 다 받는다. 
class MiddleScore extends ScoreData{
    constructor()
    {
        super("홍길동", 0,0,0); //부모생성자 내가 호출해야 함 - 자바스크립트 
        //맨첫번째 라인에 
        //가급적 생성자 새로 만들어라 
        //새로 추가된 요소가 있을때 처리해야 하니까 생성자 새로 만들어라 
        //자동으로 부모생성자를 호출하도록 되어 있다. 
        
    }
}

console.log("상속받은 객체를 생성함");
m1 = new MiddleScore();
console.log( m1.toString());



