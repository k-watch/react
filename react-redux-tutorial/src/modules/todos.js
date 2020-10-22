import produce from "immer"
import { createAction, handleActions } from "redux-actions"

const CHANGE_INPUT = 'todos/CHANGE_INPUT'
const INSERT = 'todos/INSERT'
const TOGGLE = 'todos/TOGGLE'
const REMOVE = 'todos/REMOVE'

export const changeInput = createAction(CHANGE_INPUT, input => input)

let id = 3
export const insert = createAction(INSERT, text => ({ id: id++, text, done: false }))
export const toggle = createAction(TOGGLE, id => id)
export const remove = createAction(REMOVE, id => id)

const initState = {
    input: '',
    todos: [
        {
            id: 1,
            text: '공부하기',
            done: true
        },
        {
            id: 2,
            text: '수영하기',
            done: false
        }
    ]
}

const todos = handleActions(
    {
        [CHANGE_INPUT]: (state, { payload: input }) => produce(state, draft => { draft.input = input }),
        [INSERT]: (state, { payload: todo }) => produce(state, draft => { draft.todos.push(todo) }),
        [TOGGLE]: (state, { payload: id }) => produce(state, draft => {
            const todo = draft.todos.find(todo => todo.id === id)
            todo.done = !todo.done
        }),
        [REMOVE]: (state, { payload: id }) => produce(state, draft => {
            const index = draft.todos.findIndex(todo => todo.id === id)
            draft.todos.splice(index, 1)
        })
    }, initState
)














// const todos = handleActions(
//     {
//         [CHANGE_INPUT]: (state, { payload: input }) => produce(state, draft => { draft.input = input }),
//         [INSERT]: (state, { payload: todo }) => produce(state, draft => { draft.todos.push(todo) }),
//         [TOGGLE]: (state, { payload: id }) => produce(state, draft => {
//             const todo = draft.todos.find(todo => todo.id === id)
//             todo.done = !todo.done
//         }),
//         [REMOVE]: (state, { payload: id }) => produce(state, draft => {
//             const index = draft.todos.findIndex(todo => todo.id === id)
//             draft.todos.splice(index, 1)
//         })
//     }, initState
// )



// const todos = handleActions(
// {
// [CHANGE_INPUT]: (state, { payload: input }) => ({ ...state, input }),
// [INSERT]: (state, { payload: todo }) => ({ ...state, todos: state.todos.concat(todo) }),
// [TOGGLE]: (state, { paylaod: id }) => ({ ...state, todos: state.todos.map(todo => todo.id === id ? { ...todo, done: !todo.done } : todo) }),
// [REMOVE]: (state, { payload: id }) => ({ ...state, todos: state.todos.filter(todo => todo.id !== id) })
// }, initState
// )

// function todos(state = initState, action) {
//     switch (action.type) {
//         case CHANGE_INPUT:
//             return {
//                 ...state,
//                 input: action.input
//             }
//         case INSERT:
//             return {
//                 ...state,
//                 todos: state.todos.concat(action.todo)
//             }
//         case TOGGLE:
//             return {
//                 ...state,
//                 todos: state.todos.map(todo => todo.id === action.id ? { ...todo, done: !todo.done } : todo)
//             }
//         case REMOVE:
//             return {
//                 ...state,
//                 todos: state.todos.filter(todo => todo.id !== action.id)
//             }
//         default:
//             return state
//     }
// }

export default todos