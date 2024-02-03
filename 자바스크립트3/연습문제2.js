const arr = [100, 200, 300, 400, 500, 600, 700];
for (const idx in arr) console.log(idx);
for (const idx in arr) console.log(arr[idx]);

const obj = { name: 'lim', addr: 'Yongsan', level: 1, role: 9, receive: false }
for (const key in obj) console.log(key);
for (const key in obj) console.log(obj[key]);

const iteratorable = (obj) => {
  obj[Symbol.iterator] = function () {
    const values = Object.values(obj);
    let i = -1;
    return {
      next() {
        i += 1;
        if (values.length <= i) return { done: true };
        return { done: false, value: values[i] };
      },
    };
  };
};

iteratorable(obj);
for (const val of obj) console.log(val);

Object.defineProperty(obj, "level", { enumerable: false });
Object.defineProperty(obj, "role", { writable: false });

let a = [['A', 10, 20], ['B', 30, 40], ['C', 50, 60, 70]];

const objectFromEntries = (arr) => {
    const newObj = {}; //json객체 생성 
    for (const [key, ...value] of arr) {
        console.log(key, "  *" , ...value);
      newObj[key] = value;
    }
    return newObj;
};
let b = objectFromEntries(a);
console.log( b );

const arrayFromObject = (obj) => {
    const newArr = [];//배열생성 
    for (const key of Object.keys(obj)) {
        console.log( key,"***", ...obj[key] );
        newArr.push([key, ...obj[key]]);
    }
    return newArr;
  };
  
console.log( arrayFromObject(b) );