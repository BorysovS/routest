import { useParams } from "react-router-dom";
import { getProductById } from "../fakeAPI";

const ProductDetails = () => { 
    const { iDProd } = useParams();
  const product = getProductById(iDProd)
    return ( <main>
      <div>
        <h2>
          Product - {product.name} - {iDProd}
        </h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
          sunt excepturi nesciunt iusto dignissimos assumenda ab quae cupiditate
          a, sed reprehenderit? Deleniti optio quasi, amet natus reiciendis
          atque fuga dolore? Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Impedit suscipit quisquam incidunt commodi fugiat aliquam
          praesentium ipsum quos unde voluptatum?
        </p>
      </div>
    </main>)
}

export default ProductDetails