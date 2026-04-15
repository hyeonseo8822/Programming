import Button from './Button.jsx'

export default function TodoAdder(props) {
    const { onAdd } = props
    return (
        <form className="todo__form" onSubmit={onAdd}>
            <input type="text" placeholder="할 일을 입력하세요" className='todo__input' />
            <Button type="submit" className="todo__button todo_button--add">
                +
            </Button>
        </form>
    )
}