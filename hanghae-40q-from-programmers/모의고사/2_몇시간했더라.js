function solution(arr1, arr2) {
  let answer = 0;

  //map함수를 이용해서 시작 시간 배열을 조회한다. 
  arr1.map((val, idx) => {
    //조건에 따라 완료 시간 배열에서 새벽 5시(이후) 체크아웃된 시간(29 이상)을 21로 바꿔준다. 
    let arr2Val = arr2[idx] >= 29 ? 21 : arr2[idx];
    //answer 변수에 [공부시간]완료시간 - 시작 시간을 누적한다. 
    answer += arr2Val - val;
  });

  return answer;
}
let arr1 = [9, 9, 9, 9, 7, 9, 8];
let arr2 = [23, 23, 30, 28, 30, 23, 23];
console.log(solution(arr1, arr2));