import TodoItemEmpty from './TodoItemEmpty.jsx';
import TodoItem from './TodoItem.jsx';


export default function TodoList({ todos }) {
    return (
        <ul className="todo__list">
            {/* 아무것도 없을때 */}
            {todos.length === 0 && <TodoItemEmpty />}
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </ul>
    )
}