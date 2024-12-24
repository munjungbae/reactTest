//forEach(함수(value, index, 객체배열 ))문 => 자바의 향상된 for문( 객체 : 객체배열 ) 과 같음
const array = [1,2,3,4,5];
const array2 = [];
//forEach문의 기본 구조
// array.forEach((value, index, array)=>{
//     console.log(array[index]);
//     console.log(value);
//     console.log(index);
//     console.log(array);
// });
// console.log("==========================");
// for(let i=0; i<array.length; i++) {
//     console.log(array[i]);
// }

// 위의 for문과 같은 의미를 가짐
array.forEach((value) => console.log(value));
// console.log("==========================");

//array2에 array의 v(value) 값을 *2하여 push.
array.forEach((v)=>array2.push(v*2));
// console.log(array2);

let array3 = [
    { name : "문정배", age: 10},
    { name : "김정배", age: 10},
    { name : "황정배", age: 10},
    { name : "최정배", age: 10},
    { name : "김정배", age: 20},
]
//find 문
const findValue  = array3.find((v) => v.name === "김정배");
console.log(findValue);

//filter 문 
const filterArray = array3.filter((value)=>{
    return value.name === "김정배"
});
console.log(filterArray);

//Map 문 (method) Array<number>.map<U>(callbackfn: (value: number, index: number, array: number[]) => U, thisArg?: any): U[]
const nameArray = array3.map((value)=>{
    return value.name;
});
console.log(nameArray);

//findindex 해당된 객체의 위치를 찾아서 반환한다.
const findIdx = array3.findIndex((value)=>{
    return value.name === "김정배";
});
console.log(findIdx);

//include
const flag = array.includes(4);
console.log(flag);

//indexOf
const array6 = [1,1,2,2,2,3,4,5];
const value = array6.indexOf(2);
console.log(value);

//slice
const array7 = [5,6,7,8,9,10];
const sliceArray = array7.slice(2,5);
const sliceArray2 = array3.slice(2,5);
console.log(sliceArray);
console.log(sliceArray2);

//concat
let array8 = [
    { name : "최정배", age: 10},
    { name : "김정배", age: 20},
]
let array9 = [
    { name : "문정배", age: 10},
    { name : "김정배", age: 10},
]
const concatArray = array8.concat(array9);
console.log(concatArray);

//sort
const array10 = [1,10,2,20,3,30];
array10.sort();
console.log(array10);
//순정렬
array10.sort((a,b) => {return a-b});
console.log(array10);
//역정렬
array10.sort((a,b) => {return b-a});
console.log(array10);

//join
const array11 = ["아무개","님","헬로우","나밋츄"];
console.log(array11.join(""));

//for of 반복문 => 향상된 for문과 결이 비슷
let array12 = [1, 2, 3];
for (let item of array12) {
 console.log(item);
}

//for in (객체값만 가져옴.)
const person = {
    name: "문",
    age: 27,
    tall: 183,
}

for (let key in person) {
    const value = person[key];
    console.log(key, value);
   }













