import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { uid } from "uid";
import { getUser } from "./utils";
import { reducer } from "./reducer";
import { data } from "./data";


const initialState = {
  amount: 1,
  loading: false,
  cart: data,
}


export const AppContext = createContext();

export const AppProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState)

  const clearCart = () => {
    dispatch({type: 'CLEAR'});
  }

  const inc = (id) => {
    dispatch({type: 'INC', payload: id})
  }

  const dec = (id) => {
    dispatch({type: 'DEC', payload: id})
  }
  
  const id = uid()

  const [login, setLogin] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const [pname, setPname] = useState('')
  const [price, setPrice] = useState('')

  const [user, setUser] = useState(getUser('user'))

  const [edit, setEdit] = useState(false)
  const [editId, setEditId] = useState(null)

  const handleSubmit = () => {
    const newUser = { id: id, name: name, email: email }
    setUser(newUser)
  }

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user))
  }, [user])

  return (
    <AppContext.Provider value={{
      ...state,
      login, setLogin,
      name, setName,
      email, setEmail,
      pname, setPname,
      price, setPrice,
      user, setUser,
      edit, setEdit,
      editId, setEditId,
      handleSubmit,
      clearCart, inc, dec
    }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}