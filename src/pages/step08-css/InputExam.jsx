import { TextField } from '@mui/material'
import './inputExam.css'

export default function InputExam(props) {
    return (
        // className 은 css에서 class 뜻한다.
        // TextField 이벤트 처리는 onChange를 사용하자
        <div>
            <input onFocus={() => console.log("onFocus")}
                    onBlur={() => console.log("onBlur")}
                    className="bgColor"/>
            <br /><br />
            <TextField id="outlined-basic" label="Outlined" variant="outlined"
            onChange={(e)=>console.log(e.target.value)}/>
            <TextField id="filled-basic" label="Filled" variant="filled" 
            onKeyUp={(e)=>console.log(e.target.value + "," + e.key)}/>
            <TextField id="standard-basic" label="Standard" variant="standard" />
        </div>
    )
}