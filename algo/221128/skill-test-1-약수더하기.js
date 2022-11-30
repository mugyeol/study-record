function solution(number, limit, power) {
  var answer = 0;
  let testarr= []

  for (let i = 1; i <= number; i++) {
    let count = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        count += 1;

        // count = count > limit ? (count = power) : count;
      }
    }
    testarr.push({num:i,count:count})
    answer += count;
  }
  console.log(testarr)
  return answer;
}
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
  
solution(1000,0,0)