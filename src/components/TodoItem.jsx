export function TodoItem( {id, completed, title, toggleTodo, deleteTodo} ) {
    let s = {
        backgroundColor: "#fff",
        border: "border: 1px solid #ccc"
    }
    if (completed) {
        s = {
            backgroundColor: "#dfd8d8c3",
            border: "1px solid #dfd8d8c3",
            textDecoration: "line-through"
        }   
    }
    return (
        <div className="task-container">
            <div className="task" style={s} checked={completed} onClick={e => toggleTodo(id, !completed)}>
                <div className="task-name">
                    {title}
                </div>
                <div onClick={() => deleteTodo(id)} className="button delete-button">-</div>
            </div>
        </div>
    )
}