import { useState } from "react"
import Product from "./components/Product"
import { productInfo } from "./data/productInfo"

function App() {

  const [totalProducts, setTotalProducts] = useState(
    productInfo.map(product => product.quantity)
  )

  const handleQuantityChange = (index, productCuantity) => {

    let updatedTotalProducts = [...totalProducts]

    updatedTotalProducts[index] = productCuantity

    setTotalProducts(updatedTotalProducts)

  }

  const totalQuantity = totalProducts.reduce((total, productQuantity) => total + productQuantity, 0);

  return (
    <>
      <div className="container mx-auto mt-10">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {
            productInfo.map((product, index) => (
              <Product
                key={index}
                product={product}
                onProductQuantityChange={(productQuantity) =>
                  handleQuantityChange(index, productQuantity)} />
            ))
          }

        </div>

        <div className='text-2xl my-10 text-center border border-1 border-gray-300 p-3 w-fit mx-auto rounded'>
          Total Products:
          <span className="font-bold ml-2">
            {totalQuantity}
          </span>
        </div>

      </div>

    </>
  )
}

export default App
