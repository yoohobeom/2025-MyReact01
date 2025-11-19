import { useEffect, useRef } from "react"

export default function UseRefTest04(params) {
    const inputRef = useRef(null);

    useEffect( ()=>{ inputRef.current.focus();},[]);

    const handleKeyDown = (e)=>{
        if(e.key === 'Enter'){
            handleCheckName();
        }
    }
    const handleCheckName = ()=>{
        const inputValue = inputRef.current.value;
        if (inputValue !== "") {
            alert(`${inputValue}님 환영합니다.`);
            inputRef.current.value="";
            inputRef.current.focus();
        } else {
            alert("내용을 입력하세요")
            inputRef.current.focus();
        }
    }
    return(
        <div>
            <input type="text"
            placeholder="userName"
            ref={inputRef}
            onKeyDown={handleKeyDown} />

            <button onClick={handleCheckName}>이름확인</button>
        </div>
    )
}