//https://school.programmers.co.kr/learn/courses/30/lessons/92342
function solution(n, info) {
  var answer = [];

  // n=1, [10] => [10] lose
  // n=1, [9] => [10] win
  // n=1, [8] => [10] win
  // n=2, [10,10] => [10,10] lose
  // n=2, [10,9] => [10,10] win
  // n=2, [9,9] => [10,10] win
  // n=3, [10,10,7] => [10,10,10] win
  // n=3, [10,9,8] => [10,10,9]lose
  // 최고 득점은 10부터 하나씩 다 맞추는 것

  //기회 세번일 때-> 10,9,8 = 27
  //7+8+9+10 = 34   4*(7+10)/2

  //5 6 7 8 9 10 = 45

  const highest = (n) => {
    const highScore = (n * (20 - (n - 1))) / 2;
    return highScore;
  };
  console.log(highest(4));

  let ryanWin = new Array(11).fill(0);

  // 아파치가 p점을 맞춘 횟수 - x
  // 라리언이 p점을 맞춘 횟수 - y
  // y가 x보다 클 때, p점을 획득
  // 기회 = n번

  return answer;
}
solution(5, [2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0]);

// function getCases(n = 5, apacheArr = [2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0]) {
//   //경우의 수를 (숫자 + 횟수 조합을)먼저 구해야 한다.
// }
// console.log(getCases());

// function getPoint() {}

// function calculatePoint(arr = []) {
//   let point = 0;

//   arr.forEach((win, index) => {
//     if (win) point += 10 - index;
//   });
//   return point;
// }
// console.log(
//   calculatePoint([
//     true,
//     true,
//     true,
//     true,
//     false,
//     false,
//     false,
//     false,
//     false,
//     false,
//     false,
//   ])
// );
