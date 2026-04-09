function TodoList() {
    return (
        <div>
            <h1>HyeonDo List</h1>
            <form>
                <input type="text" placeholder="할 일을 입력하세요" />
                <button type="submit">Add</button>
            </form>
            <ul>
                <li>
                    <input type="checkbox" id="todo1" />
                    <label htmlFor="todo1">할 일 1</label>
                    <button type="button">✏️</button>
                    <button type="button">❌</button>
                </li>
                <li>
                    <input type="checkbox" id="todo2" />
                    <label htmlFor="todo2">할 일 2</label>
                    <button type="button">✏️</button>
                    <button type="button">❌</button>
                </li>
                {/* li{할일$}*10 */}
            </ul>
        </div>
    )
}

export default TodoList