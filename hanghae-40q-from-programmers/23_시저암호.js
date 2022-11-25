//https://school.programmers.co.kr/learn/courses/30/lessons/12926
function solution(s, n) {
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    let code = s.charCodeAt(i),
      filter = code === 32 ? "blank" : code < 97 ? "upper" : "lower",
      caesar = code + n,
      codeTrim;

    switch (filter) {
      case "blank":
        codeTrim = code;
        break;
      case "upper":
        codeTrim = caesar > 90 ? 65 + (caesar - 91) : caesar;
        break;
      case "lower":
        codeTrim = caesar > 122 ? 97 + (caesar - 123) : caesar;
        break;
    }

    answer += String.fromCharCode(codeTrim);
  }
  return answer;
}
console.log(solution("a B z", 4));
//https://school.programmers.co.kr/learn/courses/30/lessons/12926/solution_groups?language=javascript