import './App.css'
import Controller from './components/Controller';
import CalculateViewer from './components/CalculateViewer';
import { useState } from 'react';

function App() {

  const [count, setCount] = useState(0);

  const onClickButton = (value) => {
    setCount(count + value);
  }

  return (
    <div className='app'>
      <h1>Simple Count</h1>
      <section className='viewer'>
        <CalculateViewer count={count} />
      </section>
      <section className='controller'>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  )
}

export default App
