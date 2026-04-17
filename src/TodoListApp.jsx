import './todoList.css'
import TodoHeader from './components/TodoHeader.jsx'
import TodoAdder from './components/TodoAdder.jsx'
import TodoList from './components/TodoList.jsx'
import { useState } from 'react';

class Todo {
    constructor(text) {
        this.id = Date.now() // 고유의 값. new Date().getTime()와 동일  
        this.text = text // 할 일 내용
        this.Iscompleted = false; //완료 여부 : 미완
    }
}

function TodoListApp() {
    const[todos, setTodos] = useState([]); // 할일 목록 저장 state, 기본값은 빈 배열

    function addTodo(text) {
        setTodos((todos) =>[...todos,new Todo(text)]);
    }

    return (
        <div className="todo">
            <TodoHeader />
            <TodoAdder addTodo={addTodo} />
            <TodoList todos={todos} />
        </div>
    )
}

export default TodoListApp