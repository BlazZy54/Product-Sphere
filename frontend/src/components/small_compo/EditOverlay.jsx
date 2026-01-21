import { useProductStore } from '@/store/store'
import React, { useState } from 'react'
import toast from 'react-hot-toast'

const EditOverlay = ({setOverlay, product}) => {
  const {updateProduct} = useProductStore()
  const handleUpdate = async () => {

    const edited_og = product
    edited_og.name =  editedProduct.name;
    edited_og.price =  editedProduct.price;
    edited_og.image =  editedProduct.image;

    const {success, message} = await updateProduct(product._id, edited_og)

    if(success) toast.success(message)
      else toast.error(message)

    setOverlay(false)
  }

  const [editedProduct, updatededitedProduct] = useState({
    name: product.name,
    price: product.price,
    image: product.image
  })

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30 z-10">
      <div className="w-full max-w-sm rounded-md bg-gray-800 text-white">
        
        {/* Header */}
        <div className="flex justify-between items-center px-4 py-3 border-b border-gray-700">
          <h2 className="text-base font-medium align-middle">Update Product</h2>
          <button className="text-gray-400 hover:text-white"
          onClick={() => setOverlay(prev => !prev)}
          >X</button>
        </div>

        {/* Inputs */}
        <div className="px-4 py-4 space-y-3">
          <input
            type="text"
            placeholder="Product name"
            className="w-full rounded border border-gray-600 bg-gray-700 px-3 py-2 text-sm focus:outline-none"
            value={editedProduct.name} onChange={(e) => {updatededitedProduct({...editedProduct, name: e.target.value})}}
          />

          <input
            type="text"
            placeholder="Price"
            className="w-full rounded border border-gray-600 bg-gray-700 px-3 py-2 text-sm focus:outline-none"
            value={editedProduct.price} onChange={(e) => {updatededitedProduct({...editedProduct, price: e.target.value})}}
          />

          <input
            type="text"
            placeholder="Image URL"
            className="w-full rounded border border-gray-600 bg-gray-700 px-3 py-2 text-sm focus:outline-none"
            value={editedProduct.image} onChange={(e) => {updatededitedProduct({...editedProduct, image: e.target.value})}}
          />
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-3 px-4 py-3 border-t border-gray-700">
          <button className="text-sm text-gray-400 hover:text-white"
           onClick={() => setOverlay(prev => !prev)}
          >
            Cancel
          </button>
          <button className="rounded bg-blue-500 px-3 py-1.5 text-sm text-white"
           onClick={handleUpdate}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditOverlay