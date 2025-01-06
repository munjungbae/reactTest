import './App.css'
import { Routes, Route, Link, useNavigate, useSearchParams} from 'react-router-dom'
import Home from './pages/Home';
import Diary from './pages/Diary';
import Edit from './pages/Edit';
import New from './pages/New';
import Header from './components/Header';
import NotFound from './pages/NotFound';
import Button from './components/Button';
import { useReducer } from 'react';

const mockData = [
  {
  id: 1,
  createdDate: new Date().getTime(),
  emotionId: 1,
  content: "1번 일기 내용",
  },
  {
  id: 2,
  createdDate: new Date().getTime(),
  emotionId: 2,
  content: "2번 일기 내용",
  },
  {
  id: 3,
  createdDate: new Date().getTime(),
  emotionId: 3,
  content: "3번 일기 내용",
  },
 ];

 const reducer = (state, action) => {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item) => String(item.id) === String(action.data.id) ? action.data : item);
    case "DELETE":
      return state.filter((item) => String(item.id) !== String(action.id));
    default:
      return state;
  }
 }

function App() {
  //useState => useReducer
  const [state, dispatch] = useReducer(reducer(mockData))


  return (
    <>
    <Routes>
        {/* http://localhost:5173/new (즉 홈으로 연결) */}
        <Route path="/" element={<Home/>} /> 
        <Route path="/new" element={<New/>} /> 
        <Route path="/diary/:id" element={<Diary/>} /> 
        <Route path="/edit/:id" element={<Edit/>} /> 
        <Route path="*" element={<NotFound/>} /> 
      </Routes>
      </>
  )
}

export default App
