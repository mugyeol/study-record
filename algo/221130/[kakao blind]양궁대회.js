//https://school.programmers.co.kr/learn/courses/30/lessons/92342
function solution(n, info) {
  var answer = [];

  // 아파치가 맞춘 횟수 - x
  // 라리언이 맞춘 횟수 - y

  // 1. 라이언이 이길수 있는 경우를 구한다.
  // 2.

  return answer;
}
solution(5, [2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0]);

function getCases(n = 5, apacheArr = [2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0]) {

    //경우의 수를 (숫자 + 횟수 조합을)먼저 구해야 한다. 
    

}
console.log(getCases());

function getPoint() {}

function calculatePoint(arr = []) {
  let point = 0;

  arr.forEach((win, index) => {
    if (win) point += 10 - index;
  });
  return point;
}
console.log(
  calculatePoint([
    true,
    true,
    true,
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ])
);
