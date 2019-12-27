import React, { useState, Fragment, useEffect } from 'react';
import './App.css';
import Todo from './components/Todo'
import Header from './layouts/Header'
import AddTodoList from './components/AddTodoList'
import About from './components/About'
// import uuid from 'uuid'
import axios from 'axios'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  const url = "https://jsonplaceholder.typicode.com/todos";
  const [state, setState] = useState({
    todos : []
  });
  
  useEffect(() => {
    async function fetchData() {
      const response = await axios(`${url}?_limit=10`);
      setState({ todos: response.data })
    }
    fetchData();
  }, [])


  const markComplete = (id) => {
    setState({
      todos : state.todos.map(todo => {
        if(todo.id === id){
          todo.completed = !todo.completed
        }
        return todo;
      })
    });
  }

  const deleteList = (id) => {
    axios.delete(`${url}/${id}`)
    .then(res => setState({
      todos: [...state.todos.filter(todo => todo.id !== id)]
    }))
    
  }

  const addListing = (title) => {
    axios.post(url,{
      title,
      completed: false
    })
    .then(res => setState({ todos: [...state.todos, res.data] }))
  }

  return (
    <Router>
    <div>
      <div className="container">
        <Header />
        <Route exact path="/" render={props => (
          <Fragment>
            <AddTodoList addListing={addListing}/>
            <Todo todos={state.todos} markComplete={markComplete} deleteList={deleteList}/>
          </Fragment>
        )} />
        <Route path="/about" component={About}/>
      </div>
    </div>
    </Router>
  );
}

export default App;
