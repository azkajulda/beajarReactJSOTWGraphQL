import React, { useState } from 'react'
import PropTypes from 'prop-types'

function AddTodoList(props) {
    const [state, setState] = useState({
        title: ''
    });

    const onChange = (e) => setState({ [e.target.name]: e.target.value});


    const onSubmit = (e) => {
        e.preventDefault();
        props.addListing(state.title);
        setState({ title: '' });
    }
    
    return (
        <form style={{display: 'flex'}} onSubmit={onSubmit}>
            <input 
                type="text" 
                name="title"
                placeholder = "Masukan Todo Disini" 
                style={{flex: "10", padding:"5px"}}
                value={state.title}
                onChange={onChange}
            />

            <input 
                type="submit" 
                value="Sumbit" 
                className="btn"
                style={{flex: "1"}}
            />
        </form>
    )
}

AddTodoList.propTypes = {
    addListing: PropTypes.func.isRequired
}

export default AddTodoList

