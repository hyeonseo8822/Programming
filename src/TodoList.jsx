import './todoList.css'

function TodoList() {
    return (
        <div className="todo">
            <h1 className="todo__title">HyeonDo List</h1>
            <form className="todo__form">
                <input type="text" placeholder="할 일을 입력하세요" className='todo__input' />
                <button type="submit" className="todo__button todo_button--add">+</button>
            </form>
            <ul className="todo__list">
                <li className="todo__item todo--empty">
                    <p>할 일 없음.</p>
                </li>
                <li className="todo__item todo__item--complete">
                    <input type="checkbox" id="todo1" className="todo__check"/>
                    <label htmlFor="todo1" className='todo__label'>할 일 1</label>
                    <button type="button" className="todo__button todo__button--edit">✏️</button>
                    <button type="button" className="todo__button todo__button--delete">❌</button>
                </li>
            </ul>
        </div>
    )
}

export default TodoList