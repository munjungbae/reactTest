//1. 배열 생
let arrayA = new Array();
let arrayB = [];

//2. 배열에 들어올 수 있는 멤버(기본타입5가지 객체타입1{3종류})
let arrayC = [
    1,
    1.0,
    true,
    'Hidude',
    undefined,
    null,
    {},
    [],
    () => {

    },
];
console.log(arrayC[8]());