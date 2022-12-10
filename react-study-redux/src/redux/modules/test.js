
const PLUS_TWO = "PLUS_TWO";
const MINUS_TWO = "MINUS_TWO";


// 추가된 코드 👇 - Action Creator를 만들어 줍니다. 
export const plusTwo = () => {
  return {
    type: PLUS_TWO,
  };
};

export const minusTwo = () => {
  return {
    type: MINUS_TWO,
  };
};


// 초기 상태값
const initialState = {
  num: 0,
};
const test = (state = initialState, action) => {
    console.log("test",action)
    switch (action.type) {
      case PLUS_TWO: // case에서도 문자열이 아닌, 위에서 선언한 상수를 넣어줍니다. 
        return {
          num: state.num + 1,
        };
      case MINUS_TWO: // case에서도 문자열이 아닌, 위에서 선언한 상수를 넣어줍니다. 
        return {
          num: state.num - 1,
        };
      default:
        return state;
    }
  };

  export default test