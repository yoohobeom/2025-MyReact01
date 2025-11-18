import { useRef } from "react"

export default function UseRefTest01(params) {
    const inputRef = useRef(null)
    const focusInput = () => {
        // 지정한 inputRef에 포커스 넣기
        inputRef.current.focus();
    }

    return (
        <div>
            <h3>useRef : DOM에 접근(포커스)</h3>
            <input ref={inputRef} type="text" placeholder="입력하세요" />
            <button onClick={focusInput}>포커스 넣기</button>
        </div>
    )
}