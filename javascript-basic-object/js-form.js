button.addEventListener("click", () => {
  // 입력을 숫자로 변환합니다 .
  const inch = Number(input.value); // 숫자가 아니라면 바로 리턴합니다 .
  if (isNaN(inch)) {
    p.textContent = " 숫자를 입력해주세요 ";
    return
  } // 변환해서 출력합니다 .
  const cm = inch * 2.54;
  p.textContent = `${cm} cm`;
});
