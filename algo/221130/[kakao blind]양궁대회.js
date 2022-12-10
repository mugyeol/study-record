//https://school.programmers.co.kr/learn/courses/30/lessons/92342
function solution(n, info) {
  var answer = [];

  // n=1, [10] => [10] lose
  // n=1, [9] => [10] win
  // n=1, [8] => [10] win
  // n=2, [10,10] => [10,10] lose
  // n=2, [10,9] => [10,10] win
  // n=2, [9,9] => [10,10] win
  // n=3, [10,10,7] => [10,10,10] win
  // n=3, [10,9,8] => [10,10,9]lose
  // 최고 득점은 10부터 하나씩 다 맞추는 것

  //기회 세번일 때-> 10,9,8 = 27
  //7+8+9+10 = 34   4*(7+10)/2

  //5 6 7 8 9 10 = 45

  const highest = (n) => {
    //ex. 4번 던지면 7,8,9,10이 최고 점수
    //한 점수 두번 던지면, 안던진 숫자 중 가장 높은 점수를 잃는 것과 같음 
    //최고 점수를 구하는게 핵심..? 
    // 아 근데 각 점수마다 이겨야되니까.. 개어렵네 
    //횟수에 따른 최고점수가 아닌, 
    //맞춘 점수로 생길 수 있는 경우의 수에서 최고 점수를 찾아야 함.. 
    //아파치가 맞춘 점수를 이겼을 때 얻는 점수를 계산하는 공식이 필요? 
    //그러면 아파치가 맞춘 각 점수 들을 이기는 경우의 수?를 구하면 되나? 
    //5, [2,1,1,1,0,0,0,0,0,0,0]	
    //동점일때도 지는거니까
    //일단 최고점 맞추면 질 수밖에 없네 (하나씩 맞추니까?)
    // 아니지,, 아파치가 적으면 지는거니까 고점들을 2번씩 맞추면 라이언이 이기지 ㅡ.ㅡ 
    // [1,1,1,1,1,1,1,1,1,1] : [2,2,2,2,2,0,0,0,0,0] 흠
    
    const highScore = (n * (10 - (n - 1)+10)) / 2;
    return highScore;
  };
  console.log(highest(4));

  let ryanWin = new Array(11).fill(0);

  // 아파치가 p점을 맞춘 횟수 - x
  // 라리언이 p점을 맞춘 횟수 - y
  // y가 x보다 클 때, p점을 획득
  // 기회 = n번

  return answer;
}
solution(5, [2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0]);


function solution(n, info) {
  let max = 0;
  let answer = [-1];
  let lion = Array(11).fill(0);

  //재귀 함수임 
  //level = 0, count = n으로 시작 
  function DFS(level,count){
      // 종료조건
      if(level == 10){ //인덱스의 마지막 
          lion[level] = count;
          // 점수비교
          let sum = 0
          for (let i = 0; i < 10; i++) {
              if(lion[i] > info[i]){
                  sum = sum + (10 - i);
              }else if(lion[i] === info[i]){
                  continue;
              }else{
                  sum = sum - (10 - i);
              }      
          }

          if(sum > max){
              max = sum;
              answer = [...lion];
          }else if(sum == max){
              // 낮은 개수를 더 맞추는 경우를 답으로 채용함
              for (let j = 10; j > 0; j--) {
                  if(answer[j] == lion[j]){
                      continue;
                  }else if(lion[j] > answer[j]){
                      answer = [...lion];
                      break;
                  }else{
                      break;
                  }
              }
          }
      // 계속진행
      }else{

          // 남은 화살개수가 없거나 + 어피차보다 많이 못맞출경우
          if(count == 0 || count < info[level] + 1 ){
              DFS(level+1,count);
          }else{
              // 어피치보다 많이 맞출경우
              lion[level] = info[level] + 1
              count = count - (info[level] + 1);
              DFS(level+1,count)


              // 다른 점수로 돌릴경우
              lion[level] = 0
              count = count + (info[level] + 1);
              DFS(level+1,count)
          }

      }


  }
  DFS(0,n)

  return answer;
}