import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom"
import Posts from '../pages/Posts';
import About from '../pages/About';
import ErrorPage from '../pages/ErrorPage';
import PostIdPage from '../pages/PostIdPage';
import { privateRoutes, publicRoutes } from '../router/index'
import { useContext } from 'react';
import { AuthContext } from '../context';
import Loader from './UI/Loader/Loader';


const AppRouter = () => {

    const {isAuth, isLoading} = useContext(AuthContext)

    if (isLoading) {
        return <Loader/>
    }  

    return (
        isAuth
            ? <Routes>
                {privateRoutes.map(route =>
                    <Route element={<route.element />} path={route.path} key={route.path} />
                )
                }
                <Route path="*" element={<Navigate to="/posts" />} />
            </Routes>
            : <Routes>
                {publicRoutes.map(route =>
                    <Route element={<route.element />} path={route.path} key={route.path} />
                )
                }
                <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
    )
    {/* <Route path="/" element={"Добро пожаловать!"} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:id" element={<PostIdPage/>} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Navigate to="/posts"/>}/>
        <Route path="*" element={<ErrorPage/>}/> */}
}

export default AppRouter





