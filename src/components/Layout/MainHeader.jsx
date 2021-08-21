import CartButton from "../Cart/CartButton"

import classes from "./MainHeader.module.css"


const MainHeader = () => {
    return (
        <header className={classes.header}>
            <h1>Redux Practice</h1>
            <ul>
                <li>
                    <CartButton />
                </li>
            </ul>
        </header>
    )
}

export default MainHeader