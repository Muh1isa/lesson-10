import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useGlobalContext } from './context';
import { Cards, Header, Home, Login, ProtectedRoute, Single } from './components';

function App() {
  const {login} = useGlobalContext()

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/add' element={
          <ProtectedRoute>
            <Cards />
          </ProtectedRoute>
        } />

        <Route path='/login' element={login && <Login />} />
        <Route path='/single/:id' element={<Single />} />
        <Route path='*' element={<Error />} />
      </Routes>      
    </>
  )
}

export default App
