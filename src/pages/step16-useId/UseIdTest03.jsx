import { useId, useRef } from "react"

export default function UseIdTest03(params) {
    const nameId = useId();
    const ageId = useId();
    const nameRef = useRef(null);
    const ageRef = useRef(null);

    const handleKeyDown = (e, inputType) => {
        if (e.key === 'Enter') {
            if (inputType === 'name') {
                alert(`이름 : ${nameRef.current.value}`)
            } else if (inputType === 'age') {
                alert(`나이 : ${ageRef.current.value}`)
            }
        }
    }

    const handleClick = () => {
        // const name = nameRef.current.value.trim();
        // alert(`이름 : ${name} 나이 : ${ageRef.current.value.trim()}`)

        const name = nameRef.current.value.trim();
        const age = ageRef.current.value.trim();
        if (name === '') {
            alert('이름 입력하세요.')
            nameRef.current.focus()
            return
        }
        
        if (age === '') {
            alert('나이 입력하세요.')
            ageRef.current.focus()
            return
        }
        alert(`이름 : ${name} 나이 : ${age}`)
    }

    return (
        <div>
            <label htmlFor={nameId}>이름 : </label>
            <input type="text"
            id = {nameId}
            ref={nameRef}
            onKeyDown={(e) => handleKeyDown(e, "name")}
            placeholder="이름을 입력하세요" />
            <br /><br />
            <label htmlFor={ageId}>나이 : </label>
            <input type="number"
            id = {ageId}
            ref={ageRef}
            onKeyDown={(e) => handleKeyDown(e, "age")}
            placeholder="나이를 입력하세요" />
            <br /><br />
            <button onClick={handleClick}>확인</button>
        </div>
    )
}