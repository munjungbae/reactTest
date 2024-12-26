//math 모듈 (계산하는 모듈: 라이브러리: 함수), 클래스
function add(a, b){
    return a + b;
};
function sub(a, b){
    return a - b;
};
//모듈 정의시는 함수 선언식만 사용.

// let add = function() {
//     return a+b;
// };

// let add = (a, b) => a+b;


// //모듈을 외부로 보낸다
// module.exports = {
//     add,
//     sub,
// }

//ESM 모듈 방식으로 전환
export{add,sub};
