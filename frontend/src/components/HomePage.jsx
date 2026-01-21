import CreateProduct from '@/components/show_create_inHomePage/CreateProduct'
import React, { useState } from 'react'
import ShowProduct from './show_create_inHomePage/ShowProduct'
import { useTheme } from '@/store/store'

const HomePage = ({showProduct, setshowProduct }) => {

  const {theme} = useTheme()

  return (
    <div className={theme === 'dark' ? 'bg-[#0f172a]' : 'bg-white'}>
      <div>{showProduct ? <ShowProduct setshowProduct={setshowProduct} /> : <CreateProduct />}</div>
    </div>
  )
}

export default HomePage