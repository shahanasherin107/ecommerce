import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import SignUp from './components/SignUp'
import Login from './components/Login'
import NavBar from './components/NavBar'
import Cart from './components/Cart'
import Payment from './components/Payment'
import Productlist from './components/Productlist'
import Profile from './components/Profile'
import Wishlist from './components/Wishlist'
import Admin from './components/Admin'
import ViewPrdct from './components/ViewPrdct'
import Add from './components/Add'
import ViewOrder  from './components/ViewOrder'
import { ViewUser } from './components/ViewUser'

function App() 
{
  const [count, setCount] = useState(0)

  return (
    <>
      
    
      <Routes>
         <Route path='/' element={ <Login/>}/>
        <Route path='/sn' element={ <SignUp/>}/>
         <Route path='/crt' element={ <Cart/>}/>
          <Route path='/wl' element={ <Wishlist/> }/>
      <Route path='/pymnt' element={ <Payment/>}/>
      <Route path='/prdct' element={ <Productlist/>}/>
      <Route path='/prfl' element={ <Profile/>}/>
      <Route path='/admn' element={ <Admin/>}/>
      <Route path='/view' element={<ViewPrdct/>}/>
      <Route path='/add' element={<Add/>}/>
       <Route path='/order' element={<ViewOrder/>}/>
        <Route path='/user' element={<ViewUser/>}/>
      </Routes>
    
      
    
    </>
  )
    
   
}

export default App
