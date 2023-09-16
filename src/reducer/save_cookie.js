// stringReducer.js

// 액션 타입 정의
const SET_COOKIE = 'SET_COOKIE';

// 초기 상태
const initialState = {
  cookie: '', // 문자열 값을 저장할 상태
};

// 리듀서 함수
const cookieReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COOKIE:
      return {
        ...state,
        cookie: action.value,
      };
    default:
      return state;
  }
};

// 액션 생성자 함수
export const setCookie = (value) => ({
  type: SET_COOKIE,
  value,
});

export default cookieReducer;
