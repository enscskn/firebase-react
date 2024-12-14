import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../Firebase'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import '../css/Navbar.css'

function Navbar() {
  const navigate = useNavigate()

  const logout = async () => {
    toast.success('Çıkış yapılıyor')
    setTimeout(() => {
      signOut(auth)
      navigate('/auth')
    }, 3000);
  }
  return (
    <div className='navbar'>
        <div className='navbar-left'>
            Firebase
        </div>
        <div onClick={logout} className='navbar-right'>
            Çıkış Yap
        </div>
    </div>
  )
}

export default Navbar