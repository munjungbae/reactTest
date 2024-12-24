
//함수 호이스팅( 함수선언식, 함수표현식, 화살표함수)

//1. 함수 선언식 (자동으로 호이스팅 진행)
let area1 = getArea(10,20);
console.log(area1);

function getArea(width, height) {
    return width * height;
}

//2.함수  표현식 (호이스팅 불가능)
let getArea2 = function (width, height) {
    return width * height;

}
let area2 = getArea2(100,200);
console.log(area2);



//3. 화살표 함수 (호이스팅 불가능)
let getArea3 = (width, height) => {
    return width * height;
}

let area3 = getArea3(1000,2000);
console.log(area3);

//중첩 함수 ( 중첩 함수 호출은 해당 함수 내에서만 사용 가능 )
function getArea4(width, height) {
    function anotherFunction() {
        console.log("another function");
    }
    anotherFunction()
    return width * height;
}

let area4 = getArea(15,25);
console.log(area4);