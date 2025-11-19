import { useState } from "react"
import Page from "./Page";
// import { ThemeContext } from "@emotion/react";
import { ThemeContext } from "./ThemeContext";


export default function Context(params) {
    const [isDark, setIsDark] = useState(false);
    return (
        <div>
            {/* props 로 전달하지는 않는다. (중간에 필요없는 컴포넌트들에게 전달할 필요가 없다.)*/}
            {/* 하위 컴포넌트들에게 데이터를 제공한다는 뜻 */}
            {/* Provider : 값을 공급하는 역할을 한다. */}
            <ThemeContext.Provider value={{isDark, setIsDark}}>
            <Page />
            </ThemeContext.Provider>
        </div>
    )
}