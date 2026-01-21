import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useProductStore, useTheme } from "@/store/store";
import toast from "react-hot-toast";
import { useState } from "react";
import EditOverlay from "./EditOverlay";


function ProductBox({ product }) {
  const {deleteProduct} = useProductStore()

  const handledeleteProduct = async () => {
    const {success, message} = await deleteProduct(product._id)
    if(!success) toast.success(message)
      else toast.error(message)
  }


  const [overlay, setOverlay] = useState(false)
  const handleeditProduct = async() => {
    setOverlay(prev => !prev)
  }

  const {theme} = useTheme()
  
  return (
    <>
    <div className={`w-72 ${theme == 'dark' ? 'bg-[#0b1220]/80' : 'bg-white/80'} backdrop-blur-md rounded-xl p-4 border border-white/10 shadow-lg hover:shadow-xl transition`}>

      {/* Image */}
      <div className="h-40 w-full rounded-lg overflow-hidden bg-[#020617]">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="mt-4 text-white">
        <h3 className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-black '} `}>{product.name}</h3>
        <p className="text-blue-400 font-bold mt-1">${product.price}</p>
      </div>

      {/* Button */}
      <div className="flex gap-5">
        <div className="mt-4 w-10 h-10 bg-blue-300 hover:bg-blue-600 transition text-black py-2 rounded-lg font-semibold flex items-center justify-center"
        onClick={handleeditProduct}
        >
          <FaRegEdit />
        </div>
        <div className="mt-4 w-10 h-10 bg-red-300 hover:bg-red-600 transition text-black py-2 rounded-lg font-semibold flex items-center justify-center"
         onClick={handledeleteProduct}
        >
          <RiDeleteBin6Line />
        </div>
      </div>
    </div>


    {overlay ? <EditOverlay product={product} setOverlay={setOverlay}/> : <></>}
    </>
  );
}

export default ProductBox;