//외부에 존재하는 모듈을 가져오기
//require => math.js에서 export시킨 값을 import하는 느낌

// const moduleData = require('./math');
// console.log(moduleData.add(2,5));
// console.log(moduleData.sub(2,5));

// const {add,sub} = require('./math');
// console.log(add(2,5));
// console.log(sub(2,5));

//ESM모듈 가져오기
import {add, sub} from './math.js';
import multiply from './math.js'; // math.js에서 단 한가지만 디폴트로 설정할 수 있으며 이를 괄호 없이 호출 가능.
import randomcolor from 'randomcolor';

const colorString = randomcolor();

console.log(colorString);

console.log(add(2,5));
console.log(sub(2,5));
console.log(multiply(2,5));
