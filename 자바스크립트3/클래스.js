class Student
{
    //name="홍길동";
    //score = [];

    constructor(student={"name":"", kor:0, eng:0, mat:0})
    {
        this.name = student.name; 
        this.score = [student.kor, student.eng, student.mat];

    } 
    append(student)
    {
        this.name = student.name; 
        //this.score.push(student.kor, student.eng, student.mat);
        this.score =  [student.kor, student.eng, student.mat];
    }
    display()
    {
        console.log( this.name, this.score);
    }
};

let s = [];
s.push(new Student());
s.push(new Student());
s.push(new Student());


console.log( s);

s[0].append({name:"임꺽정", kor:90, eng:70, mat:90});
s[1].append({name:"홍길동", kor:90, eng:80, mat:90});
s[2].append({name:"장길산", kor:90, eng:80, mat:90});

s[0].display();
s[1].display();
s[2].display();

console.log( s);


