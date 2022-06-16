import React, { useState } from 'react'
import { AddProductType, newProductType } from './Products'
import "../styling/adminpage.css"

const AddProductForm = ({addProduct}:properties) => {

    const [newProduct, setNewProduct] = useState<newProductType>(
        {
            name: "",
            image: ""
        }
    )

    const onAdd = (e: React.FormEvent<HTMLFormElement>) => {
        
        e.preventDefault()

        if (!newProduct.name) {
            alert("Give a valid name")
            return
        }

        if (!newProduct.image) {
            alert("Give a valid picture")
            return
        }

        addProduct(newProduct)
        setNewProduct({ ...newProduct, name: "", image: "" })
    }

    return (
        <form className='signin-form' onSubmit={onAdd} >
            <label className='new-product'>New Product</label>
            <input className='b2' value={newProduct.name} type="text" placeholder='Name'
                onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}></input>
            <input className='b2' value={newProduct.image} type="text" placeholder='Image'
                onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}></input>
            <button className='btn' type='submit'>Add</button>
        </form>
    )
}


type properties = {
    addProduct: AddProductType
}

export default AddProductForm