import {useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {deleteAction, editAction} from '../../store/actionCreators';

function TodoDetails() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {todoId} = useParams();
    const todo = useSelector(state => state.todos.find(item => item.id === Number(todoId)));
    const [isCompleted, setCompleted] = useState(todo.isCompleted);

    const deleteTodo = () => {
        const id = Number(todoId);

        dispatch(deleteAction(id));
        navigate('/todos');
    }

    const editTodo = () => {
        const updatedTodo = {
            ...todo,
            isCompleted
        }

        dispatch(editAction(updatedTodo));
        navigate('/todos');
    }

    return (
        <div>
            {
                todo ? 
                <div>
                    <button onClick={deleteTodo}>DELETE</button>
                    <button onClick={editTodo}>Save</button>
                    <h3>{todo.title} Details</h3>
                    <p>{todo.text}</p>
                    <div>
                        <input 
                            id='todo-checkbox'
                            type='checkbox'
                            onChange={e => setCompleted(e.target.checked)} 
                            checked={isCompleted} />
                        <label htmlFor='todo-checkbox'>
                            {isCompleted ? 'Completed' : 'Not Completed'}
                        </label>
                    </div>
                </div> :
                <h1>Not Found!</h1>
            }
        </div>
    )
}

export default TodoDetails;
