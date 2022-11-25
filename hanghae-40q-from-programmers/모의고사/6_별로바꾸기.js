function solution(arr1) {
  const setUpArr = Array.from(Array(5).fill(true), () => new Array(5).fill(true));

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1[0].length; j++) {
      if (isStar(i, j)) {
        arr1[i][j] = "*";
      }
    }
  }
  function isStar(pos1, pos2) {
    if (setUpArr[pos1][pos2]) {
        if (arr1[pos1][pos2] > Math.max(...lrtb(pos1,pos2))) {
          setUp(pos1, pos2);
          return true;
        } else {
          setUpArr[pos1][pos2] = false;
          return false;
        }
      } else {
        return false;
      }
    function lrtb(pos1, pos2) {
        let left = pos2 !== 0 ? arr1[pos1][pos2 - 1] : 0,
          right = pos2 !== 4 ? arr1[pos1][pos2 + 1] : 0,
          top = pos1 !== 0 ? arr1[pos1 - 1][pos2] : 0,
          bottom = pos1 !== 4 ? arr1[pos1 + 1][pos2] : 0;
        let lrtb = [left, right, top, bottom];
        return lrtb;
      }
    
    function setUp(pos1, pos2) {
      if (pos2 !== 4) setUpArr[pos1][pos2 + 1] = false;
      if (pos1 !== 4) setUpArr[pos1 + 1][pos2] = false;
    }
  }

  function forAnswer(arr1) {
    let answer = "";
    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr1[0].length; j++) {
        answer += arr1[i][j];
        if (j === 4) answer += "\n";
      }
    }
    return answer;
  }
  console.log(forAnswer(arr1));
  console.log(setUpArr);
}
let arr1 = [
  [7, 4, 6, 5, 9],
  [6, 1, 3, 4, 5],
  [4, 8, 5, 6, 9],
  [1, 3, 0, 6, 4],
  [6, 4, 8, 1, 7],
];
solution(arr1);
