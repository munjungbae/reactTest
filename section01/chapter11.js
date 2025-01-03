// 1. push
// 배열의 맨 뒤에 새로운 요소를 추가하는 메서드
let array1 = [1, 2, 3];
array1.push(4,5)
const newLength = array1.push(6, 7); //push는 배열의 길이를 리턴한다.
console.log(array1);
console.log(newLength);
console.log("==============================");

// 2. pop
// 배열의 맨 뒤에 있는 요소를 제거하고, 반환
let array2 = [1, 2, 3];
const poppedItem = array2.pop(); //제거한값을 반환한다.
array2.pop()
console.log(array2);
console.log(poppedItem);
console.log("==============================");

// 3. Shift(pop보다 속도가 느리다)
// 배열의 맨 앞에 있는 요소를 제거, 반환
let array3 = [1, 2, 3];
const shiftedItem = array3.shift();
array3.shift();
console.log(array3);
console.log(shiftedItem);
console.log("==============================");

// 4. Unshift(push 보다 속도가 느리다)
// 배열의 맨 앞에 새로운 요소를 추가하는 메서드
let array4 = [1, 2, 3];
const newLength2 = array4.unshift(0); //변경된 배열의 길이를 반환한다.
console.log(array4); // 0, 1, 2, 3
console.log(newLength2); // 0, 1, 2, 3
console.log("==============================");

// 4. toSorted (가장 최근에 추가된 최신 함수) (기존의 배열을 정렬하는 것이 아닌 새로운 정렬된 배열을 생성)
// 정렬된 새로운 배열을 반환하는 메서드
let array = ["c", "a", "b"];
const sorted = array5.toSorted();
console.log(arr5ay); //["c", "a", "b"]; 반환된다.
console.log(sorted); // ["a", "b", "c"] 반환된다





