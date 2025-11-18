export default function Profile3({name, status, onChangeStatus}) {
    return (
        <div>
            <h3>Name : {name}</h3>
            <p>Status : {status}</p>
            <button onClick={() => onChangeStatus("Away")}>Set Away</button>
            <button onClick={() => onChangeStatus("Avaliable")}>Set Avaliable</button>
        </div>
    )
}