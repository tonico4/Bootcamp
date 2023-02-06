import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home/home';
import TaskContainer from '../components/container/task.container';
import Login from '../pages/auth/login';
import Register from '../pages/auth/register';
import NotFound from '../pages/404/not.found';

const RoutesComponent = () => {

    let logedIn = true;

    return (
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/register' element={<Register></Register>}></Route>
            <Route path='/tasklist' element={logedIn ? <TaskContainer></TaskContainer> : <Login></Login>}></Route>
            <Route path='/404' element={<NotFound></NotFound>}></Route>
        </Routes>
    );
}

export default RoutesComponent;
