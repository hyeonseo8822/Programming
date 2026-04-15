import { StrictMode } from 'react' // {} 중괄호 있는 거랑 없는 거 차이
import { createRoot } from 'react-dom/client'
// import './index.css'
import CounterApp from './CounterApp.jsx'
import './reset.css'
import TodoListApp from './TodoListApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TodoListApp />
  </StrictMode>,
)
