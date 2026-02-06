import React from 'react'
import AuthContext from './AuthContext'

const AuthProvider = () => {
    const user={
        id:1,
        name:"mammu",
        email:"mamathakuruba35@gmail.com"
    }
  return (
   <AuthContext.Provider value={user}>

   </AuthContext.Provider>
  )
}

export default AuthProvider