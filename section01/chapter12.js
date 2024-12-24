//1. DATE 객체 생성
let date1 = new Date();
console.log(date1);

let date2 = new Date(1997,1,1,23,57,28);
console.log(date2);

//2. Timestamp : 시간 => 숫자로 변환하는 방법 1997,1,1,0,0,0 = 0
//1997(년),1(월),1(일),0(시),0(분),2(초) = 2000 (2초)
let date3 = new Date();
let ts = date3.getTime();
console.log(ts);

let date4 = new Date(ts + 10000);
console.log(date4);

//시간 추출하기

let date5 = new Date();
let year = date5.getFullYear();
let month = date5.getMonth()+1;
let date = date5.getDate();
let day = date5.getDay();
let hour = date5.getHours();
let min = date5.getMinutes();
let sec = date5.getSeconds();
//day = 0, 1, 2, 3, 4, 5, 6 => 일, 월, 화, 수, 목, 금, 토
switch(day) {
    case 2:
        day = "화요";
        break;
}
console.log(year+ "년 " + month+ "월 " + date+ "일 " + hour+ "시 " + min+ "분 " + sec+ "초 " + day+ "일");

//시간설정하기
let date6 = new Date();
date6.setFullYear(2025);
date6.setMonth(1);
date6.setDate(25);
console.log(date6);

//시간제외 날짜 출력하기
console.log(date6.toDateString());
//현지화된 문자에 맞게 출력하기
console.log(date6.toLocaleString());







