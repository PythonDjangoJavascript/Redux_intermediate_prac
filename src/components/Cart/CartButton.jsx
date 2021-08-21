import classes from "./CartButton.module.css"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"

import { uiActions } from "../../store/ui-slice"


const CartButton = () => {
    const itemQuantity = useSelector(state => state.cart.totalQuantity)
    const dispatch = useDispatch()

    const toggleCartHandler = () => {
        dispatch(uiActions.toggle())
    }

    return (
        <button className={classes.button} onClick={toggleCartHandler}>
            <span>My Cart</span>
            <span className={classes.badge}>{itemQuantity}</span>
        </button>
    )
}

export default CartButton