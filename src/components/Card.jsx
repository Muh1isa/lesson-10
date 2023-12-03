import { useGlobalContext } from "../context"

export default function Card({ id, title, amount }) {
    const { inc, dec } = useGlobalContext()

    return (
        <div className="card">
            <h2>{title}</h2><br />
            <h2>{amount}</h2><br />
            <button onClick={() => inc(id)}>inc</button><br /><br />
            <button onClick={() => dec(id)}>dec</button>
        </div>

    )
}
