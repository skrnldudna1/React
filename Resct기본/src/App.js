import './App.css'; // 스타일 파일을 불러옴
import { useState } from 'react'; // React의 상태 관리를 위해 useState를 불러옴

// **Header 컴포넌트**
// - 제목(title)을 보여주는 헤더 부분
// - 클릭 시 부모 컴포넌트의 onChangeMode 함수 호출
function Header(props) {
  console.log('props', props.title); // 전달받은 props의 title 값 콘솔 출력
  return (
    <header>
      <h1>
        {/* 링크 클릭 시 페이지 리로드를 막고 이벤트 핸들러 호출 */}
        <a
          href="/"
          onClick={function (event) {
            event.preventDefault(); // a 태그의 기본 동작(페이지 이동) 방지
            props.onChangeMode(); // 부모 컴포넌트의 onChangeMode 호출
          }}
        >
          {props.title} {/* 제목 출력 */}
        </a>
      </h1>
    </header>
  );
}

// **Nav 컴포넌트**
// - topics 배열을 기반으로 메뉴 리스트 생성
// - 각 항목 클릭 시 id 값을 부모 컴포넌트에 전달
function Nav(props) {
  const lis = []; // 리스트 항목을 저장할 배열

  // topics 배열을 순회하며 리스트 항목을 생성
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(
      <li key={t.id}>
        {/* 링크 클릭 시 이벤트 핸들러 호출 */}
        <a
          id={t.id} // 각 항목의 id 값 설정
          href={'/read/' + t.id} // 링크 주소 설정
          onClick={(event) => {
            event.preventDefault(); // 기본 동작 방지
            props.onChangeMode(Number(event.target.id)); // 문자열 id를 숫자로 변환 후 전달
          }}
        >
          {t.title} {/* 항목 제목 출력 */}
        </a>
      </li>
    );
  }

  return (
    <nav>
      <ol>{lis}</ol> {/* 리스트 항목들을 출력 */}
    </nav>
  );
}

// **Article 컴포넌트**
// - 제목과 내용을 출력하는 컴포넌트
function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2> {/* 제목 출력 */}
      {props.body} {/* 본문 내용 출력 */}
      <p>Welcome to my test channel!</p> {/* 추가 메시지 */}
    </article>
  );
}

// **App 컴포넌트** (메인 컴포넌트)
// - 상태를 관리하고 Header, Nav, Article 컴포넌트를 조합하여 화면을 구성
function App() {
  const [mode, setMode] = useState('WELCOME'); // 화면 모드를 관리하는 상태 ('WELCOME' or 'READ')
  const [id, setId] = useState(null); // 선택된 항목의 id를 저장하는 상태

  // topics 배열: 메뉴 항목과 내용을 저장
  const topics = [
    { id: 1, title: 'Welcome', body: 'Hello, Web!' },
    { id: 2, title: 'Hi', body: 'How are you?' },
    { id: 3, title: 'Bye', body: 'Goodbye, see you later!' },
  ];

  let content = null; // 화면에 표시할 콘텐츠를 저장하는 변수

  // **mode 상태에 따라 다른 콘텐츠를 보여줌**
  if (mode === 'WELCOME') {
    // WELCOME 모드일 때
    content = <Article title="Welcome" body="Hello, Web"></Article>;
  } else if (mode === 'READ') {
    // READ 모드일 때 선택된 항목의 title과 body를 찾아서 표시
    let title, body = null;

    for (let i = 0; i < topics.length; i++) {
      console.log(topics[i].id, id + " 🐾"); // 디버깅용 콘솔 출력
      if (topics[i].id === id) {
        title = topics[i].title; // 선택된 항목의 제목
        body = topics[i].body; // 선택된 항목의 본문 내용
      }
    }
    content = <Article title={title} body={body}></Article>; // 찾아낸 제목과 내용을 전달
  }

  return (
    <div>
      {/* Header 컴포넌트 */}
      <Header
        title="WEB🕊️"
        onChangeMode={function () {
          setMode('WELCOME'); // mode 상태를 'WELCOME'으로 변경
        }}
      ></Header>

      {/* Nav 컴포넌트 */}
      <Nav
        topics={topics}
        onChangeMode={function (_id) {
          setMode('READ'); // mode 상태를 'READ'로 변경
          setId(_id); // 선택된 id를 저장
        }}
      ></Nav>

      {/* 콘텐츠 표시 */}
      {content}
    </div>
  );
}

export default App; // App 컴포넌트를 외부에서 사용할 수 있도록 내보냄
