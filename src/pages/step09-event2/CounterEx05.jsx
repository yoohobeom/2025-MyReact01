import { Input } from "@mui/material";
import { useState } from "react";

export default function CounterEx05(params) {
    const [liked, setLiked] = useState(false);
    const handleChange = (e) => {
        setLiked(e.target.checked);
    }

    return (
        <>
            <label>
                <Input 
                type="checkbox" 
                checked= {liked} 
                onChange={handleChange}></Input> 
                I liked this</label>
                <hr />
                <h3>You {liked ? 'liked' : 'did not like'}</h3>
        </>
    )
}