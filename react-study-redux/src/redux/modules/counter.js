// src/modules/counter.js

// 추가된 코드 👇 - 액션 value를 상수들로 만들어 줍니다. 보통 이렇게 한곳에 모여있습니다.
const ADD_NUMBER = "ADD_NUMBER";
const MINUS_NUMBER = "MINUS_NUMBER";

// 추가된 코드 👇 - Action Creator를 만들어 줍니다.
export const addNumber = (payload) => {
  return {
    type: ADD_NUMBER,
    payload
  };
};

export const minusNumber = (payload) => {
  return {
    type: MINUS_NUMBER,
    payload
  };
};

// 초기 상태값
const initialState = {
  number: 0,
};

// 리듀서
const counter = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NUMBER:
      return {
        number: state.number + action.payload,
      };
    case MINUS_NUMBER:
      return {
        number:state.number - action.payload,
      }
    default:
      return state;
  }
};

export default counter;
