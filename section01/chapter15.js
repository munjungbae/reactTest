const person ={
    name:"kdj",
    age: 29,
    tall: 178
};
//얕은 복사 => person2의 값과 person이 같은 값을 참조하기 때문에 person의 값도 같이 바뀐다
let person2 = person;
person2.tall = 180;
console.log(person);
console.log(person2);
//깊은 복사 => person3에서 person의 값을 가지는 새로운 객체를 생성하기 때문에 값을 변경해도 person3의 참조값만 변경된다.
let person3 = {...person};
person3.tall = 180;
console.log(person3);

//같은 값을 참조 => true
console.log(person === person2);
//다른 값을 참조 , 결과값만 같기 때문에 false;
console.log(person === person3);

//객체끼리 비교( 자바에선 => equals, hash)
//JS에서는 JSON.stringify
console.log(
    JSON.stringify(person) === JSON.stringify(person3)
);

