function solution(n, m) {
  let divMax = 0;
  let timesMin = 0;
  let big = n > m ? n : m;
  let small = n > m ? m : n;
  if (big === small) {
    timesMin = big;
    divMax = big;
  } else {
    // 최소 공배수
    if (big % small === 0) {
      timesMin = big;
    } else {
      let i = 2;
      let count = 0;
      let arr1 = [];
      while (count < 1) {
        arr1.push(big * i);
        if (arr1.includes(small * i)) {
          count++;
          timesMin = small * i;
        }
        i++;
      }
    }
  }
  //최대 공약수
  let i = small;
  let count =0;
  while (i > 1 && count<1 && big !== small) {
    if (big % i === 0 && small % i === 0) {
      divMax = i;
      count++
    }
    i--;
  }
  divMax = divMax === 0 ? 1 : divMax;

  return [divMax, timesMin];
}

console.log(solution(22132, 421312));
