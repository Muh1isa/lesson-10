import { useGlobalContext } from "../context"
import Card from "./Card"

export default function Cards() {
  const { cart, clearCart } = useGlobalContext()

  return (
    <div className="container">
      <div className="wrapper">
        {cart.map((item) => <Card key={item.id} {...item} />)}
        <button onClick={() => clearCart()}>CLear all</button>
      </div>
    </div>
  )
}
