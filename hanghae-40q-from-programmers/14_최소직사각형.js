function solution(sizes) {
  let w = [];
  let h = [];
  for (let i = 0; i < sizes.length; i++) {
    w.push(sizes[i][0]);
    h.push(sizes[i][1]);
  }
  console.log("w",w)
  console.log("h",h)
  
  const width = [...w, ...h].sort(function (a, b) {
    return b - a;
  })[0];

  const forHeight = w.includes(width) ? [...h] : [...w]
  const left = w.includes(width) ? [...w] : [...h]
  
  
  forHeight.map((hval, index) => {
    if (hval > left[index]) forHeight.splice(index, 1, left[index]);
  });
  console.log("forHeight",forHeight)

  const height = forHeight.sort(function(a,b){
    return b-a;
  })
  
  return width*height[0];
}
solution([[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]]);
//다른사람 풀이 
// https://school.programmers.co.kr/learn/courses/30/lessons/86491/solution_groups?language=javascript
