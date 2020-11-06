import React from 'react'
import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, HashRouter as Router, Switch, Link } from 'react-router-dom'
import useRouter from '../router'
import { ADD_TODO } from '../store/action/types'

function TodoHeader(props) {
    let state = useSelector((state) => ({ todos: state.todos }))
    let newTodoInput = useRef(null) // 创建ref对象
    let dispatch = useDispatch()


    function addClick(e) {
        let title = newTodoInput.current.value
        console.log(title);
        dispatch({
            type: ADD_TODO, playload: {
                id: Math.random() * 1000000,
                title,
                isComplete: false
            }
        })
        // router.push('/about')
        // props.history.push('/about')
        console.log(props);
    }

    function getUncompleteCount(todos) {
        return todos.filter(item => !item.isComplete).length
    }
    return (<div>
        <div>您有{getUncompleteCount(state.todos)}项Todo未完成</div>
        <div>
            <input type='text' value='测试' ref={newTodoInput} />
            <button type="button" onClick={addClick}>添加</button>
        </div>
        <Router forceRefresh={false} keyLength={12}>
            <Switch>
                <Route key='1' exact path='/' component={Main}></Route>
                <Route key='2' exact path='/about' component={About}></Route>
            </Switch>
        </Router>
    </div>)
}

function Main(props) {
    const router = useRouter()
    function test() {
        // props.history.push('/about')
        router.push('/about')
    }
    return (
        <div>这是首页
            <button onClick={test}>点击</button>
        </div>

    )
}

function About(props) {
    function test(params) {
        const request = indexedDB.open('myDatabase2', 3);
        request.addEventListener('upgradeneeded', e => {
            const db = e.target.result;
            const store = db.createObjectStore('Users', { keyPath: 'userId', autoIncrement: false });
            console.log('创建对象仓库成功');
        });
        request.addEventListener('success', e => {
            console.log('连接数据库成功')
            const db = e.target.result;
            const tx = db.transaction('Users', 'readwrite');
            const store = tx.objectStore('Users');

            // 保存数据
            const reqAdd = store.add({ 'userId': 8, 'userName': '李白', 'age': 24 });

            reqAdd.addEventListener('success', e => {
                console.log('保存成功')
            })
        })
        request.addEventListener('error', e => {
            console.log('数据库连接失败')
        })
    }
    return (
        <div>这是关于页
            <Link to='/' >4545455</Link>
            <button onClick={test}>点击</button>
        </div>
    )
}

export default TodoHeader