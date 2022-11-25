// rottos와 win nums로 얻을 수 있는 것
// :0의 갯수, 적중 갯수
// 최고 적중 -> 적중 + 0의 갯수 (2이상은 2) else 적중
// 최저 적중 -> 적중
// 적중 0, 1 -> 6위
// 적중 2 이상 (n) -> 7-n

function solution(lottos, win_nums) {
  let withoutZero = lottos.filter((el) => el !== 0),
    correctCount = withoutZero.filter((el) => win_nums.includes(el)).length,
    zeroCount = 6 - withoutZero.length,
    correctHigh = correctCount + zeroCount,
    rankHigh = correctHigh < 2 ? 6 : 7 - correctHigh,
    rankLow = correctCount < 2 ? 6 : 7 - correctCount;
  return [rankHigh, rankLow];
}
