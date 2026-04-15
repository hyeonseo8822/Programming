import './todoList.css'
import TodoListEmpty from './components/TodoListEmpty.jsx'
import Button from './components/Button.jsx'
import Checkbox from './components/Checkbox.jsx'

function TodoList() {
    return (
        <div className="todo">
            <h1 className="todo__title">HyeonDo List</h1>
            <form className="todo__form">
                <input type="text" placeholder="할 일을 입력하세요" className='todo__input' />
                <Button type="submit" className="todo__button todo_button--add">
                    +
                </Button>
            </form>
            <ul className="todo__list">
                <TodoListEmpty />
                <li className="todo__item todo__item--complete">
                    <Checkbox id="1">할일 1</Checkbox>
                    <Button type="button" className="todo__button todo__button--edit">
                        ✏️
                    </Button>
                    <Button type="button" className="todo__button todo__button--delete">
                        ❌
                    </Button>
                </li>
            </ul>
        </div>
    )
}

export default TodoList