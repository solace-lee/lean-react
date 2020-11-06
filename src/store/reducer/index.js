import { ADD_TODO, TOGGLE_COMPLETE } from "../action/types";

let initState = {
    todos: [
        {
            id: (Math.random() * 1000000),
            title: '学习react',
            isComplete: true
        },
        {
            id: (Math.random() * 1000000),
            title: '学习node',
            isComplete: false
        },
        {
            id: (Math.random() * 1000000),
            title: '学习Hooks',
            isComplete: false
        }
    ]
}

function reducer(state = initState, action) {
    let nextState = null;
    switch (action.type) {
        case TOGGLE_COMPLETE:
            nextState = {
                ...state,
                todos: state.todos.map(item => {
                    if (String(item.id) === String(action.playload.id)) {
                        return {
                            ...item,
                            isComplete: action.playload.isComplete
                        }
                    } else {
                        return item
                    }
                })
            }
            break;
        case ADD_TODO:
            nextState = { ...state, todos: [...state.todos, action.playload] }
            // nextState = { ...state }
            // nextState.todos.push(action.playload)
            break;
        default:
            nextState = state
            break;
    }



    return nextState
}

// [].push 
// [...arr, item] []

export default reducer