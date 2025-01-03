//1. promise pending 상태
// var Promise: PromiseConstructor
// new <any>(executor: (resolve: (value: any) => void, reject: (reason?: any) => void) => void) => Promise<any>
// const promise = new Promise(() => {
//     //2초동안 작업 처리
//     setTimeout(()=>{
//         console.log("hello")
//     },2000) 
// });
// //promise를 2초후에 부르는게 아닌 바로 return되는 promise를 부른 것.
// console.log(promise);

// //2. promise 성공 (Fulfilled 상태)
// const promise2 = new Promise((resolve, reject) => {
//     //2초동안 작업 처리
//     setTimeout(()=>{
//         console.log("Hello")
//         resolve("hello")
//     },2000) 
// });
// // console.log(promise2);

// setTimeout(() => {
//     console.log(promise2);
// },3000);

//4. promise를 실 적용

// const promise = new Promise((resolve, reject) => {
//     //executor 처리문
//     //숫자값을 주면 타입 점검 후 number => resolve , 아닐시 reject 반환 
//     setTimeout(()=>{
//         const number = 10;
//         if (typeof number === "number") {
//             resolve("Success");
//         } else {
//             reject("Failed");
//         }
//     },2000) ;
// });
/*
setTimeout(() => {
    console.log(promise);
},3000);

const promise = new Promise((resolve, reject) => {
    //executor 처리문
    //숫자값을 주면 타입 점검 후 number => resolve , 아닐시 reject 반환 
    setTimeout(()=>{
        const number = 10;
        if (typeof number === "number") {
            resolve("Success");
        } else {
            reject("Failed");
        }
    },2000) ;
});
// 성공 했을 때 실행하는 함수로서 resolve값을 화면에 출력
promise.then((value) => {
    console.log(value);
});
// 실패 했을 때 실행하는 함수로서 reject값을 화면에 출력
promise.catch((value) => {
    console.log(value);
});

//6. promise 실 적용시 실패, 성공 했을떄 처리 => 편하게 처리하는 방버
//promise 체인
promise.then((value) => {
    console.log(value+"체인 값");
}).catch((value) => {
    console.log(value+"체인 값");
});

//7. 함수를 통해 promise 실행하기
//선언적 함수
function add(number) {
    const promise = new Promise((resolve, reject) => {
        setTimeout(()=>{
            // const number = 10;
            if (typeof number === "number") {
                resolve("Success_Function = " + number);
            } else {
                reject("Failed_Function");
            }
        },2000) ;
    });
    return promise;
}

const promiseValue = add(20);

promiseValue.then((value) => {
    console.log(value);
}).catch((value) => {
    console.log(value);
});

//8. 함수를 통해 promise 실행하기 연속콜백을 통해 한번 더 promise 호출하기
//선언적 함수
function add2(number) {
    const promise = new Promise((resolve, reject) => {
        setTimeout(()=>{
            // const number = 10;
            if (typeof number === "number") {
                resolve("Success_Function2 = " + number);
            } else {
                reject("Failed_Function2");
            }
        },2000) ;
    });
    return promise;
}

const promiseValue2 = add2(10);

// promiseValue2.then((value) => {
//     console.log(value);
//     const promiseValue3 = add2(20);
//     promiseValue3.then((result)=>{
//         console.log(result)
//     }).catch((result) => {
//         console.log(result)
//     })
// }).catch((value) => {
//     console.log(value);
// });

//콜백지옥 해결
promiseValue2.then((value) => {
    console.log(value);
    return add2(20);
    //아래 then은 return값에 대한 then 
}).then((result) => {
    console.log("promiseValue3 = " + result)
    return add2(null);
}).then((data) => {
    console.log("promiseValue4 = " + data)
}).catch((error) => {
    console.log("promiseValue2~4 = " + error)
}) */


//1단계 음식주문하기
function orderFood2(food) {
    const  promise = new Promise((resolve, reject) => {
        console.log(food+"음식 주문")
        setTimeout(()=>{
            let flag = true; 
            if (flag === true) {
                resolve("음식 완료 : " + food );
            } else {
                reject("음식 실패: " + food);
            }
        },2000) ;
    });
    return promise
}; 


// //1단계 차게만들기
// function coolFood2(food) {
//     const  promise = new Promise((resolve, reject) => {
//         console.log(food+" 차갑게 주문")
//         setTimeout(()=>{
//             let flag = true; 
//             if (flag === true) {
//                 resolve("음식 차갑게하기 : " + food );
//             } else {
//                 reject("음식 차갑게하기: " + food);
//             }
//         },2000) ;
//     });
//     return promise
// }; 

// //1단계 음식 얼리기
// function freezeFood2(food) { 
//     const promise = new Promise((resolve, reject) => { 
//       console.log(food + '냉동주문'); 
//       setTimeout(() => { 
//         let flag = true; 
//         if (flag === true) { 
//           resolve(food + '냉동완료'); 
//         } else { 
//           reject(food + '냉동미완료'); 
//         } 
//       }, 3000); 
//     }); 
//     return promise; 
//   } 
// // orderFood2(true,"떡볶이").then((value) => {
// //     console.log(value);
// // }).catch((error) => {
// //     console.log(error);
// // });

// // freezeFood2('떡볶이') 
// // .then((value) => { 
// //     console.log(value); 
// // }).catch((error) => { 
// //     console.log(error); 
// // });

// // //2단계 음식주문 => 차갑게하기
// // orderFood2("떡").then((value) => {
// //     console.log(value);
// //     return coolFood2("떡볶이");
// // }).then((value) => {
// //     console.log(value);
// // }).catch((error) => {
// //     console.log(error);
// // })

// //3단계 음식 주문 => 차게만들기 => 얼리기
// orderFood2("떡").then((value) => {
//     console.log(value);
//     return coolFood2("떡볶이");
// }).then((value) => {
//     console.log(value);
//     return freezeFood2("떡");
// }).then((value) => {
//     console.log(value);
// }).catch((error) => {
//     console.log(error);
// })








orderFood2("떡볶이").then((value) => {
    console.log(value);
    function coolFood2(food) {
        const  promise = new Promise((resolve, reject) => {
            console.log(food+"음식 주문")
            setTimeout(()=>{
                let flag = true; 
                if (flag === true) {
                    resolve("음식 차갑게하기 : " + food );
                } else {
                    reject("음식 차갑게하기: " + food);
                }
            },2000) ;
        });
        return promise
    }; 
    return coolFood2("떡볶이");
}).then((value) => {
    console.log(value);
    function freezeFood2(food) { 
        const promise = new Promise((resolve, reject) => { 
          console.log(food + '냉동주문'); 
          setTimeout(() => { 
            let flag = false; 
            if (flag === true) { 
              resolve(food + '냉동완료'); 
            } else { 
              reject(food + '냉동미완료'); 
            } 
          }, 3000); 
        }); 
        return promise; 
      } 
      return freezeFood2("떡볶이");
}).then((value) => {
    console.log(value);
})
.catch((error) => {
    console.log(error);
})








