// store.js

import { createStore } from 'redux';
import rootReducer from './index'; // rootReducer를 가져옵니다.

const store = createStore(rootReducer);

export default store;
