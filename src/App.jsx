import { useState } from 'react'
import './App.css';
import AddTodo from './components/AddTodo'
import TodoS from './components/TodoS';

function App() {

  return (
    <div className='center-all-data'>
        <AddTodo />
        <TodoS />
    </div>
  )
}

export default App
