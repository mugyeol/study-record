function solution(n) {
  let countArray = new Array(n + 1).fill(0);
  countArray[0] = 1; //n=1
  countArray[1] = 1; //n=2
  countArray[2] = 1; //n=2
  //테스트
  let forcount = 0;
  let testArr = [];

  // 3부터 초기 셋팅 시작
  for (let i = 3; i <= n; i++) {
    if (countArray[i] === 0) {
      let count = 1;
      let max = Math.floor(i / 2) + 1;
      for (let p = 1; p <= max - 1; p++) {
        let acc = 0;
        for (let x = p; x <= max; x++) {
          acc += x;
          if (acc === i) {
            count++;
            break;
          }
        }
      }
      countArray[i] = count;
      for (let p = i + i; p <= n; ) {
        countArray[p] = count;

        //테스트
        testArr.push(p);
        forcount += 1;

        p = p * 2;
      }
    }
  }
  console.log("countArray", countArray);
  let arr3 = [...new Set(testArr)];
  console.log("testArr2", arr3.length);
  return countArray[n];
}
console.log("solution", solution(30));
// 5-> 10 -> 20 -> 40 ->
