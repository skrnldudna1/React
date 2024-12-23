import './App.css'
import Header from './component/Header';
import TodoEditor from './component/TodoEditor';
import TodoList from './component/TodoList';
import {useState, useRef} from'react';

const mockTodo = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    createdDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "숙제 하기",
    createdDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "노래 연습하기",
    createdDate: new Date().getTime(),
  },
];

function App() {
  const idRef = useRef(3); //useRe훅을 사용해 idRef라는 참조 객체를 생성
  const [todo, setTodo] = useState(mockTodo);

  // 새 할일 아이템을 추가 (onCreate를 누를시)
  const onCreate = (content) => {
    const newItem = {
      id: idRef.current, //idRef의 현재값을 새롭게 추가할 일 아이템의 id로 지정
      content,
      isDone: false,
      createdDate: new Date().getTime(),
    };
    setTodo([newItem, ...todo]);
    idRef.current += 1; //idRef의 현잿값을 1 늘린다.
  };

  const onUpdate = (targetId) => {
    setTodo(
      todo.map(
        (it) => 
          it.id === targetId? {...it, isDone:!it.isDone} : it
      )
    );
  };

  const onDelete = (targetId) => {
    setTodo(todo.filter((it) => it.id!== targetId));
  };

  return( 
  <div className='App'>
    <Header />
    <TodoEditor onCreate={onCreate} />
    <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete}/>
  </div>
  );
}

export default App
