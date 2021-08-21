import classes from "./Cart.module.css"

import Card from "../UI/Card"
import CartItem from "./CartItem"


const Cart = () => {
    const item = {
        title: "Item Title",
        quantity: 3,
        total: 18,
        price: 6
    }

    return (
        <Card className={classes.cart}>
            <h2>Your Shopping Cart</h2>
            <ul>
                <CartItem item={item} />
            </ul>
        </Card>
    )
}

export default Cart