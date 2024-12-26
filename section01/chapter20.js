async function getData() {
    return {
        name : "mjb",
        age : 27,
        tall : 182,
    };
};

console.log(getData());

//async 일반함수 들어있는 new Promise(); 는 promise 적용

async function getData2() {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({name:"mjb2", age:28, tall:183});
        },2000);
    });
    return promise;
};

console.log(getData2());

//3. awit 란? 
// async 함수에서만 사용 가능한 키워드
async function printData() {
    getData().then((value)=>{
        console.log(value);
    }).catch((error)=>{
        console.log(error);
    });
}
printData();
// awit사용
 async function printData() {
    const data = await getData();
    console.log(data);
}