function solution(month, day) {
  
  //월 별 누적 된 일수 배열 생성
  const accDate = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
  
  //현재 날짜까지 누적된 일 수 + 98일
  let completeDays = accDate[month - 1] + day + 98;
  
  //completeDays가 365를 초과하면 365일을 빼준다
  let trimDays = completeDays > 365 ? completeDays - 365 : completeDays;
  
  //누적 일수 배열에서 trimDays보다 숫자가 작은 요소들만 필터링 해준다. 
  let leftMonths = accDate.filter((el) => el < trimDays);

  //leftMonths의 길이는 완료일의 월이 된다. 
  let m = leftMonths.length;

  //trimDays에서 leftMonths 배열의 마지막 요소 일수를 빼주면 완료일의 날짜가 된다. 
  let dates = trimDays - leftMonths[leftMonths.length - 1];

  let answer = m + "월 " + dates + "일";

  return answer;
}
console.log(solution(1, 18));
