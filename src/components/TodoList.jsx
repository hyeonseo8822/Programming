import TodoItem from "./TodoItem"
import TodoListEmpty from "./TodoListEmpty"

export default function TodoList({ todos }) {
    return (
        <ul className="todo__list">
            {/* 아무것도 없을때, */}
            {todos.length === 0 && <TodoListEmpty />}
            {/* 할 일이 있을 때 */}
            {todos.length > 0 && todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </ul>
    )
}