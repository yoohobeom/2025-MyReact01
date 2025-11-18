import { useState } from "react"

export default function FormSample01(params) {
    const [userName, setUserName] = useState("")
    const roles = ["user", "admin", "guest"]
    const [role, setRole] = useState(roles[0])
    const [isSubscribed, setSubscribed] = useState(false);
    return (
        <form>
            <p>Name : {userName} {isSubscribed && '(subScribed)'}</p>
            <p>Role : {role}</p>
            <p><input type="text"
                      placeholder="UserName"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}/>
            </p>
            <p>
                <label>
                    <input type="checkbox"
                        checked={isSubscribed}
                        onChange={(e) => setSubscribed(e.target.checked)}/>
                        Subcribed
                </label>
            </p>
            <p>
                <select value={role} onChange={(e) => setRole(e.target.value)}>
                    {roles.map((k) => {return <option key={k} value={k}>{k}</option>})}
                </select>
            </p>
        </form>
    )
}