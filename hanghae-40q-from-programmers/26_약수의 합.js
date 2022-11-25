function solution(n) {
    var answer = 0;
  
    for (let i = 1; i <=Math.sqrt(n); i++) {
      if (n % i === 0) {
        i*i === n ? (answer += i) : (answer += i + n / i);
      }
    }
  
    return answer;
  }
  