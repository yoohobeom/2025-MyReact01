import { useRef } from "react"

export default function UseRefTest02(params) {
    const inputRef = useRef(null)
    const focusInput = () => {
        if (inputRef.current.value !== "") {
            console.log(inputRef.current.value);
        } else {
            alert("비었네요")
        }
    }

    return (
        <div>
            <h3>useRef : DOM에 접근(포커스)</h3>
            <input ref={inputRef} type="text" placeholder="입력하세요" />
            <button onClick={focusInput}>포커스 넣기</button>
        </div>
    )
}