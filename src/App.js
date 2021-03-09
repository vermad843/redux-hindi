import React from 'react'
import './App.css';
import AddTodo from './components/AddTodo/AddTodo';
import List from './components/List/List';


function App() {
  return (
    <div className="App">
       <h1>Hello World</h1>
       <AddTodo/>
       <List/>
    </div>
  );
}

export default App;
