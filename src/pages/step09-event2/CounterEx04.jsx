import { Button, TextField } from "@mui/material";
import { useState } from "react";

export default function CounterEx04(props) {
    const [userId, setUserId] = useState('');
    const [userPw, setUserPw] = useState('');
    const [result, setResult] = useState('');

    const handleLogin = () => {
        setResult(`ID: ${userId} / PW: ${userPw}`);
    }

    const handleReset = () => {
        setUserId('');
        setUserPw('');
        setResult('');
    }

    return (
        <>
            <h2>Login Form</h2>
            <TextField
                label="User Id"
                variant="outlined"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                style={{ marginBottom: "10px" }}
                placeholder="아이디를 입력하세요" />
            <br />
            <TextField
                label="Password"
                variant="outlined"
                type="password"
                value={userPw}
                onChange={(e) => setUserPw(e.target.value)}
                style={{ marginBottom: "10px" }}
                placeholder="비밀번호를 입력하세요" />
            <br />
            <Button variant="contained" color="primary" onClick={handleLogin}>Login</Button>
            <Button variant="contained" color="secondary" style={{ marginLeft: "10px" }} onClick={handleReset}>Reset</Button>
            <hr />
            <h3>결과 : {result}</h3>
        </>
    )
}