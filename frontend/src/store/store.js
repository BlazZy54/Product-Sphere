import { create } from 'zustand'

export const useProductStore = create((set) => ({
    products: [],

    //functions
    setProducts: (products) => set({products: products}),  // to direct set we do set({products}) just like useState

    createProduct: async (newProduct) => {
        if(!newProduct.name || !newProduct.price || !newProduct.image){
            return {success: false, message: "Please fill in all the fields"}
        }
        
        const res = await fetch("/api/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newProduct)
        })

        const JSobj = await res.json() //JS object
        console.log(JSobj.product)
        set((state) => ({products: [...state.products , JSobj.product]})) //to get prevstate we do (state) => {}

        return {success: true, message: "Product created successfully"}
    },

    getProducts: async () => {
        const res = await fetch('/api/products')
        const JSobj = await res.json()
        set({products: JSobj.products})
        console.log("Products fetched successfully")
    },

    deleteProduct: async (_id) => {
        const res = await fetch(`/api/products/${_id}`, {method: "DELETE"})
        const data = await res.json()

        if(!data.status) return {success: false, message: data.message}

        set((state) => ({products: state.products.filter(product => product._id !== _id)}))
        return {success: true, message: data.message}
    },

    updateProduct: async (_id, updatedProduct) => {
        
        const res = await fetch(`/api/products/${_id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedProduct)
        })
        const data = await res.json()

        if(!data.status) return {success: false, message: data.message}

        set((state) => ({products: state.products.map((product)=>{
            if(product._id === _id) return updatedProduct
            else return product
        })}))

        return {success: true, message: data.message}
    }
}))

export const useTheme = create((set) => ({
    theme: 'dark',
    setTheme: () => {
        set((state)=> ({theme: state.theme === 'dark' ? 'light' : 'dark'}))
    }
}))