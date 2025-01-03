// 1단계 음식을 주문하는 상황
function orderFood(food, callback) {
    setTimeout(()=>{
        console.log("음식주문");
        callback(food);
    },2000);
};

//1단계 음식을 차게 주문하는 상황
function coolFood(food,callback){
  console.log(food+"차갑게 만들기");
    setTimeout(()=>{
        callback(food);
    },2000)
};
function freezeFood(food,callback){
  console.log(food+"냉동주문");
    setTimeout(()=>{
        callback(food);
    },2000)
};

// orderFood("사과", (food) => {
//     console.log(food+"완성");
// });
// coolFood("사과", (food) => {
//     console.log(food+"차갑게 완성");
// });
// freezeFood("사과", (food) => {
//     console.log(food+"음식 냉동성공");
// });

//2단계 음식 주문 후 음식을 차게
// orderFood('떡볶이', (food) => {
//     console.log(food+"음식 제작후 3초후 완성");
//     let food2 = "뜨" +food;
//     coolFood(food2, (food2)=>{
//        console.log(food2+" 차갑게 완성");
//     });
// })

//3단계 음식을 주문 하고 => 음식을 차게 주문하는 상황 = > 냉동 주문

orderFood('떡볶이', (food) => {
    console.log(food+"음식 제작후 2초후 완성");
    let food2 = "뜨" +food;
    coolFood(food2, (food2)=>{
       console.log(food2+" 차갑게 2초후 완성");
       let food3 = "차" + food2;
        freezeFood(food3, () => {
            console.log(food3+"음식 냉동 2초후 완성");
        })
    });
})







