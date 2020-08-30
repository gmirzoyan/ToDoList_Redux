import React, {useState} from 'react';
import TodoItem from "./TodoItem";
import {connect} from "react-redux";
import './App.css';

function Dashboard(props) {

    const [newTodo, setNewTodo] = useState('')

    const addButtonHandler = () => {
        props.addTodo(newTodo)
        setNewTodo('')
    }

    const {todos} = props;

    return (
        <div>
            {todos.map(el => <li className="list-group-item" key={el.id}><TodoItem el={el} update={props.update}/></li>)}


            {/*{todos.map(el =>*/}
            {/*    <ul><li>*/}
            {/*        {(el.done) ? <span> ✅ <del>{el.title}</del></span> : el.title}*/}
            {/*        <button onClick={() => props.deleteTodo(el.id)}>delete</button>*/}
            {/*        {(!el.done) ? <button onClick={() => props.doneTodo(el.id)}>Done</button> :*/}
            {/*            <button onClick={() => props.doneTodo(el.id)}>Undone</button>}*/}

            {/*    </li></ul>)}*/}

            <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} type='text'/>
            <button className="btn btn-success btn-sm" onClick={addButtonHandler}>Add new</button>

        </div>
    );
}

const mapStateToProps = (state) => ({
    todos: state.todos
});

const mapDispatchToProps = (dispatch) => ({
    addTodo: (todo) => dispatch({type: 'TODO_ADD', payload: todo}),
    // deleteTodo: (todoId) => dispatch({type: 'DELETE_TODO', payload: todoId}),
    // doneTodo: (todoId) => dispatch({type: 'DONE_TODO', payload: todoId}),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

