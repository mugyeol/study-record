function solution(arr) {

// 테스트 1 〉	통과 (12.76ms, 83MB)
// 테스트 2 〉	통과 (11.37ms, 83.1MB)
// 테스트 3 〉	통과 (11.66ms, 83.4MB)
// 테스트 4 〉	통과 (41.06ms, 83MB)
let answer = []
for (let i=0; i<arr.length; i++){
    arr[i] !== arr[i+1] && answer.push(arr[i])
  }
  
//-- 참고용 --//

//   테스트 1 〉	통과 (23.21ms, 83.2MB)
//   테스트 2 〉	통과 (25.43ms, 83.1MB)
//   테스트 3 〉	통과 (25.64ms, 83MB)
//   테스트 4 〉	통과 (25.39ms, 83.2MB)

answer = arr.filter((val,index) => val != arr[index+1]);

// 테스트 1 〉	통과 (21.11ms, 83.3MB)
// 테스트 2 〉	통과 (20.42ms, 83.3MB)
// 테스트 3 〉	통과 (47.16ms, 82.7MB)
// 테스트 4 〉	통과 (49.78ms, 82.3MB)
// arr.forEach((value, index) => {
//     value !== arr[index+1] && answer.push(arr[index])
//   });

//시간 초과
// let answer = arr;
//   let i = 0;
//     while (i!==answer.length-1) {
//         console.log("while i ",i)
//       answer[i] === answer[i + 1] ?  answer.splice(i, 1) : i++
//     }


  return answer;
}
solution([4,4,4,3,3])
