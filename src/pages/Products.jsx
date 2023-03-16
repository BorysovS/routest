import { ProductList } from "../components/ProductList";
import { getProducts } from "../fakeAPI";

const Products = () => {
const products = getProducts()

    return (<main>
      <h1>Products page</h1>
      <ProductList products={products} />
    </main>)
};

export default Products