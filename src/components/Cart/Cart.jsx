import classes from "./Cart.module.css"

import Card from "../UI/Card"


const Cart = () => {
    return (
        <Card className={classes.cart}>
            <h2>Your Shopping Card</h2>
            <ul>
                <li>Card Item</li>
            </ul>
        </Card>
    )
}

export default Cart