import { useState } from 'react';
import CounterApp from './CounterApp.jsx';
import TodoListApp from './TodoListApp.jsx';

function ButtonPageApp({ setPage }) {
    return (
        <div>
            <h1 style={{ fontSize: '2rem' }}>App 목록</h1>
            <ul style={{ display: 'flex', gap: '20px', listStyle: 'none', padding: 0, marginTop: '20px' }}>
                <li><button style={{ fontSize: '2rem', width: '100px', height: '100px' }} onClick={() => setPage('counterApp')}>🧮</button></li>
                <li><button style={{ fontSize: '2rem', width: '100px', height: '100px' }} onClick={() => setPage('todolistApp')}>📝</button></li>
            </ul>
        </div>
    );
}



export default function HomeApp() {
    const [page, setPage] = useState('home');  //'home', 'counterApp', 'todolistApp'

    return (
        <div>
            {/* home일때는 CounterApp과 TodoListApp 링크 페이지 보여주자 */}
            {page === 'home' && <ButtonPageApp setPage={setPage} />}
            {/* counterApp이나 todolistApp일때는 뒤로가기 버튼 보여주자 */}
            {page !== 'home' && <button
                style={{ position: 'fixed', bottom: '10px', left: '10px', fontSize: '1.5rem', cursor: 'pointer', borderRadius: '8px', padding: '8px 12px', backgroundColor: '#eee', border: 'none' }}
                onClick={() => setPage('home')}>🏠</button>}
            {/* counterApp일때는 CounterApp 보여주자 */}
            {page === 'counterApp' && <CounterApp />}
            {/* todolistApp일때는 TodoListApp 보여주자 */}
            {page === 'todolistApp' && <TodoListApp />}
        </div>
    );
}