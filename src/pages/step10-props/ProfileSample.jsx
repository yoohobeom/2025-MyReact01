import { useState } from "react";
import Profile from "./Profile";

export default function ProfileSample() {
    const users = ["고길동", "둘리", "마이콜"]
    const [user, setUser] = useState(users[0])
    const [isStatus, setStatus] = useState(true)
    return (
        <div>
            <h2>User profile</h2>
            <button onClick={() => {setStatus(!isStatus)}}>Toggle Status</button>
            {/* 부모의 변수 값을 자식에게 전달 가능
                부모 상태가 바뀌면 그 상태를 props 로 전달 받은
                자식 컴포넌트도 자동으로 업데이트 되어야 한다. */}
            <button onClick={() => {setUser(
                users[(users.indexOf(user)+1) % users.length]
            )}}>Switch User</button>

            <p>상태 : {isStatus ? 'Active' : 'Deactive'}</p>
            <Profile name={user}/>
        </div>
    )
}