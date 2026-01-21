import { useState } from 'react'
import HomePage from './components/HomePage'
import Navbar from './components/small_compo/Navbar'
import {Toaster}from"react-hot-toast";
import { useTheme } from './store/store';

function App() {
  const [showProduct, setshowProduct] = useState(true)
  const {theme} = useTheme()

  return (
    <div className={`${theme == 'dark' ? 'bg-[#0f172a]' : 'bg-w'} w-full h-screen flex flex-col`}>
      <Toaster position="bottom-right" />
      <Navbar setshowProduct={setshowProduct}/>
      <HomePage showProduct={showProduct} setshowProduct={setshowProduct}/>
    </div>
  )
}
//  bg-[#0f172a]
export default App
