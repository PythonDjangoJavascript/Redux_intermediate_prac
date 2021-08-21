import classes from "./Products.module.css"
import ProductItem from "./ProductItem"

const Products = () => {

    return (
        <section className={classes.products}>
            <h2>Buy Your Favorite Products</h2>
            <ul>
                <ProductItem
                    title="Sample Product Title"
                    price={3}
                    description="This is sample product description"
                />
            </ul>
        </section>
    )
}

export default Products