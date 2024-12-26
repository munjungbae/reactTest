//외부에 존재하는 모듈을 가져오기
//require => math.js에서 export시킨 값을 import하는 느낌

// const moduleData = require('./math');
// console.log(moduleData.add(2,5));
// console.log(moduleData.sub(2,5));

// const {add,sub} = require('./math');
// console.log(add(2,5));
// console.log(sub(2,5));

//ESM모듈 가져오기
import {add,sub} from './math.js';
console.log(add(2,5));
console.log(sub(2,5));
