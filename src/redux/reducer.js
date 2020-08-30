const initialState = {
    todos: [
        {
            title: '1 to do',
            done: true,
            id: 1,
        }, {
            title: '2 to do',
            done: false,
            id: 2,
        }, {
            title: '3 to do',
            done: false,
            id: 3,
        }, {
            title: '4 to do',
            done: false,
            id: 4,
        }
    ],
};

const todo = (state = initialState, action) => {
    switch (action.type) {

        case 'TODO_ADD':
            return {
                ...state,
                todos: [...state.todos, {title: action.payload, done: false, id: Math.random()}]
            };


        case 'DELETE_TODO':
            const newTodos = state.todos.filter(el => el.id !== action.payload)

            return {
                ...state,
                todos: newTodos
            };

        case 'DONE_TODO':
            const doneTodos = state.todos.map(el => {
                if (el.id === action.payload) {
                    el.done = !el.done;
                }
                return el;
            })

            return {
                ...state,
                todos: doneTodos
            }

        case 'EDIT_TODO':
            const editTodos = state.todos.map(el => {
                if (el.id === action.payload.todoId) {
                    el.title = action.payload.todoTitle;
                }
                return el;
            })

            return {
                ...state,
                todos: editTodos
            }

        default:
            return state;
    }
};

export default todo;
