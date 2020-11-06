import { createStore } from 'redux'
import reducer from './reducer'
let store = createStore(reducer); // 传入reducer
export default store; // 导出仓库
