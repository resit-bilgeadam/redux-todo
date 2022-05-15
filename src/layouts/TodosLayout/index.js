import {Outlet, Link} from 'react-router-dom'

function TodosLayout() {
    return (
        <div>
            <nav>
                <Link to='create'>Create A Todo</Link>
            </nav>
            <h1>Todos Layout</h1>

            <Outlet />
        </div>
    )
}

export default TodosLayout;
