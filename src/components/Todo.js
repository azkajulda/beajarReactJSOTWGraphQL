import React from 'react'
import PropTypes from 'prop-types'
import TodoList from './TodoList'

function Todo(props) {
    const listTodo = props.todos.map((todo) => 
        <TodoList key={todo.id} todo={todo} markComplete={props.markComplete} deleteList={props.deleteList}/>
    )


    return (
        <div>
            {listTodo}
        </div>
    )
}

Todo.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    deleteList: PropTypes.func.isRequired
}

export default Todo

