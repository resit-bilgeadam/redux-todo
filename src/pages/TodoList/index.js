import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';

function TodoList() {
    const todos = useSelector(state => state.todos);

    return (
        <div>
            <h3>Todo List Page</h3>
            <ul>
                {
                    todos.map(todo => (
                        <li key={todo.id}>
                            <Link to={`${todo.id}`}>{todo.title}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default TodoList;
