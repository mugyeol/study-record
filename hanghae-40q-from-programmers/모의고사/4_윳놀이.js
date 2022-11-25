function solution(arr1){
	//배 = 0
	//등 = 1
	let ansArr = ["윷","걸","개","도","모"]
	let count = arr1.reduce((acc,cur)=>{return acc+cur},0)
	return ansArr[count];
}
let arr1=[1,1,1,0];
console.log(solution(arr1))