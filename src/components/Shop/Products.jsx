import classes from "./Products.module.css"
import ProductItem from "./ProductItem"


const PRODUCT_LIST = [
    {
        id: "a1",
        title: "Monitor",
        price: 130,
        description: "This is a fine Monitor by iQodu brand"
    },
    {
        id: "a2",
        title: "CPU",
        price: 230,
        description: "This is a fine CPU by iQodu brand"
    },
    {
        id: "a3",
        title: "Motherboard",
        price: 170,
        description: "This is a fine Motherboard by iQodu brand"
    }
]
const Products = () => {

    return (
        <section className={classes.products}>
            <h2>Buy Your Favorite Products</h2>
            <ul>
                {PRODUCT_LIST.map(product => (
                    <ProductItem
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        price={product.price}
                        description={product.description}
                    />
                ))}
            </ul>
        </section>
    )
}

export default Products