//1. 단락 평가
let a = false;
let b = true;

let funca = () => {
    console.log("펑선 a 실행")
    return false;
};
let funcb = () => {
    console.log("펑선 b 실행")
    return true;
};

// console.log(funca() && funcb());

//실제 사용
//함수선언, 함수표현, 화살표함수
function printName(person) {
    const name = person && person.name;
    console.log(name || "peson값이 없음")
};
printName();
printName({name :"answjdqo1"});

function printName2(person) {
    if(typeof person === 'object') {
        console.log(person.name)
    } else{
        console.log("객체가 아님")
    }
};
printName2();
printName2({name:"answjdqo2"});