import { useState } from "react"
import Page from "./Page";

export default function NoContext(params) {
    const [isDark, setIsDark] = useState(false);
    return (
        <div>
            <Page isDark={isDark} setIsDark={setIsDark} />
        </div>
    )
}