function solution(n) {
  let answer = 0;
  let prime = new Array(n).fill(true);
  console.log(prime.length);
  prime[0] = false;
  prime[1] = false;
  //소수 배열 세팅
  for (let i = 2; i <= n; i++) {
    if (prime[i]) {
      for (let l = i + i; l <= n; l += i) {
        prime[l] = false;
      }
      if (i * i >= n) break;
    }
  }

  for (let i = 0; i <= n; i++) {
    if (prime[i]) {
      answer++;
    }
  }
  return answer;
}

function solution(n) {
  let answer = 0;

  for (let i = 2; i < n + 1; i++) {
    let p = 2;
    let count = 0;
    while (count < 1) {
      if (i % p === 0) {
        count++;
      }
      if (count === 0 && p > Math.sqrt(i)) {
        count++;
        answer++;
      }
      p++;
    }
  }
  return answer+1 //2그냥 지나간거 -> +1
}

console.log(solution(10));
