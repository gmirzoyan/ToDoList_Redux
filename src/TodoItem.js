import React, {useState} from 'react';
import {connect} from "react-redux";

function TodoItem(props) {
    const {el} = props;
    const [edit, setEdit] = useState(false);
    const [inputTitle, setInputTitle] = useState(el.title);

    const inputOnChange = e => {
        setInputTitle(e.target.value)
    };

    const handleEdit = () => {
        setEdit(true);
    }

    const onUpdate = () => {
        props.editTodo(el.id, inputTitle);
        setInputTitle('')
        setEdit(false);
    }

    if (edit) {
        return (
            <div>
                <input value={inputTitle} onChange={inputOnChange}/>
                <button onClick={onUpdate}>Save</button>
            </div>
        );
    } else {
        return (
            <div className="container">
                {(el.done) ? <span> ✅ <del>{el.title}</del></span> : el.title}
                <button className="btn btn-outline-warning btn-sm" onClick={handleEdit}>Edit</button>
                <button className="btn btn-outline-dark btn-sm" onClick={() => props.deleteTodo(el.id)}>
                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-trash"
                         fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                        <path fill-rule="evenodd"
                              d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                    </svg>
                </button>
                {(!el.done) ? <button className="btn btn-outline-warning btn-sm" onClick={() => props.doneTodo(el.id)}>Done</button> :
                    <button className="btn btn-outline-warning btn-sm" onClick={() => props.doneTodo(el.id)}>Undone</button>}
            </div>
        )
    }

}

const mapStateToProps = (state) => ({
    todos: state.todos
});

const mapDispatchToProps = (dispatch) => ({
    deleteTodo: (todoId) => dispatch({type: 'DELETE_TODO', payload: todoId}),
    doneTodo: (todoId) => dispatch({type: 'DONE_TODO', payload: todoId}),
    editTodo: (todoId, todoTitle) => dispatch({type: 'EDIT_TODO', payload: {todoId, todoTitle}})
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);