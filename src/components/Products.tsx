import { useEffect, useState } from "react"
import AddProductForm from "./AddProductForm"
import Product from "./Product"
import '../styling/mainPage.css'

const Products = ({ isAdmin, isAddPressed }: properties) => {

    const [products, setProducts] = useState<productType[]>([])
    // const [isAddButtonPressed, setIsAddButtonPressed] = useState<boolean>(false)


    useEffect(() => {
        const getProductsFromSErver = async () => {
            const productsFromServer = await getProducts()
            setProducts(productsFromServer)
        }

        getProductsFromSErver()

    }, [])

    const getProducts = async () => {
        const res = await fetch("http://localhost:7000/api/products")
        const data = await res.json()
        return data
    }

    const getProductByID = async (id: number) => {
        const res = await fetch(`http://localhost:7000/api/products/${id}`)
        const data = await res.json()
        return data
    }

    const addProduct = async (newProduct: newProductType) => {

        const res = await fetch("http://localhost:7000/api/products", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(newProduct)
        }
        )

        const data = await res.json()

        setProducts([...products, data])
    }


    const deleteProduct = async (id: number) => {
        await fetch(`http://localhost:7000/api/products/${id}`, {
            method: "DELETE"
        })

        setProducts(products.filter(
            (prod) => {
                return prod.id !== id
            }
        ))
    }

    const editProduct = async (id: number, editedProduct: newProductType) => {
        // const productToEdit = editedProduct
        const res = await fetch(`http://localhost:7000/api/products/${id}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(editedProduct)
        })

        const data: productType = await res.json()

        setProducts(products.map((par) =>
            (par.id === id ? { ...par, name: data.name, image: data.image } : par)


        ))
    }


    return (
        <div>
            {isAddPressed ? <AddProductForm addProduct={addProduct}/> : null}
            
            <div className="products">
                {products.map(
                    (product) => (<Product isAdmin={isAdmin} key={product.id} product={product} clickDel={deleteProduct} editProduct={editProduct} />)
                )}

            </div>
        </div>

    )
}

interface properties {
    isAdmin: boolean
    isAddPressed: boolean
}

export type productType = {
    name: string
    category: string
    price: number
    isSold: boolean
    image: string
    id: number
}

export type newProductType = {
    name: string
    // category: string
    // price: number
    // isSold: boolean
    image: string
}

export type AddProductType = {
    (newProduct: newProductType): void
}

export type DelProductType = {
    (delID: number): void
}

export type EditProductType = {
    (editID: number, editedProduct: newProductType): void
}

export default Products