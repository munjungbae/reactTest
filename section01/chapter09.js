//1. 객체 순회 방법
const person = {
    name: "문",
    age: 27,
    tall: 183,
}

const personKeys = Object.keys(person);
const personValues = Object.values(person);

console.log(personKeys);
console.log(personValues);

for(let i=0; i < personKeys.length; i++) {
    const keyValues = personKeys[i];
    const valueValues = person[keyValues];
    console.log(`${keyValues} : ${valueValues}`);
};