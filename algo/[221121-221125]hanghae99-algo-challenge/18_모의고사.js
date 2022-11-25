(function solution(answers) {
  function repeat(arr) {
    return arr
      .join("")
      .repeat(
        answers.length % arr.length !== 0
          ? answers.length / arr.length + 1
          : answers.length / arr.length
      )
      .split("")
      .map(Number);
  }

  let arr1 = repeat([1, 2, 3, 4, 5]),
    arr2 = repeat([2, 1, 2, 3, 2, 4, 2, 5]),
    arr3 = repeat([3, 3, 1, 1, 2, 2, 4, 4, 5, 5]);

  let ans1 = arr1.filter((el, idx) => el === answers[idx]),
    ans2 = arr2.filter((el, idx) => el === answers[idx]),
    ans3 = arr3.filter((el, idx) => el === answers[idx]);

  let members = [
    { name: 1, count: ans1.length },
    { name: 2, count: ans2.length },
    { name: 3, count: ans3.length },
  ];

  members.sort(function (a, b) {
    if (a.count > b.count) {
      return -1;
    }
    if (a.count < b.count) {
      return 1;
    }
    return 0;
  });
  let answerArr = members.filter((el) => el.count === members[0].count);
  let answer = [];
  answerArr.map((el) => {
    answer.push(el.name);
  });

  return answer;
})([1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2]);
