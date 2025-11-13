export default function ReduceCommandList(props) {
    const comments = [    
        {name : "홍길동", comment : "방가 방가", isAdmin : true},
        {name : "둘리", comment : "호이~ 호이~", isAdmin : false},
        {name : "도우너", comment : "칸따피야", isAdmin : false},
        {name : "희동이", comment : "응~애", isAdmin : true}];

    // reduce()는 배열의 각 요소를 순회하며 누적값을 계산하는 메서드
    // acc : 누적값 저장
    // k : 객체 자체
    const admin = comments.reduce((acc, k) => {
        acc.total = acc.total + 1;
        if(k.isAdmin){
            acc.adminCount = acc.adminCount + 1;
        }
        return acc;
        // {total : 0, adminCount : 0} : 초기값 설정
    }, {total : 0, adminCount : 0});

    return (
        <>
            <h2>관리자 댓글 통계</h2>    
            <p>전체 댓글 수 : {admin.total}</p>
            <p>관리자 댓글 수 : {admin.adminCount}</p>
        </>
    )
}