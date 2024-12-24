//1. 객체 생성 생성자, 객체 리터널
let obj1 = new Object();
let obj2 = {};

//2. 객체 프로퍼티
// let person = {};
// person.name = "문정배";
// console.log(person);

//2. 객체 프로퍼티
let person = {
    name: "홍길동",
    age: 20,
    hobby: "헬스",
    job: "개발자",
    extra: {},
    extra2: function() {
        console.log("멤버함수 호출됨");
    },
    islike: true,
};

//가능한 추가 지양
person["favoriteFood"] = "떡볶이";
person.address = "강남";

//멤버변수 삭제
delete person.address;

//멤버변수 유무

let result = "name" in person;
let result2 = "value" in person;


//첨자식 호출
console.log(person["extra"]);
//함수 호출시
console.log(person["extra2"]());
console.log(`person["address"] = ${person.address}`);
console.log(result);
console.log(result2);

// 상수 객체

const animal = {
    type: "cat",
    age: "3month",
    color: "black",
}
animal.name = "양이고";

console.log(animal);