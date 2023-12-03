import { useNavigate, useParams } from "react-router-dom"
import { useGlobalContext } from "../context"


export default function Single() {
  const { cart, removeItem, editItem } = useGlobalContext()
  const { id } = useParams()
  const navigate = useNavigate()

  const singleProd = cart.find((item) => id === item.id)

  return (
    <div className="container"> 
      <div key={singleProd.id} className="card">
        <h2>{singleProd.name}</h2>
        <p>{singleProd.price}</p>
        <button onClick={() => removeItem(singleProd.id)}>remove</button><br /><br />
        <button onClick={() => editItem(singleProd.id)}>edit</button><br /><br />
        <button onClick={() => navigate('/add')}>back</button>
      </div>
    </div>
  )
}
