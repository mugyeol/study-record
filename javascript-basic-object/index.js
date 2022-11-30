
// Number - isNaN()
const l = 123.45678
console.log(l) //123.45678
let a = l.toFixed(3)
console.log(a) //123.457 (반올림)
console.log(l) //123.45678 (원시타입-원본은 안바뀜)
console.log(l.toFixed(2)) //123.46


console.log(Number.isNaN('1')) //false
console.log(Number.isNaN('a')) //false
console.log(Number.isNaN(1)) //false
console.log(Number.isNaN(Number('1'))) //false
console.log(Number.isNaN(Number('a'))) //true

const m = Number('a')
console.log(m===NaN) //NaN은 비교 연산자로 비교 불가능

// Number - isFinite()
console.log(10/0) //Infinity
console.log(-10/0) //-Infinity
console.log(Number.isFinite(10/0)) //false 
console.log(Number.isFinite(-10/0)) //false
console.log(Number.isFinite(1)) //true
console.log(Number.isFinite(10)) //true

const n = 10/0
console.log(n===Infinity) // true -> Infinity는 비교연선자로 비교 가능


//JSON.stringfy() JSON.parse()
const data = [{name:"kim",age:"22"},{name:"su",age:"28"}]
console.log(JSON.stringify(data)) 
//[{"name":"kim","age":"22"},{"name":"su","age":"28"}]

const obj = [{name:"kim",age:"22"},{name:"su",age:"28"}]
const jsonString = JSON.stringify(obj) //object to json 
console.log(jsonString) 
//[{"name":"kim","age":"22"},{"name":"su","age":"28"}]
console.log(JSON.parse(jsonString)) //json to object
//[ { name: 'kim', age: '22' }, { name: 'su', age: '28' } ]

//Math.random()
const num = Math.random()
console.log("0-1 사이 랜덤 숫자",num) // 0.10076737500665445
console.log("0-50 사이 랜덤 숫자",num*50) //5.038368750332722
console.log("0-100 사이 랜덤 숫자",num*100) //10.076737500665445

const sqrt = Math.sqrt(4)
console.log(sqrt) //2

const mathNum = 34.76
console.log(Math.floor(mathNum))//34
console.log(Math.ceil(mathNum))//35
console.log(Math.round(mathNum))//35
