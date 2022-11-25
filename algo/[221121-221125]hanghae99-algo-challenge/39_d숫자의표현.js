function solution(n) {
  var answer = 1;

  let max = Math.floor(n / 2) + 1;
  console.log("max", max);
  let arr = [];
  for (let i = max; i > 0; i--) {
    let acc = 0;
    let arr2 = [];
    for (let x = i-1; x > 0; x--) {
      acc += x;
      arr2.push(x);
      console.log("acc", acc);

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
