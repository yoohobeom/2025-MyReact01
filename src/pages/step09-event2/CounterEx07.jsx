import { useState } from "react"

function createInitTodos() {
    const initTodos = [];
    for (let i = 0; i <5; i++) {
        initTodos.push({id:i, text: 'Item ' + (i+1)})        
    }
    return initTodos ;
}

export default function CounterEx07(params) {
    // useState 초기값을 funcation  사용
    const [todos, setTodos] = useState(createInitTodos);
    const [msg, setMsg] = useState('');

    function handleDelete(id) {
        setTodos(todos.filter(k=>k.id !== id));
    }
    return(
        <>
            <input value={msg} onChange={(e)=>{setMsg(e.target.value)}} />
            <button onClick={()=>{
                setMsg('');
                setTodos([...todos,{id: todos.length, text: msg }])
            }}>추가하기</button>

            <ul>
                {todos.map(k=>(
                    <li key={k.id}>{k.text}
                     <button onClick={()=>{handleDelete(k.id)}}> 삭제하기</button> </li>
                ))}                
            </ul>
        </>
    )
}