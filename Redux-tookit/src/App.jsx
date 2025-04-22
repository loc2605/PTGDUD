import React from 'react';
import Counter from './components/Counter';
import TodoList from './components/TodoList';
import ThemeToggle from './components/ThemeToggle';
import Cart from './components/Cart';
import Auth from './components/Auth';
import './App.css'

function App() {
  return (
    <div>
      <h1>Redux Toolkit App</h1>
      <Counter />
      <hr />
      <TodoList />
      <hr />
      <ThemeToggle />
      <hr />
      <Cart />
      <hr />
      <Auth />
    </div>
  );
}

export default App;
