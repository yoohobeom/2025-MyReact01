import { useState } from "react";

export default function CounterEx06(params) {
    const [form, setFrom] = useState({
        firstName: '둘리',
        lastName: '강',
        email: 'kang@naver.com'
    });

    return(
        <>
            <label>First Name:
                <input value={form.firstName}
                onChange={(e) => {
                    // 전개 연산자(...) : 배열이나 객체의 내용을 펼쳐서 더 큰 구조 안에 넣을 때 사용
                    //                    객체를 복사하거나 병합 할 때 사용
                    // 리액트는 상태를 직접 수정할 수 없으므로, 기존 객체의 불변성을 지키면서, 필요한 값을
                    // 바꾸기 위한 방법
                    setFrom({...form, firstName:e.target.value})}}/>
            </label>
            <label>Last Name:
                <input value={form.lastName}
                onChange={(e) => {
                    setFrom({...form, lastName:e.target.value})}}/>
            </label>
            <label>Email:
                <input value={form.email}
                onChange={(e) => {
                    setFrom({...form, email:e.target.value})}}/>
            </label>

            <hr />
            <ul>
                <li>{form.firstName}</li>
                <li>{form.lastName}</li>
                <li>{form.email}</li>
            </ul>
        </>
    )
}