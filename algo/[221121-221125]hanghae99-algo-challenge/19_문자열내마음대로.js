//https://school.programmers.co.kr/learn/courses/30/lessons/12915
function solution(strings, n) {
    let answer = strings.sort(function(a,b) {
        if(a[n]>b[n]){
            return 1
        }else if(a[n]<b[n]){
            return -1
        }else if(a[n]===b[n]){
             if(a>b){
                 return 1 
             }else if(a<b){
                 return -1
             }
            return 0
        }
     })
     return answer
 }