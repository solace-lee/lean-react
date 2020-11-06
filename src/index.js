import React from 'react'
import ReactDOM from 'react-dom'
import TodoHeader from './components/TodoHeader.jsx'
import { Provider } from 'react-redux'
import store from './store'
import './index.css'
import TodoList from './components/TodoList.jsx'
import App from './App'

function Index(props) {
  return <>
    <Provider store={store}>
      <TodoHeader />
      <TodoList />
    </Provider>
  </>
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
