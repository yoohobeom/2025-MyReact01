import { useMemo, useState } from "react"

export default function UseMemoTest02(params) {
    const [query, setQuery] = useState("")
    const items = ["apple", "banana", "cherry", "grape"]

    const filterItem = useMemo(() => {
        console.log("memo실행~~~~~")
        // includes()는 특정값을 포함하고 있으면 true 반환
        return items.filter((k) => k.toLowerCase().includes(query.toLowerCase()))
    }, [query])
    return (
        <div>
            <input type="text" 
                value={query}
                onChange={(e) => setQuery(e.target.value)}/>

            <ul>
                {filterItem.map((k, i) => {
                    return <li key={i}>{k}</li>
                })}
            </ul>
        </div>
    )
}