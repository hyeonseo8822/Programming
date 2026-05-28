import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CounterApp from "./CounterApp.jsx";
import TodoListApp from "./TodoListApp.jsx";

function LinkButtonPageApp() {
    return (
        <div>
            <h1>App 목록</h1>
            <ul>
                <li><Link to="/counterapp">CounterApp</Link></li>
                <li><Link to="/todolistapp">TodoListApp</Link></li>
            </ul>
        </div>
    )
}

export default function RouterApp() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LinkButtonPageApp />} />
                    <Route path="/counterapp" element={<CounterApp />} />
                    <Route path="/todolistapp" element={<TodoListApp />} />
                </Routes>
            </BrowserRouter>
        </div>
    )   
}