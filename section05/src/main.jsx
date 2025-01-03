import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <App /> //import한 app을 컴포넌트에서 가져오기
)
