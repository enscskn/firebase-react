import React, { useState } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { toast } from 'react-toastify';
import { auth } from '../Firebase'
import { useNavigate } from 'react-router-dom'

import '../css/Auth.css'

const provider = new GoogleAuthProvider();

function Auth() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const loginwithGoogle = async () => {
    try {
      const response = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(response);
      const token = credential.accessToken;
      const user = response.user;
      if (user) {
        toast.success('Google ile giriş yapıldı')
        navigate('/')
      }
    } catch (error) {
      const message = error.message
      toast.error(message)
    }
  }

  const login = async () => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      const user = response.user;
      if (user) {
        toast.success('Giriş yapıldı')
        navigate('/')
      }
    } catch (error) {
      const message = error.message
      toast.error(message)
    }
  }

  const register = async () => {
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      const user = response.user;
      if (user) {
        toast.success('Kullanıcı oluşturuldu')
      } 
    } catch (error) {
      const message = error.message
      toast.error(message)
    }
  }

  return (
    <div className='auth-container'>
      <h1>
        Giriş Yap / Kayıt Ol
      </h1>
      <div>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
          className='input' 
          type="text" 
          placeholder='Email'
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
          className='input' 
          type="password" 
          placeholder='Şifre' 
        />
      </div>
      <div className='button-container'>
        <button onClick={loginwithGoogle} className='btn-google'>Google ile Giriş Yap</button>
        <button onClick={login} className='btn' style={{ backgroundColor: '#28a745', color: 'white' }}>Giriş Yap</button>
        <button onClick={register} className='btn'>Kayıt Ol</button>
      </div>
    </div>
  )
}

export default Auth