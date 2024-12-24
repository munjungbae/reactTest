// ...name() => 스프레드 연산 해당 값을 풀어는다는 의미.
let array1 = [1, 2, 3];
let array2 = [4, ...array1, 5, 6];
console.log(array2);

// 2. Spread 연산자(객체)
let obj1 = {
    a: 1,
    b: 2,
   };
   //a: obj1.a, => obj1.a 배열의 값을 a에 저장
   let obj2 = {
   a: obj1.a,
   b: obj1.b,
    c: 3,
    d: 4,
   };
   //...obj1 => obj1의 배열 값을 풀어놓음.
   let obj3 = {
    ...obj1,
    c: 3,
    d: 4,
   };
   console.log(obj1);
   console.log(obj2);
   console.log(obj3);

// 3. Spread 연산자(함수매개변수)
function funcA(p1, p2, p3, p4 = 10) {
    console.log(p1, p2, p3, p4);
   }
   funcA(...array1);

// 4. rest 매개변수
// rest는 나머지 , 나머지 매개변수
let array3 = [1, 2, 3, 4];
function funcB(one, wo, three, ...ds) {
 console.log(ds);
}
funcB(...array3);
