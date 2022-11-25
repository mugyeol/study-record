function solution(left, right) {
    var answer = 0;
        for(let i=left; i<=right; i++){
            let sqrt = Math.sqrt(i)
            sqrt%1 ===0 ? answer-=i : answer+=i
        }
    return answer;
}
console.log(solution(24,27))