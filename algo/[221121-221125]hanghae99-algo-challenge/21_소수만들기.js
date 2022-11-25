// https://school.programmers.co.kr/learn/courses/30/lessons/12977
(function (nums) {
  let plusSet = [];
  for (let x = 0; x < nums.length - 2; x++) {
    for (let y = x + 1; y < nums.length; y++) {
      for (let z = y + 1; z < nums.length; z++) {
        let num = nums[x] + nums[y] + nums[z];
        plusSet.push(num);
      }
    }
  }
  let ansArr = [];
  plusSet.map((val) => {
    let count = 0;
    let i = 2;
    while (count < 1) {
      if (val % i === 0) {
        count++;
      }
      if(count ===0 && i>Math.sqrt(val) ){
        ansArr.push(val)
        count ++
      }
      i++;
    }
  });
  return ansArr.length;
})([1, 2, 7, 6, 4]);
// https://school.programmers.co.kr/learn/courses/30/lessons/12977/solution_groups?language=javascript

//아래에서 while문 도는 횟수 줄일려고 하다보니 규칙이 보여서 위에로 바꿈
//제곱근에 대해서 잠깐 생각하다가 적어도 자신의 1/2 숫자보다 커지면 나눌 수 없겠거니 까지만 생각하고 코드를 작성했는데 
//2부터 제곱근 보다 작은 수로 나눌 수 없으면, 소수이다. 
//즉, 1/2 보다 작은 수가 아니라 제곱근보다 작은 nums들로 테스트 하면 된다.  


// (function (nums) {
//     var answer = -1;
//     let plusSet = [];
  
//     for (let x = 0; x < nums.length - 2; x++) {
//       for (let y = x + 1; y < nums.length; y++) {
//         for (let z = y + 1; z < nums.length; z++) {
//           let num = nums[x] + nums[y] + nums[z];
//           plusSet.push(num);
//         }
//       }
//     }
  
//       let ansArr = [];
//       plusSet.map((val) => {
//         let count = 0;
//         if (val%2===0 && val % (val / 2)=== 0) {
//             console.log("val/2",val/2)
//             count+=1;
//         }
//         for (let i = 2; i < val / 3 + 1; i++) {
//             if (val % i === 0) {
//               count += 1;
//             }
//           }
//           console.log("count",count)
//           count === 0 && ansArr.push(val);
//       });
  
//     console.log(ansArr);
  
//     return answer;
//   })([1, 2, 7, 6, 4]);
  
