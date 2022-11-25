//https://school.programmers.co.kr/learn/courses/30/lessons/42889
function solution(N, stages) {
  let failRate = [];

  let participants = stages.length;
  for (let i = 1; i <= N; i++) {
    let count = stages.filter((el) => el === i).length;

    failRate.push({
      stage: i,
      rate: count / participants,
    });
    participants -= count;
  }

  failRate.sort((a, b) => b["rate"] - a["rate"]);

  let answer = failRate.map((obj) => obj.stage);

  return answer;
}
console.log(solution(4, [4, 4, 4, 4, 4]));
//https://school.programmers.co.kr/learn/courses/30/lessons/42889/solution_groups?language=javascript
//세번째, 네번째 빠름 -> 공부해보기 


// sort 표현 방식 : 정확히 알 필요
//--------------------------------
//   failRate.sort(function (a, b) {
//     if (a["rate"] > b["rate"]) {
//       return -1;
//     } else if (a["rate"] < b["rate"]) {
//       return 1;
//     }
//     return 0;
//   });

//   failRate.sort((a,b)=>b['rate']-a['rate']) -> 요거 됨, 깔끔
//   failRate.sort(function(a,b){b['rate']-a['rate']}) -> 요건 안됨
//   failRate.sort(function(a,b){return b['rate']-a['rate']}) -> 요건 됨
