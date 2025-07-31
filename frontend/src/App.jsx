import React from 'react'
import { Route, Routes } from 'react-router'
import { Toaster, toast } from 'react-hot-toast'; // ✅ also add Toaster



import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import NoteDetail from './pages/NoteDetail'

const App = () => {
  return (
    <div data-theme="forest">
      <button className='btn btn-primary'>Click me</button>
       <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id" element={<NoteDetail />} />
      </Routes> 

        
    </div>
  )
}

export default App