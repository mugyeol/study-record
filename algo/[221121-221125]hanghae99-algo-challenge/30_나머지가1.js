//https://school.programmers.co.kr/learn/courses/30/lessons/87389
function solution(n) {
    var answer = 0;
    let i = 2;
    let count = 0
    while(count <1){
        if(n%i===1){
            count++
            answer = i
        }
        i++
    }
    return answer;
}

//다른 방법 
function solution(n) {
    let i = 1;
    while(i++){
        if(n%i===1){
            return i
        }
    }
}
// https://school.programmers.co.kr/learn/courses/30/lessons/87389/solution_groups?language=javascript