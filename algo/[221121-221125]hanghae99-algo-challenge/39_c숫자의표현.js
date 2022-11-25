function solution(n){
    let answer = 0;
    let total=0
    let plusArr = []
    for(let i = 0; i <= n; i++){
        total += i;
        plusArr.push(total)
    }
    for(let i = n; i >= 0; i--){
        for(let l = i-1; l >= 0; l--){
            if(plusArr[i] - plusArr[l] === n){
                answer++;
                break;
            }
            if(plusArr[i] - plusArr[l] > n){
                break;
            }
        }
    }
    return answer
}
console.log(solution(15));
