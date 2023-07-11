import { TodoItem } from "./TodoItem"

export function TodoList( {todos, toggleTodo, deleteTodo} ) {
    return (
        <div className="list">
            {todos.length === 0 && "No Todos"}
            {todos.map(todo => {
                return(
                    <TodoItem key={todo.id} {... todo} 
                        toggleTodo={toggleTodo}
                        deleteTodo={deleteTodo}
                    />
                )
            })}
        </div>
    )
}

