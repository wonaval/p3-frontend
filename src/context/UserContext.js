// Module imports
import { useState, createContext } from 'react'

const UserContext = createContext()

const UserProvider = ({children}) => {
  // useState
  const [ user, setUser ] = useState({})
  const [ loading, setLoading ] = useState(false)

  const state = {
    userState: [ user, setUser ],
    loadingState: [ loading, setLoading ]
  }

  return (
    <UserContext.Provider value={state}>
      {children}
    </UserContext.Provider>
  )
}

export { UserContext, UserProvider }