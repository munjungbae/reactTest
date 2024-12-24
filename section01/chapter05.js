// function checkMood(mood, type) {
//     if(mood === "good"){
//         if(type === 1) {
//             sing();
//         }else {
//             dance();
//         };
//     } else{
//         if(type === 1) {
//             cry();
//         }else {
//             angry();
//         }
//     }
// }

// checkMood("good" , 1);
// checkMood("cry", 1);
// checkMood("good");

// 콜 백 함수( 자바에서는 service() , doGet(), doPost())
function checkMood2(mood, goodCallBack, badCallBack) {
    if(mood === "good"){
        goodCallBack();
    } else{
        badCallBack();
    }
}


checkMood2("good", () => console.log("Action dance3"), () => console.log("Action cry3"));

//콜백처리2

function repeat(idx, callback) {
    for(let i = 1; i < idx; i++) {
        callback(i);
    }
}

repeat(24, (i) => console.log(i*5));
