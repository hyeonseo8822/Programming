import Button from './Button.jsx'
import { useState } from 'react';

export default function TodoAdder({ addTodo }) {
    const [inputTodo, setInputTodo] = useState(''); // input 요소의 value를 저장하는 state
    //사용자가 입력하는 것은 항상 주의 필요!
    //사용자입력 : 마음대로
    if (!inputTodo.trim()) { //trim() : 문자열 양쪽 공백 제거
        return;
    }

    const handleSubmit = (event) => {
        event.preventDefault(); //submit 이벤트의 기본 동작인 페이지 새로고침 방지
        //addTodo(Text)
        //text: 1. input 요소의 value, 2. input value를 state
        addTodo(inputTodo.trim()); //trim() : 문자열 양쪽 공백 제거
        setInputTodo('');
    };

    return (
        <form className="todo__form" onSubmit={handleSubmit}>
            <input type="text" placeholder="할 일을 입력하세요" className='todo__input' value={inputTodo} onChange={(event) => setInputTodo(event.target.value)} />
            <Button type="submit" className="todo__button todo_button--add">
                +
            </Button>
        </form>
    )
}