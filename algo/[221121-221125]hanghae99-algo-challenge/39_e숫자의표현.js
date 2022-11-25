// best practice
function solution(n){
    let a = 1;
    let b = 2;
    let sum = a + b;

    let answer = 1;
    while (a < b) {
        while (sum < n) {
            sum += ++b;
        }
        if (sum == n) {
            answer++;
        }
        sum -= a++;
    }

    return answer;
}
function expressions(num) {
    var answer = 0; 

  for(var i=1; i<=num; i++) {
    if (num%i == 0 && i%2 == 1)
      answer++
  }
    return answer;
}

solution(15)