//비동기 처리 작업
function task() {
    setTimeout(()=> {
        console.log("Hi");
    }, 3000)
}
// task();

function add(a, b) {
    setTimeout(()=> {
        const sum = (a+b);
        console.log(sum);
    }, 3000)
}; 
add(10,20); 

//a,b값을 전달받지 못함 
function add2(a, b, callback2) {
    setTimeout(callback2, 3000)
}
add2(10,30, (a,b) => {
    const sum = (a+b);
    console.log(sum);
});

//위 방식보단 아래 방식으로 한번더 callback함수를 호출하여 a,b값을 전달받아야함.
function add22(a, b, callback2) {
    setTimeout(() => {
        callback2(a,b)
    }, 3000)
}
function add22(a, b, callback2) {
    setTimeout(() => {
        const sum = a+b;
        callback2(sum)
    }, 3000)
}
add22(10,30, (a,b) => {
    console.log(sum);
});

// add22(10,30, (a,b) => {
//     console.log(a+b);
// });

function add3(a, b, callback3) {
    setTimeout(()=> {
        const sum = (a+b);
        callback3(sum);
    }, 3000)
}; 
add3(10,40,(sum) => {
    console.log(sum);
})


function task2(callback) {
    setTimeout(callback, 3000)
};

//주로 아래 방식 사용
task2( () => console.log("hello2") );

//또는

let callback= () => {
    console.log("hello3");
};
task2(callback);