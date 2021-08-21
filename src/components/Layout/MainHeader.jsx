import classes from "./MainHeader.module.css"

import CartButton from "../Cart/CartButton"


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