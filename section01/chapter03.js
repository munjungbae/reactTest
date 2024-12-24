//1. 무한대값 양수, 음수
let infinityValue = Infinity;
let infinityValue2 = -Infinity;

console.log(infinityValue);
console.log(infinityValue2);

//숫자가 아닌 값
let notANumber = NaN;
//정수형이 들어있는 문자열과 정수형이 만나면 정수형으로 자동 변환.
let nan = 1 * "asdf";
let nan2 = 1 * "20";

console.log(notANumber);
console.log(nan);
console.log(nan2);

//탬플릿 리터널 기능
let nameValue = "123";
let locationValue = "123";
let introduceText = "저는 " + locationValue + "에서 " + nameValue +" 입니다";
console.log(introduceText);
let introduceText2 = `저는 ${locationValue} 에서  ${nameValue} 입니다`;
console.log(introduceText2);

//형변환 Number , parseInt
let str2 = "10";
console.log(str2 + 10);
console.log(Number(str2) + 10);
console.log(parseInt(str2) + 20);
let str3 = "10개이다.";
console.log(str3 + 10);
console.log(Number(str3) + 10);
console.log(parseInt(str3) + 20);

//산술연산자 中 나머진 자바스크립트와 같지만 / 연산자는 값을 그대로 도출
let a = "1";
let b = "3";
console.log(a/b);

//비교연산자 * (===), (!==) << 사용 (==), (!=) << 비추
let compA = "1";
console.log(compA === 1);

//typeof
let num3 = NaN;
console.log(typeof num3);

//병합 연산자
let num4;
let num5 = 20;
num4 = num4 ?? 10; //변수가 undefined면 다른 값을 준다.
num5 = num5 ?? 10; //변수가 undefined면 다른 값을 준다.
console.log(num4);
console.log(num5);
//num4 = num4 ?? 10; 은 아래 연산식과 같은 의미를 가짐
if(num4 === undefined || num4 === null) {
    num4 = 10;
}
