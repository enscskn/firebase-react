import React, { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../Firebase'

function Home() {
  useEffect(() => {
    const [user, setUser] = useState('');

    onAuthStateChanged(auth, (userCredential) => {
      if (userCredential) {
        setUser(userCredential.email)
        console.log('Kullanıcı var')
      } else {
        console.log('Kullanıcı yok')
      }
    })
  }
  , [])
  return (
    <div>Merhaba {user}</div>
  )
}

export default Home