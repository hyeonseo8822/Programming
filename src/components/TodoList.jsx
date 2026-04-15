import TodoItem from "./TodoItem"
import TodoListEmpty from "./TodoListEmpty"

export default function TodoList() {
    return (
        <ul className="todo__list">
            <TodoListEmpty />
            <TodoItem />
        </ul>
    )
}