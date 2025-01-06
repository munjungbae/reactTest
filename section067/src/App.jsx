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
    user : '문정배',
    content: '최고',
    date : new Date().getTime(),
  },
];



function App() {
  
  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(2);
 
  const onInsert = (user, content) => {
    const newTodos = {
      id : idRef.current++,
      isDone: false,
      user : user,
      content: content,
      date : new Date().getTime(),
    } 
    setTodos([newTodos, ...todos]);
  }

  const onUpdateIsDone = (valueId) => {
    setTodos(
      todos.map((object)=>{
        return (object.id === valueId) ? {...object, isDone: !object.isDone} : object;
      })
    )
  }
  
  const onDelete = (valueId) => {
    setTodos(
      todos.filter((object) => {
        return object.id !== valueId
      })
    )
  };
  const onUpdate = (id, content) => {
    setTodos(
      todos.map((object)=>{
        return (object.id === id) ? {...object, content: content} : object;
        // return (object.id === id) ? {...object, content: content} : alert('잘못 입력 하였습니다.');
      })
    )
  };

  return (
    <>
    <div className='app'>
      <Header/>
      <Editor onInsert={onInsert}/>
      <List todos={todos} onUpdateIsDone={onUpdateIsDone} onDelete={onDelete} onUpdate={onUpdate}/>
    </div>
    </>
  )
}

export default App
