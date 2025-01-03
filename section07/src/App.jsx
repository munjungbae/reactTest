import './App.css'
import Controller from './components/Controller';
import CalculateViewer from './components/CalculateViewer';
import Even from './components/Even';
import {useState, useEffect, useRef} from 'react';

function App() {

  const [count, setCount] = useState(0);
  const [input, setInput] = useState('A');
  const isMount = useRef(false);

  //마운트 될 때, 모든 스테이트가 바뀔 때 업데이트.
  useEffect(()=> {
    if(isMount.current === false) {
      isMount.current = true;
      console.log(`(Mount)count : `)
      return;
    } else {
      console.log(`(Update)count : `);
    }
  });

  const onClickButton = (value) => {
    setCount(count+value);
  }

  //input 변화 된 값 Setting
  const onChangeInput = (e) => {
    setInput(e.target.value);
  }
  return (
    <div className='app'>
      <h1>Simple Count</h1>
      <div>
        <input type="text" value={input} onChange={onChangeInput}/>  
      </div>
      <section className='viewer'>
        <CalculateViewer count={count}/>
        {count %2 === 0 ? <Even/> : null}
      </section>
      <section className='controller'>
        <Controller onClickButton={onClickButton}/>
      </section>
    </div>
  )
}

export default App
