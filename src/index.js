import React from 'react'
import ReactDOM from 'react-dom'
import TodoHeader from './components/TodoHeader.jsx'
import { Provider } from 'react-redux'
import store from './store'
import './index.css'
import TodoList from './components/TodoList.jsx'

function Index(props) {
  return <>
    <Provider store={store}>
      <TodoHeader />
      <TodoList />
    </Provider>
  </>
}

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);
