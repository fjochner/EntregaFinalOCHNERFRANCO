import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore"
import db from "../../db/db"

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({})
  const { idProducto } = useParams()

  useEffect(() => {

    const productoRef = doc(db, "productos", idProducto)
    getDoc(productoRef)
      .then((respuesta) => {
        const productoDb = { id: respuesta.id, ...respuesta.data() }
        setProducto(productoDb)
      })

  }, [idProducto])

  return (
    <div className="item-detail-container" >
      <ItemDetail producto={producto} />
    </div>
  )
}

export default ItemDetailContainer