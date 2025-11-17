import { Button, TextField } from "@mui/material";
import { useState } from "react";

export default function CounterEx03(props) {
    const [msg, setMsg] = useState('Hi');

    function handleChange(e) {
        setMsg(e.target.value);
    }
    
    function handleClick(props) {
        setMsg('Hi');
    }
    return (
        <>
            <TextField variant="outlined" onChange={handleChange} value={msg}/>
            <p>당신의 입력값 : {msg}</p>
            <Button variant="contained" onClick={handleClick}>Reset</Button>
        </>
    )
}