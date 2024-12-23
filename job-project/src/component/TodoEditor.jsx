import { useState, useRef } from "react";
import "./TodoEditor.css";
const TodoEditor = ({onCreate}) => {
    // 입력 폼에 입력한 데이터를 저장할 Staet 변수 content생성
    const [content, setContent] = useState("");
    const inputRef = useRef();
    // 입력 폼의 onChage 이벤트 핸들러 onChangeContent를 생성
    const onChangeContent = (e) => {
        setContent(e.target.value);
    };
    // <추가> 버튼에 대한 이벤트 핸들러 Submit 설정
    // onCreate를 호출하고 인수로 content의 값을 전달
    const onSubmit = () => {
        if (!content) {
            inputRef.cuttent.focus();
            return;
        }
        onCreate(content);
        setContent("");
    };

    const onKeyDown = (e) => {
        // 13 : (엔터키)를 누르면 추가 버튼을 클릭한것과 동일한
        // 동작을 수행하는 키 입력 이벤트
        if (e.keyCode === 13) {
            onSubmit();
        }
    };

    return (
    <div className = "TodoEditor">
        <h4>새로운 Todo 작성하기🖋️ </h4>
        <div className="editor_wrapper">
            <input
            ref = {inputRef}
            value = {content}
            onChange={onChangeContent}
            onKeyDown={onKeyDown}
             placeholder="New Todk..." />
{/* value 속성으로 content 값을 설정,이벤트 핸들러로onChangeContent 설정 */}
             
             {/* 버튼 클릭 이벤트 핸들러로 함수onsubmit 설정 */}
            <button onClick={onSubmit}>추가</button>
        </div>
    </div>
    );
};

export default TodoEditor;