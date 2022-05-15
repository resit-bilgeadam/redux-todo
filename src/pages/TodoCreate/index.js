import { useState } from "react";
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { createAction } from '../../store/actionCreators';

function TodoCreate() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [todoForm, setTodoForm] = useState({
        title: '',
        text: ''
    });

    const createTodo = (e) => {
        e.preventDefault();
        
        const newTodo = {
            id: Math.random(),
            isCompleted: false,
            ...todoForm
        }

        dispatch(createAction(newTodo));
        navigate('/todos');
    }


    return (
        <div>
            <h3>Create a Todo</h3>

            <div>
                <form onSubmit={createTodo}>
                    <div>
                        <label htmlFor="todo-title">Todo Title</label>
                        <input 
                            id='todo-title' 
                            placeholder="Enter your Todo title..." 
                            type='text'
                            onChange={e => setTodoForm({...todoForm, title: e.target.value})}
                            value={todoForm.title} />
                    </div>

                    <div>
                        <label htmlFor="todo-text">Todo Text</label>
                        <input 
                            id='todo-text' 
                            placeholder="Enter your Todo text..." 
                            type='text'
                            onChange={e => setTodoForm({...todoForm, text: e.target.value})}
                            value={todoForm.text} />
                    </div>

                    <button type="submit">Create Todo</button>
                </form>
            </div>
        </div>
    )
}

export default TodoCreate;
