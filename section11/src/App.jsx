import './App.css'
import Header from './components/Header'
import Editor from './components/Editor'
import List from './components/List'
import Exam from './components/Exam'
import { useReducer, useRef, useCallback, createContext, useMemo } from 'react';
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


function reducer(state, action) {
  switch(action.type) {
    case"INSERT":
      return [action.data, ...state];
    case"UPDATE":
      return state.map((object) => (object.id === action.data) ? {...object, isDone:!object.isDone} : object);
    case"DELETE":
      return state.filter((object) => {
        return object.id !== action.data;
      });
      default: return state;
  }
}

//JSP의 session 개념
export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();

function App() {
  const [todos, dispatch] = useReducer(reducer,mockData);
  const idRef = useRef(3);
  //todos에 추가 할 객체(레코드)를 처리하는 핸들러 함수
  // const onInsert = (value) => {
  //   dispatch({
  //     type: "INSERT",
  //     data: {
  //       id : idRef.current++,
  //       isDone: false,
  //       content: value,
  //       data : new Date().getTime(),
  //   }
  //   })
  // };

  //위의 onInsert를 useCallback으로 전환 ( 해당 함수를 Mount 할 때 한번만 실행 )
  const onInsert = useCallback((data)=>{
    dispatch({
      type: "INSERT",
      data: {
        id : idRef.current++,
        isDone: false,
        content: data,
        data : new Date().getTime(),
    }
    })
  },[]);


  //todos수정할 레코드 처리하는 핸들러 함수
  // const onUpdate = (targetId) => {
  //   dispatch ({
  //     type: "UPDATE",
  //     data: targetId,
  //   })
  // };

  //위의 onUpdate를 useCallback으로 전환 ( 해당 함수를 Mount 할 때 한번만 실행 )
  const onUpdate = useCallback((targetId)=>{
    dispatch ({
      type: "UPDATE",
      data: targetId,
    })
  },[])

  //todos에 삭제 할 레코드를 전달하는 핸들러 함수
  // const onDelete = (targetId) => {
  //   dispatch({
  //     type:"DELETE",
  //     data: targetId,
  //   })
  // }

  //위의 onDelete를 useCallback으로 전환 ( 해당 함수를 Mount 할 때 한번만 실행 )
  const onDelete = useCallback((targetId)=>{
    dispatch({
      type:"DELETE",
      data: targetId,
    })
  },[])
  
//TodoDispatchContext.Provider를 위한 useMemo를 생성.
  const memoDispatch = useMemo(()=>{
    return (onInsert, onUpdate, onDelete)
  },[]);


  return (
    <>
    <div className='app'>
      <Exam/>
      <Header/>
      <TodoStateContext.Provider value={todos}>
        <TodoDispatchContext.Provider value={{memoDispatch}}>
      {/* <Editor onIsert={onInsert1}/> */}
      <Editor/>
      {/* <List todos={todos} onUpdate={onUpdate1} onDel={onDelete1}/> */}
      <List/>
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>  
    </>
  )
}

export default App
