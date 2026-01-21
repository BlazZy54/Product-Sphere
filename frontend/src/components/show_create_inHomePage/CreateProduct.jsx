import { useState } from "react";
import { useProductStore, useTheme } from "@/store/store";
import toast from "react-hot-toast";

function CreateProduct() {
    const {theme}  = useTheme()
    const [name, setName] = useState(``)
    const [price, setPrice] = useState(``)
    const [img, setImg] = useState(``)

    const {createProduct} = useProductStore()

    const handleSubmit = async () => {
        const newProduct = {name: name, price: price, image: img}
        const {success, message} = await createProduct(newProduct)
        if(success) toast.success(message)
        else toast.error(message)

        setName(``); setPrice(``); setImg(``);
    }

    return (
        <div className= {`${theme === 'dark' ? 'bg-[#0f172a]' : 'bg-white'} flex flex-col items-center justify-center px-4 min-h-[92vh]`}>

            <h1 className={`text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-blue-400'} mb-6`}>
                Create New Product
            </h1>

            <div className={`w-full max-w-xl ${theme === 'dark' ? 'bg-[#0f172a]' : 'bg-white'}  p-6 rounded-lg space-y-4`}  >

                <input
                    type="text"
                    placeholder="Product Name"
                    className={`w-full p-3 rounded ${theme === 'dark' ? 'bg-white/5' : 'bg-black/5 '} ${theme === 'dark' ? 'text-white' : 'text-black'} outline-none`} 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Price"
                    className={`w-full p-3 rounded ${theme === 'dark' ? 'bg-white/5' : 'bg-black/5 '} ${theme === 'dark' ? 'text-white' : 'text-black'} outline-none`} 
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Image Link"
                    className={`w-full p-3 rounded ${theme === 'dark' ? 'bg-white/5' : 'bg-black/5 '} ${theme === 'dark' ? 'text-white' : 'text-black'} outline-none`} 
                    value={img}
                    onChange={(e) => setImg(e.target.value)}
                />

                <button
                    className={`w-full bg-blue-400 ${theme === 'dark' ? 'text-white' : 'text-white'}  py-3 rounded font-semibold hover:bg-blue-500 transition `}
                    onClick={handleSubmit}
                >
                    Add Product
                </button>

            </div>
        </div>
    );
}

export default CreateProduct;
