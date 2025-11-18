import { useMemo, useState } from "react"

export default function UseMemoTest03(params) {
    const [count, setCount] = useState(0)
    const [text, setText] = useState("")

    const result = useMemo(() => {
        return count + 100;
    }, [count])

    return (
        <div>
            <p>카운트 : {count}</p>
            <p>연산값 : {result}</p>
            <p>메세지 : {text}</p>
            {/* prev 는 이전 상태 값을 의미한다. */}
            <button onClick={() => setCount((prev) => prev + 1)}>클릭</button>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        </div>
    )
}