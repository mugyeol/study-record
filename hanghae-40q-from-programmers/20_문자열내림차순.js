//ascii에서 대문자가 소문자보다 앞에 있다. 
// https://stepbystep1.tistory.com/10 ascii코드
function solution(s) {
    return s.split('').sort().reverse().join('');
}