import { useState } from 'react'
import '../styling/shoppingCart.css'
import { productType } from './Products'



const ShoppingCart = () => {

    const [productsInCart, setProductsInCart] = useState<productType[]>()

    const showCartItems = (items: productType[]) => {
    
        const tempList = []
    
        for (let i=0; i < items.length; i++) {
            
        }
    }

    return (
        <div className='cart-page'>
            <div className="cart-container">
                <div className="cart-text">Shopping Cart</div>
                
                <div className='cart-items'>

                </div>
            </div>
        </div>

    )
}

export default ShoppingCart