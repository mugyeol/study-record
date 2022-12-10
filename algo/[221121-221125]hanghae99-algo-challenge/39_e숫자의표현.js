// best practice
function solution(n){
    let a = 1;
    let b = 2;
    let sum = a + b;

    let answer = 1;
    while (a < b) { //첫번째 포인터가 두번째 포인터보다 커지면 escape
        while (sum < n) { // sum이 주어진 수 n보다 커지면 escape
            sum += ++b; // sum(최초 3)에 b를 1씩 올리면서 더해준다 sum이 주어진 수 n보다 같거나 커지면 break
        }
        if (sum == n) { // sum이 n이랑 같은 경우 answer(경우의 수) + 1
            answer++;
        }
        sum -= a++; // b를 올리는 사이클이 한번 끝나면, sum을 1높여서 새로운 사이클 시작 
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