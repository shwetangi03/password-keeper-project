import React from 'react'
import PasswordContext from './password-context'

const PasswordProvider = () => {
    const passwordContext ={
        
    }
  return (
    <PasswordContext.Provider value={passwordContext}>
      {props.children}
    </PasswordContext.Provider>
  )
}

export default PasswordProvider
