import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom'
import Layout from './Components/Layout';
import HomePage from './Pages/HomePage';
import ProfileHomePage from './Pages/ProfileHomePage';
import ShopHomePage from './Pages/ShopHomePage';
import ShopSettingPage from './Pages/ShopSettingPage';
import FunctionFetch from './function/FunctionFetch';


function App() {
  const state = useSelector(state => state);
  const dispatch = useDispatch()

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<HomePage />} />
        <Route  path='/userProfile/:id' element={<ProfileHomePage />} ></Route>
        <Route  path='/shopProfile/:shopName' element={<ShopHomePage />} ></Route>
        {state.auth?.userInfo?.role === "2" ? (<Route  path={`/shopProfile/:shopName/setting`} element={<ShopSettingPage />} />):null}
        <Route path='*' element={<h1>404! this page is not found!!!</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
