import { useEffect } from "react";

function Even() {
    useEffect(() => {
        return () => {
            console.log("Even 컴포넌트 언마운트");
        };
    }, []);
    return <div>현재 카운트는 짝수 입니다.</div>;
}  //useEffrct를 호출하고 의존성 배열로 빈 배열을 전달 후 콜백 함수가 화살표 함수를 반환하게 한다.

export default Even;