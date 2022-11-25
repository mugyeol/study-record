(function (numbers) {
 let answer = [];
  for (let i = 0; i < numbers.length; i++) {
    let arr = [...numbers];
    arr.splice(i, 1);
    for (let idx = 0; idx < arr.length; idx++) {
      let num = arr[idx] + numbers[i];
      if (!answer.includes(num)) {  //이거 대신 끝에 new Set으로 해줄수도 있음 
        answer.push(num);
      }
    }
  }
  answer.sort(function (a, b) {
    return a - b;
  });
  console.log(answer);
  return answer;
})([2, 1, 3, 4, 1]);
