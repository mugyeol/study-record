function solution(new_id) {
  let str1 = "";
  str1 = new_id.toLowerCase();
  let str2 = "";
  for (let i = 0; i < str1.length; i++) {
    let ascii = str1.charCodeAt(i);
    // 소문자(97~122), 숫자()48~57, 빼기(-)(45), 밑줄(_)(95), 마침표(.)(46)
    if (
      (ascii >= 97 && ascii <= 122) ||
      (ascii >= 48 && ascii <= 57) ||
      ascii === 95 ||
      ascii === 45 ||
      ascii === 46
    ) {
      str2 += str1[i];
    }
  }
  str2 = str2.replace(/[.]{2,}/g, ".");
  str2 = str2[0] === "." ? str2.substring(1) : str2;
  str2 = str2.length === 0 ? "aaa" : str2;
  str2 = str2.length > 15 ? str2.substring(0, 15) : str2;
  str2 =
    str2[str2.length - 1] === "." ? str2.substring(0, str2.length - 1) : str2;  
  str2 =
    str2.length < 3
      ? str2.length===1 ? str2[0].repeat(3) : 
      str2[0] + str2[1].repeat(2)
      : str2;
  return str2;
}
console.log(solution("b-"));
