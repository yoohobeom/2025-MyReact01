import { useState } from "react"

export default function Profile({name}) {
    const [status, setStatus] = useState("Away")
    return (
        <>
            <h3>Name : {name}</h3>
            <p>Status : {status}</p>
            <button onClick={() => setStatus("Away")}>Set Away</button>
            <button onClick={() => setStatus("Avaliable")}>Set Avaliable</button>
        </>
    )
}