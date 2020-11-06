import React, { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { TOGGLE_COMPLETE } from "../store/action/types"




export default function TodoList(props) {
    let state = useSelector((state) => state);

    const inputEl = useRef('testRef');

    let dispatch = useDispatch(); // 取得派发方法

    const onButtonClick = () => {
        // `current` 指向已挂载到 DOM 上的文本输入元素
        inputEl.current.focus();
        console.log(inputEl);
    };


    function renderList(todos) {
        function itemChange(e) {
            const { target } = e;
            dispatch({
                type: TOGGLE_COMPLETE, playload: {
                    id: target.dataset.id, // 取得当前ID值
                    isComplete: target.checked
                }
            })
        }

        return (
            <div>
                {todos.map((item, index) => {
                    if (item.isComplete) {
                        return <li key={index}>
                            <input type='checkbox' data-id={item.id} checked={true} onChange={itemChange} />
                            <del>{item.title}</del>
                        </li>
                    } else {
                        return <li key={index}>
                            <input type='checkbox' data-id={item.id} checked={false} onChange={itemChange} />
                            <span>{item.title}</span>
                        </li>
                    }
                })}
                <ChildrenNode />
                <input ref={inputEl} type="text" />
                <button onClick={onButtonClick}>Focus the input</button>
            </div>

        )
    }



    return <div>
        <ul>
            {renderList(state.todos)}
        </ul>
    </div>
}


function ChildrenNode(params) {
    return (
        <React.Fragment>
            <div>子组件</div>
            <button>传递数据</button>
        </React.Fragment>
    )
}

