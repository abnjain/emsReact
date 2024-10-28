import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'

export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [userData, setUserData] = useState({ employees: [], admin: {} })
    // localStorage.clear();

    // const data = getLocalStorage();
    // console.log(data);
    // if (!localStorage.getItem('employees') || !localStorage.getItem('admin')) {
    //     setLocalStorage();
    // }
    useEffect(() => {
      setLocalStorage();        
      const {employees, admin} = getLocalStorage();
      setUserData({employees, admin})
    }, [])
    
    // const data = getSelection();

  return (
    <div>
      {userData ? (
        <AuthContext.Provider value={[userData, setUserData]}>
          {children}
        </AuthContext.Provider>
      ) : (
        <p className="flex h-full justify-center items-center text-center align-middle">Loading...</p>
      )}
  </div>
  )
}

export default AuthProvider