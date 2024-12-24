//구조분해
let array1 = [1,2,3,4,5];

let [a,b,c,d,e=1,f=6] = array1;
console.log(a,b,c,d,e,f)

// 2. 객체의 구조 분해 할당
let person = {
    name: "문정배",
    age: 27,
    hobby: "헬스",
   };
   let {
    age: ma, 
    hobby,
    name = "길동맨", // 이미 값이 존재하기 때문에 적용 x
    extra = "hello",
   } = person;
   console.log(ma, name, hobby, extra);

// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({ name, age, hobby, extra = "hello" }) => {
    console.log(name, age, hobby, extra);
   };
   func(person);