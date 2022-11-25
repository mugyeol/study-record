// https://school.programmers.co.kr/learn/courses/30/lessons/64061
function solution(board, moves) {
  let picked = [];
  while ((i = moves.shift())) {
    let index = i - 1;
    for (let x = 0; x < board.length; x++) {
      let col = board[x];
      if (col[index] !== 0) {
        picked.push(col[index]);
        col[index] = 0;
        // }
        break;
      }
    }
  }
  let idx = 0;
  let explode = 0;
  while (idx < picked.length) {
    if (picked[idx] === picked[idx + 1]) {
      picked.splice(idx, 2);
      explode += 2;
      idx = 0;
    } else {
      idx++;
    }
  }
  return explode;
}

console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  )
);
//https://school.programmers.co.kr/learn/courses/30/lessons/64061/solution_groups?language=javascript
//4->3->1->1->3->2->4
