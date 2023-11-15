import { useEffect, useState } from "react"
import ItemList from "./ItemList"

function ItemListContainer() {
  const getProductos = async() => {
    const response = await fetch("https://fakestoreapi.com/products")
    const data = await response.json()

    return data;
  }
  
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProductos().then((product) => setProducts(product))
  }, []) 
  return (
  <section className="py-10 bg-gray-100">
      <ItemList products={products}/>
  </section>
  )
}

export default ItemListContainer