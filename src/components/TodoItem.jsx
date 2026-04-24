import Checkbox from './Checkbox.jsx';
import Button from './Button.jsx';
import { useState } from 'react';

export default function TodoItem({ deleteTodo, editTodo, todo, toggleTodo }) {
    //isEditing: 편집 모드 여부 state
    const [isEditing, setIsEditing] = useState(false);
    //editText: 편집할 때 input 요소에 들어갈 text state
    const [editText, setEditText] = useState(todo.text);
    //수정중이 아니면 -> 수정중, <input />
    function handleEditClick() {
        if (!isEditing) {
            setIsEditing(true);
            setEditText(todo.text);
        } else {
            const trimmedText = editText.trim();
            if (trimmedText !== "" && trimmedText !== todo.text) {
                editTodo(todo.id, trimmedText);
            }
            setIsEditing(false);
        }
    }

    return (
        <li className={`todo__item${todo.isCompleted ? " todo__item--complete" : ""}`}>
            {/*수정중이 아니면*/}
            {!isEditing && (
                <Checkbox
                    id={todo.id}
                    checked={todo.isCompleted}
                    onChange={() => toggleTodo(todo.id)}
                >
                    {todo.text}
                </Checkbox>
            )}
            {/* 수정중이면*/}
            {isEditing && (
                <input
                    type="text"
                    className="todo__edit-input"
                    value={editText}
                    autoFocus
                    onChange={(e) => setEditText(e.target.value)}
                    onBlur={handleEditClick}
                    onKeyDown={(e) => e.key === "Enter" && handleEditClick()}
                />
            )}
            <Button className="todo__button todo__button--edit" onClick={handleEditClick}>
                {isEditing ? "✔️" : "✏️"}
            </Button>
            <Button className="todo__button todo__button--delete" onClick={() => deleteTodo(todo.id)}>
                ❌
            </Button>
        </li>
    )
}
