//파일 구조 시험 문제
import { useState } from 'react'
// import './App.css'

function CounterApp() {
  // 상태값, 이전 상태값 setCount는 count의 상태값을 변경하는 함수; 
  const [count, setCount] = useState(0) 

  return (
    // 자바스크립트로 변환
    <>
    <h1>{count}</h1>
    <button onClick={() => setCount((count) => count + 1)}>+</button>
    <button onClick={() => setCount((count) => count + 2)}>+2</button>
    <button onClick={() => setCount((count) => count - 1)}>-</button>
      {/* <button
        className="counter"
        onClick={() => setCount((count) => count + 1)} 
      >
        Count is {count}
      </button> */}
    </>
  )
}

export default CounterApp
