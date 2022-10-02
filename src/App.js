import { Routes, Route } from 'react-router-dom'
import Layout from './Components/Layout';
import HomePage from './Pages/HomePage';

function App() {
  return (
    <Routes>
      <Route path='/' element= {<Layout/>}>
        <Route path='/' element={<HomePage />} />
        {/* <Route path='todolist' element={<ContextTodolist ><TodoList /></ContextTodolist>} /> */}
        <Route path='*' element={<h1>404! this page is not found!!!</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
