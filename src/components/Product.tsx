import { DelProductType, EditProductType, productType } from "./Products"
import { FaTimes, FaWrench, FaLightbulb } from 'react-icons/fa';

import { useState } from "react";
import EditProductForm from './EditProductForm'
import '../styling/mainPage.css'

const Product = ({ product, clickDel, editProduct, isAdmin }: properties) => {

    const [isEditButtonPressed, setIsEditButtonPressed] = useState<boolean>(false)

    const clickEdit = () => {
        setIsEditButtonPressed(!isEditButtonPressed)
    }

    const clickAddToCart = () => {

    }

    return (
        <div className="product">
            <div className="image-container">
                <img src={product.image} className="image"/>
            </div>
            <div className="product-text-container">
                <div className="product-text">
                    {product.name}
                </div>
                <>{isAdmin ? (
                    <div className="adminButtons">
                        <FaWrench className="fawrench" onClick={clickEdit} />
                        <FaTimes className="fatimes" onClick={() => clickDel(product.id)} />
                    </div>)
                    :
                    (<div className="buttonsContainer">
                        <button className="addToCartButton">Add to cart</button>
                        <button className="addToCartButton buyNowButton">Buy now</button>
                    </div>)
                }</>
                <>{isEditButtonPressed ? <EditProductForm editProduct={editProduct} editID={product.id} /> : null}</>
            </div>
            
        </div>
    )
}

interface properties {
    product: productType
    clickDel: DelProductType
    editProduct: EditProductType
    isAdmin: boolean
}

export default Product