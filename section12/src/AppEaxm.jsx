import './App.css'
import { Routes, Route, Link, useNavigate, useSearchParams } from 'react-router-dom'
import Home from './pages/Home';
import Diary from './pages/Diary';
import Edit from './pages/Edit';
import New from './pages/New';
import NotFound from './pages/NotFound';
// import { getEmotionImage } from './util/get-emition-image';
// import { img1 } from './assets/emotion1.png';
// import { img2 } from './assets/emotion1.png';
// import { img3 } from './assets/emotion1.png';
// import { img4 } from './assets/emotion1.png';
// import { img5 } from './/assets/emotion1.png';

function AppExam() {
  const nav = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const name = searchParams.get('name');


  return (
    <>
    <div>
      {/* 라우터에서는 해당 Link를 더 사용 */}
      {/* 링크는 페이지를 새로 불러오는것이 아닌 현재 페이지에 로딩하는 기술 */}
      {/* 동적 라우팅을 적용하는 방법 */}
      <Link to='/'>home</Link>
      <br />
      <Link to='/new'>new</Link>
      <br />
      <Link to='/edit/2'>edit</Link>
      <br />
      <Link to='/diary/2'>diary</Link>
      <br />
      <button onClick={()=>{nav('/')}}>home</button>
      <button onClick={()=>{nav('/new')}}>new</button>
      <button onClick={()=>{nav('/edit/1')}}>edit</button>
      <button onClick={()=>{nav('/diary/1')}}>diary</button>
      <br />
      <button onClick={()=>{setSearchParams({name: 'mjb'})}}>쿼리 스트링으로 보내기 name</button>
      <br />
      {/* 이미지 가져오가 */}
      <img src="../src/assets/emotion1.png" alt="감정이미지1" />
      <img src="../src/assets/emotion2.png" alt="감정이미지2" />
      <img src="../src/assets/emotion3.png" alt="감정이미지3" />
      <img src="../src/assets/emotion4.png" alt="감정이미지4" />
      <img src="../src/assets/emotion5.png" alt="감정이미지5" />
      {/* <img src={getEmotionImage(1)} alt="감정이미지1" />
      <img src={getEmotionImage(2)} alt="감정이미지2" />
      <img src={getEmotionImage(3)} alt="감정이미지3" />
      <img src={getEmotionImage(4)} alt="감정이미지4" />
      <img src={getEmotionImage(5)} alt="감정이미지5" /> */}
      <br/>
      {/* <img src={img1} alt="감정이미지1" />
      <img src={img2} alt="감정이미지2" />
      <img src={img3} alt="감정이미지2" />
      <img src={img4} alt="감정이미지2" />
      <img src={img5} alt="감정이미지2" /> */}


    </div>
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

export default AppExam
