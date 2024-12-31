import './App.css'
import Controller from './components/Controller';
import CalculateViewer from './components/CalculateViewer';
import {useState} from 'react';

function useInput() {
  const [input, setInput] = useState('');
  const onChange = (e) => {
    setInput(e.target.value);
  };
  return [input, onChange];    
}

function App() {
  
  const [count, setCount] = useState(0);
  const [input, setInput] = useInput();
  const [input2, setInput2] = useInput();

  const onClickAdd = () => {
    setCount(Number(input) + Number(input2));
  }
  const onClickSub = () => {
    setCount(Number(input) - Number(input2));
  }
  const onClickMul = () => {
    setCount(Number(input) * Number(input2));
  }
  const onClickDiv = () => {
    setCount(Number(input) / Number(input2));
  }
  

  return (
    <div className='app'>
      <h1>Calculater</h1>
      <div className='text1'>
      <input type="text" value={input} onChange={setInput}/>
      </div>
      <div className='text2'>
      <input type="text" value={input2} onChange={setInput2}/>
      </div>
      <section className='viewer'>
        <CalculateViewer count={count}/>
      </section>
      <section className='controller'>
        <Controller onClickButton={onClickAdd}/>
        <Controller onClickButton={onClickSub}/>
        <Controller onClickButton={onClickMul}/>
        <Controller onClickButton={onClickDiv}/>
      </section>
    </div>
  )
}

export default App
