import { Routes, Route } from 'react-router-dom';
import s from './App.module.scss';
import Home from './pages/Home';
import TodoCreate from './pages/TodoCreate';
import TodosLayout from './layouts/TodosLayout';
import TodoDetails from './pages/TodoDetails';
import TodoList from './pages/TodoList';
import Toolbar from './components/Toolbar';


function App() {
  return (
    <>
      <Toolbar/>
      <div className={s.container}>
        <Routes>
          <Route path='/' element={<Home/>} />

          <Route path='todos' element={<TodosLayout/>}>
            <Route index element={<TodoList/>} />
            <Route path='create' element={<TodoCreate/>}/>
            <Route path=':todoId' element={<TodoDetails/>} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
