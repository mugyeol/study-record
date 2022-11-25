function solution(d, budget) {
    
    let sum=0
    let count = 0
    d.sort(function(a,b){
        return a-b
    })
    while(sum<=budget){
        sum+=d[count]
        count ++
    }
    
    return count-1;
}
console.log(solution([2,2,3,3],10))