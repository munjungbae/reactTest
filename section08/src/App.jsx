import './App.css'
import Header from './components/Header'
import Editor from './components/Editor'
import List from './components/List'
import {useState, useRef} from 'react';
//app에서 이벤트 정의 후 넘기기 (update, insert, delete ...)
//select 는 값만 넘긴 뒤 그 값으로 정의
//가상의 데이터 ( Mount => 서버에서 데이터를 가져온다)
const mockData = [
  {
    id : 0,
    isDone: false,
    content: 'React 공부하기',
    data : new Date().getTime()
  },
  {
    id : 1,
    isDone: false,
    content: 'React2 공부하기',
    data : new Date().getTime()
  },
  {
    id : 2,
    isDone: false,
    content: 'React3 공부하기',
    data : new Date().getTime()
  },
];
function App() {
  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(3);
  //todos에 추가 할 객체(레코드)를 처리하는 핸들러 함수
  const onInsert = (value) => {
    const newTodo = {
      id : idRef.current++,
      isDone: false,
      content: value,
      data : new Date().getTime(),
    };
    setTodos([newTodo, ...todos]);
  };

  //todos수정할 레코드 처리하는 핸들러 함수
  const onUpdate = (targetId) => {
    setTodos(
      todos.map((object)=>{
        return (object.id === targetId) ? {...object, isDone: !object.isDone} : object;
      })
    )
  }
  
  //todos에 삭제 할 레코드를 전달하는 핸들러 함수
  const onDelete = (targetId) => {
    setTodos(todos.filter((object) => {
      return object.id !== targetId;
    }))
  }
  
  return (
    <>
    <div className='app'>
      <Header/>
      <Editor onIsert={onInsert} />
      <List todos={todos} onUpdate={onUpdate} onDel={onDelete}/>
    </div>
    </>
  )
}

export default App
