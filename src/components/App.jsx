import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './app.less'
import Main from './main/Main'
import Card from './card/Card'

const App = () => {

  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path='/' Component={Main} />
          <Route path='/card/:username/:reponame' Component={Card} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;