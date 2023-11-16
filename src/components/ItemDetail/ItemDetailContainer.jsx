import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {
    const { id } = useParams()

    products.find((p) => p.id === id)
  return (
    <div>
        <ItemDetail />
    </div>
  )
}

export default ItemDetailContainer