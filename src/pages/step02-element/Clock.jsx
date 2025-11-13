export default function Clock(props) {
    return(
        <div>
            <p>시간표시 : {new Date().toLocaleTimeString()}</p>
        </div>
    )
}