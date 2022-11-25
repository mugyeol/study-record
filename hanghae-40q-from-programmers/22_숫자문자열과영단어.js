//https://school.programmers.co.kr/learn/courses/30/lessons/81301
(function (s) {
  let arr = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  let answer;
  arr.map((val, index) => {
    answer = s.replaceAll(val, index);
    s = answer;
  });

  return +answer;
})("one4seveneight");
//https://school.programmers.co.kr/learn/courses/30/lessons/81301/solution_groups?language=javascript