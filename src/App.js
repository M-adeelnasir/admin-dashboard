import React from 'react'
import Home from './pages/admin/home/Home'
import Login from './pages/admin/login/Login'
import List from './pages/admin/list/List'
import SinglePage from './pages/admin/single/SinglePage'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import New from './pages/admin/new/New'
import './dark/dark.scss'

const App = () => {

  return (
    <div className="app ">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/users' element={<List />} />
          <Route path='/new' element={<New />} />
          <Route path='/new/:personId' element={<SinglePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App