//체격순 -> 바로 앞번호 & 뒷번호에게만 빌려줄 수 있다.
//전체 n, 도난당한학생번호 lost, 여벌학생번호 reserve
//학생수 2명 이상 30명 이하
// 도난당한사람 1명 이상 n명 이하, 중복 없음
// 여벌 학생도 도난 당할 수 있음 -> 체육복 하나, 빌려줄 수 없음
// 체육수업 들을 수 있는 학생 최댓값
// 기본적으로, return = (lost<=reserve ? n : n-(lost-reserve))
// 예외처리 1. lost.includes(reserve) ? reserve.splice(reserve.indexOf(lost-reserve),1)
function solution(n, lost, reserve) {
  let lost_copy = [...lost];
  let lost_reserve = reserve.filter((val) => lost.includes(val));
  if (lost_reserve.length > 0) {
    lost_reserve.map((val) => {
      reserve.splice(reserve.indexOf(val), 1);
      lost.splice(lost.indexOf(val), 1);
    });
  }
  let count = 0;
  for (let i = 0; i < reserve.length; i++) {
    for (let x = 0; x < lost.length; x++) {
      let lost_value = lost[x];
      let reserve_value = reserve[i];

      if (
        lost_value === reserve_value - 1 ||
        lost_value === reserve_value + 1
      ) {
        count += 1;
        reserve.splice(reserve.indexOf(reserve_value), 1);
        lost.splice(lost.indexOf(lost_value), 1);
      }
      console.log("lost_value", lost_value);
      console.log("reserve_value", reserve_value);
      console.log("count", count);
    }
  }

  return n - (lost_copy - count);
}



function solution(n, lost, reserve) {
  let students = new Array(n + 1).fill(true);

  lost.forEach((el) => {
    students[el] = false;
  });
  reserve.forEach((el, index) => {
    if (lost.includes(el)) {
      students[el] = true;
    }else{
        lost.forEach((val) => {
            if (val === el + 1 || val === el - 1) {
              students[val] = true;
            }
          });
    }

  });
  let answer = students.filter((el) => el).length - 1;
  return answer
}
console.log(solution(3, [3], [1]));
