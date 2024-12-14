import { useState } from 'react'
import RouterConfig from './config/RouterConfig'
import Navbar from './components/Navbar'
import { ToastContainer } from 'react-toastify'

import './App.css'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
      <div>
        <Navbar/>
        <RouterConfig/>
        <ToastContainer position='top-right' autoClose={2000} />
      </div>
    </>
  )
}

export default App
