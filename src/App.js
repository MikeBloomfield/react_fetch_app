// import React, { useEffect, useState } from 'react';
// import Counter from './components/Counter'
// import ClassCounter from './components/ClassCounter'
import './styles/App.css';
// import PostList from './components/PostList'
// import MyButton from './components/UI/button/MyButton'
// import MyInput from './components/UI/button/MyInput/MyInput'
// import PostForm from './components/PostForm'
// import PostFilter from './components/PostFilter';
// import MyModal from './components/UI/MyModal/MyModal';
// import MyButton from './components/UI/button/MyButton';
// import { usePosts } from './hooks/usePosts';
// import PostService from './API/PostService';
// import Loader from './components/UI/Loader/Loader';
// import { useFetching } from './hooks/useFetching';
// import { getPageCount, getPagesArray } from './utils/pages';
// import Pagination from './components/UI/Pagination/Pagination';

import Navbar from './components/UI/Navbar/Navbar';
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter';
import { AuthContext } from './context';
import {useState} from 'react'
import { useEffect } from 'react';



function App() {
  const [isAuth, setIsAuth] = useState(false)
  const [isLoading, setLoading] = useState(true)


  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true)
    }
    setLoading(false)
  }, [])

  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth,
      isLoading
    }}>
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>

  )
}

export default App;
