import { DelProductType, EditProductType, productType } from "./Products"
import { FaTimes, FaWrench, FaLightbulb } from 'react-icons/fa';

import { useState } from "react";
import EditProductForm from './EditProductForm'
import '../styling/mainPage.css'

const Product = ({ product, clickDel, editProduct }: properties) => {

    const [isEditButtonPressed, setIsEditButtonPressed] = useState<boolean>(false)

    const clickEdit = () => {
        setIsEditButtonPressed(!isEditButtonPressed)
    }

    return (
        <div className="product">
            <div className="image-container">
                <img src={product.image} className="image" />
                <div className="buttonsContainer">
                    <div className='cartButtonContainer'>
                        <button className="addToCartButton">Add to cart</button>
                    </div>
                    <div className="buyButtonContainer">
                        <button className="addToCartButton buyNowButton">Buy now</button>
                    </div>


                </div>

            </div>

            <div className="product-text-container">
                <div className="product-text">
                    {product.name}
                </div>
                {/* <FaWrench className="fawrench" onClick={clickEdit} /> */}
                {/* <FaTimes className="fatimes" onClick={() => clickDel(product.id)} /> */}

            </div>
            <>{isEditButtonPressed ? <EditProductForm editProduct={editProduct} editID={product.id} /> : null}</>

        </div>
    )
}

interface properties {
    product: productType
    clickDel: DelProductType
    editProduct: EditProductType
}

export default Product