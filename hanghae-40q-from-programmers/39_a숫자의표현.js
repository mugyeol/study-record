function solution(n) {
  var answer = 1;

  let max = Math.floor(n / 2) + 1;

  let arr = [];
  for (let i = 1; i <= max - 1; i++) {
    let acc = 0;
    let arr2 = [];
    for (let x = i; x <= max; x++) {
      arr2.push(x);
      acc += x;
      if (acc === n) {
        answer++;
        arr.push([...arr2]);
        break;
      }
    }
  }
  console.log(arr);

  return answer;
}
console.log(solution(24));

