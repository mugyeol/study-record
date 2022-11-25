// https://school.programmers.co.kr/learn/courses/30/lessons/42748/solution_groups?language=javascript&type=my
function solution(array, commands) {
  var answer = [];

  for (let n = 0; n < commands.length; n++) {
    let i = commands[n][0];
    let j = commands[n][1];
    let k = commands[n][2];
    //구조분해 할당 가능 : const [sPosition, ePosition, position] = command 

    let sortedArr = array.slice(i - 1, j).sort((a, b) => {
      return a - b;
    });
    console.log(sortedArr);
    answer.push(sortedArr[k - 1]);
  }
  return answer;
}
console.log(
  solution(
    [1, 5, 2, 6, 3, 7, 4],
    [
      [2, 5, 3],
      [4, 4, 1],
      [1, 7, 3],
    ]
  )
);
//https://school.programmers.co.kr/learn/courses/30/lessons/42748/solution_groups?language=javascript&type=all