// 문제 1. 2016 윤달
function solution(month, day) {
  //2016 요일 순서에 맞게 배열 생성
  //1일(index) -> 금요일, 8일 % 7 = 1-> 금요일
  // 목요일은 index = 0
  const dayList = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"];
  //월별 날짜 수 배열 생성
  const daysPerMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  //매개변수 month부터 12월까지 삭제
  daysPerMonth.splice(month - 1, daysPerMonth.length - (month - 1));
  //1월은 0, 나머지 달은 매개변수 month이전 달까지 날 합산
  let pastMonthDays =
    daysPerMonth.length === 0
      ? day
      : daysPerMonth.reduce((pVal, cVal) => pVal + cVal) + day;
  return dayList[pastMonthDays % 7];
}
// solution(5,24)

//문제2.
function solution(arr, divisor) {
  //나머지 0인 수들 배열로 반환
  var answer = arr.filter((el) => el % divisor === 0);
  //없으면 -1 넣어주기
  if (answer.length === 0) answer.push(-1);
  //오름차순 정렬
  else {
    answer.sort(function (a, b) {
      return a - b;
    });
  }
  console.log(answer);
  return answer;
}
// solution([9, 7], 5);

//문제3.
function solution(n) {
  var answer = "";
  let arr = new Array(n).fill("");
  arr.forEach((value, index) => {
    answer += index % 2 === 0 ? "수" : "박";
  });
  return answer;
}
// solution(4)

//문제4.
function solution(participant, completion) {
  var answer = "";
  participant.sort();
  completion.sort();
  for (let i = 0; i < participant.length - 1; i++) {
    if (participant[i] !== completion[i]) {
      answer = participant[i];
      break;
    }
  }
  if (answer === "") answer = participant[participant.length - 1];
  console.log(answer);
  return answer;
}
// solution(["mislav", "stanko", "mislav", "ana","mcho"], ["stanko", "ana", "mislav","stanko"]);
//다른 사람들 : https://school.programmers.co.kr/learn/courses/30/lessons/42576/solution_groups?language=javascript

//문제5.
//하나 이상의 공백문자 ㅋ 처리해줘야함
function solution(s) {
  var answer = "";
  let arr = s.split(""); //배열로 만들어주기
  for (let i = 0; i < arr.length; ) {
    //띄어쓰기인 경우,
    if (arr[i] === " ") {
      //배열에서 띄어쓰기 까지 삭제 (delete count = index + 1)
      for (let q = i; q < arr.length; q++) {
        if (arr[q] !== " ") {
          arr.splice(0, q);
          break;
        } else if (q === arr.length - 1) {
          answer += " ";
          arr = [];
          break;
        } else {
          answer += " ";
        }
      }
      //i 초기화
      i = 0;
    } else {
      //단어의 첫글자(index 0)부터 짝수 -> 대문자 홀수-> 소문자(그대로)
      answer += i % 2 === 0 ? arr[i].toUpperCase() : arr[i];
      i++;
    }
  }
  return answer;
}
//5. 다시 
function solution(s){

  let count =0
  let str = ''
  for(let i=0; i<s.length; i++ ){
    if(s[i]===' '){
      count = 0;
      str+=' '
    }else if(count%2===0){
      str += s[i].toUpperCase()
      count ++
    }else{
      str+=s[i]
      count ++
    }
  }
  console.log(str)
}
// solution("  try  hello world  ");

//문제6
// initial value 0 안넣어주면 input 0 일때 "0" 문자열로 반환함,
function solution(n) {
  var answer = 0;
  let arr = String(n).split("");
  answer = arr.reduce((prv, cur) => Number(prv) + Number(cur), 0);
  return answer;
}
// solution(0);

//문제 7
function solution(n) {
  var arr = (n + "").split("").map(Number).reverse();
  return arr;
}
//문제 8
function solution(n) {
  var answer = "";
  (n + "")
    .split("")
    .map(Number)
    .sort(function (a, b) {
      return b - a;
    })
    .map((num) => {
      answer += num + "";
    });
  return Number(answer);
}

//문제9
//그냥 앞에서부터 찾아가는건 큰 수에서 비효율적일것 같음
//제곱근 공식 찾아봄
//https://mathbang.net/634 - 조선시대 수학자가 기록한 제곱근 구하는 방식..
//재밌어 보여서 요걸로 !
//2로 나누고 1부터 빼다가 음수 나올 때 빼려던 값과 남은 값 비교 ~
function solution(n) {
  var answer;
  var nDivided = n / 2;
  var num = n / 4;
  for (let i = 1; i <= num + 1; i++) {
    console.log("nDivided", nDivided);
    console.log("i", i);
    if (nDivided - (i + 1) < 0) {
      console.log("test1");
      if (nDivided * 2 === i) {
        console.log("test2");
        answer = (i + 1) * (i + 1);
        break;
      } else {
        console.log("test3");
        answer = -1;
        break;
      }
    } else {
      console.log("test4");
      nDivided -= i;
    }
  }
  console.log(answer);
  return answer;
}
// solution(4);

//문제 10.
function solution(arr) {
  var answer = [...arr];
  let min;
  if (arr.length === 1) {
    return [-1];
  } else {
    arr.sort(function (a, b) {
      return a - b;
    });
    min = arr[0];
  }
  answer.splice(answer.indexOf(min), 1);
  console.log(answer);

  return answer;
}
// 문제 10 - best practice
// function solution(arr) {
//   arr.splice(arr.indexOf(Math.min(...arr)),1);
//   if(arr.length<1)return[-1];
//   return arr;
// }

//문제 11
function solution(num) {
  var count =0;
  while(num>1){
      count+=1
      num%2===0 ? num = num/2 : num = num*3+1
  }
  return count >=500 ? -1 : count;
}
//12.
function solution(x) {
  const xSum = (x+"").split('').map(Number).reduce((prev,cur)=> prev+cur)
  return x%xSum ===0
}
// solution(17)

//13. 
function solution(n) {
  return parseInt(n.toString(3).split('').reverse().join(''),3);
}
// solution(45)

//14. 
function solution(sizes) {
  var answer = 0;
  let w = []
  let h = []

  for(let i=0; i<sizes.length; i++){

    for(let p=0; p<sizes(i).length; i++){
        w.push(sizes[i][0])
        h.push(sizes[i][1])
    }

  }
  console.log("w",w)
  console.log("h",h)

  return answer;
}
solution([[60, 50], [30, 70], [60, 30], [80, 40]])
