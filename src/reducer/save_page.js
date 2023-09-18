
// 액션 타입 정의
const SET_PAGE = 'SET_PAGE';

// 초기 상태  
const initialState = {
  page: 1, // 문자열 값을 저장할 상태
};

// 리듀서 함수
const pageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PAGE:
      return {
        ...state,
        page: action.value,
      };
    default:
      return state;
  }
};

// 액션 생성자 함수
export const setPage = (value) => ({
  type: SET_PAGE,
  value,
});

export default pageReducer;
