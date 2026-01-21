import { useProductStore } from '@/store/store'
import React, { useEffect } from 'react'
import ProductBox from '../small_compo/ProductBox'

const ShowProduct = ({ setshowProduct }) => {
    const { getProducts, products } = useProductStore()

    useEffect(() => {
        getProducts()
    }, [])         //we can't write products as dependency coz its reference will change on reassignment(new memory allocation) and it will call useEffect again and keep on repeating

    return (
        <>
            {products.length === 0 ?
                <div className='mt-10 text-center font-bold text-2xl'>
                    <span className='text-gray-500'>No Products Found 😥</span> <span className='text-blue-500 hover:underline'>Create a Product</span>
                </div>
                :
                <div className='flex gap-10 flex-wrap w-[80vw] mx-auto mt-10 pl-30'>
                    {products.map((product) => {
                        return (
                            <ProductBox key={product._id} product={product} />
                        )
                    })}
                </div>}

        </>

    )
}

export default ShowProduct