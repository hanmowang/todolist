import "./App.css"
import { useEffect, useState } from "react"
import { NewTodoForm } from "./components/NewTodoForm"
import { TodoList } from "./components/TodoList"
import { Counter } from "./components/Counter"

export default function App() {
  const [todos, setTodos] = useState(() => {
    const localVal = localStorage.getItem("ITEM")
    if(localVal == null) return []
    return JSON.parse(localVal)
  })

  const initialCount = Number(localStorage.getItem("COUNT"))

  const [count, setCount] = useState(initialCount)
  
  //Updating local storage
  useEffect(() => {
    localStorage.setItem("ITEM", JSON.stringify(todos))
  }, [todos])

  //Updating Count
  useEffect(() => {
    localStorage.setItem("COUNT", count);
  }, [count]);

  function increment() {
    setCount(count + 1)
  }

  function decrement() {
    setCount(count - 1)
  }

  function addTodo(title) {
    setTodos((currentTodos) => {
      return [...currentTodos, 
        { id: crypto.randomUUID(), title: title, completed: false}]
    })
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id == id) {
          if (completed) {
            increment()
          } else {
            decrement()
          }
          return { ...todo, completed }
        }
        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }


  return (
    <>
      <NewTodoForm onSubmit={addTodo}/>
      <Counter count={count}/>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </>
  )
}
