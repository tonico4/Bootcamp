import React, {useEffect} from 'react';
import { redirect, Route, Routes } from 'react-router-dom';
import Home from '../pages/home/home';
import TaskContainer from '../components/container/task.container';
import Login from '../pages/auth/login';
import Register from '../pages/auth/register';
import NotFound from '../pages/404/not.found';

const RoutesComponent = () => {

    let logged = true;

    useEffect(() => {
        logged = localStorage.getItem('credentials');
    }, []);

    return (
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/login' element={<Login></Login>}>
                {
                    logged ? 
                        () => {
                            return (
                                redirect('/tasklist')
                            )
                        }
                    :
                        () => {
                            return (
                                redirect('/login')
                            )
                        }
                }
            </Route>
            <Route path='/register' element={<Register></Register>}></Route>
            <Route path='/tasklist' element={logged ? <TaskContainer></TaskContainer> : <Login></Login>}></Route>
            <Route path='/404' element={<NotFound></NotFound>}></Route>
        </Routes>
    );
}

export default RoutesComponent;
