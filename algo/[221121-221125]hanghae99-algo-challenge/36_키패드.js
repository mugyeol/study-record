function solution(numbers, hand) {
  var answer = "";

  let isLeftHanded = hand === "left";

  numbers.forEach((val, index) => {
    if (val === 0) numbers[index] = 11;
  });

  let leftHand = [10];
  let rigthHand = [12];

  let position = [
    [],
    [0, 0],[0, 1],[0, 2],
    [1, 0],[1, 1],[1, 2],
    [2, 0],[2, 1],[2, 2],
    [3, 0],[3, 1],[3, 2],
  ];
  
  function forCompare(left, right, number) {
    let leftPos = position[left];
    let rightPos = position[right];
    let numPos = position[number];
    let disFromLeft =
      Math.abs(numPos[0] - leftPos[0]) + Math.abs(numPos[1] - leftPos[1]);
    let disFromRight =
      Math.abs(numPos[0] - rightPos[0]) + Math.abs(numPos[1] - rightPos[1]);
    return disFromLeft - disFromRight;
  }

  numbers.forEach((number, i) => {
    let pos = position[number];

    if (pos[1] === 0) {
      leftHand.push(number);
      answer += "L";
    } else if (pos[1] === 2) {
      rigthHand.push(number);
      answer += "R";
    } else {
      let compare = forCompare(
        leftHand[leftHand.length - 1],
        rigthHand[rigthHand.length - 1],
        number
      );
      if (compare < 0) {
        leftHand.push(number);
        answer += "L";
      } else if (compare > 0) {
        rigthHand.push(number);
        answer += "R";
      } else {
        if (isLeftHanded) {
          leftHand.push(number);
          answer += "L";
        } else {
          rigthHand.push(number);
          answer += "R";
        }
      }
    }
  });

  return answer;
}
console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right"));
