import React from 'react'
import PropTypes from 'prop-types'

function TodoList(props) {
    const {id, title} = props.todo;
    const getStyle = () => {
        return {
            padding : '10px',
            background : '#f4f4f4',
            borderBottom: '1px #ccc dotted',
            textDecoration : props.todo.completed ? 'line-through' : 'none'
        }
    }

    const btnStyle = {
        background: '#ff0000',
        color: '#fff',
        border: 'none',
        padding: '5px 9px',
        borderRadius: '50%',
        cursor: 'pointer',
        float: 'right'

    }

    return (
        <div style={getStyle()}>
            <p>
                <input type="checkbox" onChange={props.markComplete.bind(this, id)}/>{' '}
                {title}
                <button style={btnStyle} onClick={props.deleteList.bind(this, id)}>x</button>
            </p>
        </div>
    )
}

TodoList.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    deleteList: PropTypes.func.isRequired
}

export default TodoList

