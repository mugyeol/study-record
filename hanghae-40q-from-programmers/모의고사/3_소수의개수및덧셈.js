function solution(s) {
  let answer = "";
  //소수가 아닌 수 중 최소값을 찾기 위한 배열을 생성한다. 
  let forMin = [];
  //소수인 수 중 최대값을 찾기 위한 배열을 생성한다. 
  let forMax = [];
  //매개변수 문자열 s를 오름차순 정렬된 숫자배열로 만들어준다. 
  let arr = s.split(" ").map(Number).sort(function(a,b){
   return a-b
  });
  //map함수를 이용해서 요소들을 조회한다. 
  arr.map((val) => {
    let count = 0;
    let i = 2;
    //현재 인덱스의 요소(val)가 소수/소수가 아닌게 판별이 되면 카운트가 올라가서 반복문이 종료된다. 
    while (count < 1) {
      //나눠지는 수를 %를 이용해서 체크 &&
      //2부터 시작하기 때문에 2를 예외처리
      if (val % i === 0 && val!==2) {
        //소수가 아닌 수는 최소값을 구하기 때문에 배열에 하나만 넣어준다. 
        if(forMin.length===0) forMin.push(val);
        count++;
      }
      //아직 나누어 지지 않았으면서 제곱근보다 i가 커질 때 해당 요소(val)를 소수로 판단한다. 
      if (count === 0 && i > Math.sqrt(val)) {
        forMax.push(val);
        count++;
      }
      i++;
    }
  });
  answer = forMin[0] + " " + forMax[forMax.length - 1];
  return answer;
}
let s = "97 75 88 99 95 92 73";
console.log(solution(s));
