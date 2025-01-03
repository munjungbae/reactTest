import './Editor.css';
import {useState, useRef, useContext} from 'react';
import { TodoDispatchContext } from '../App';

const Editor = () => {
    const{onInsert} = useContext(TodoDispatchContext);
    const [content, setContent] = useState('');
    const inputRef = useRef();

    const onSubmit = () => {
        if(content === '') {
            alert('내용을 입력 바랍니다.')
            inputRef.current.focus();
            return;
        }
        onInsert(content);
        setContent('');
    }
    const onChangeContent = (e) => {
        setContent(e.target.value);
    }
    //엔터 입력 시 엔터(13)을 전달받아 값을 입력하게 함.
    const onKeyDown = (e) => {
        if(e.keyCode === 13) {
            onSubmit();
        }
    }

    return (
        <div className="editor">
        <input type="text" ref={inputRef} placeholder='할 일' value={content} onChange={onChangeContent} onKeyDown={onKeyDown}/>
        <button onClick={onSubmit}>추가</button>
        </div>
    );
}

export default Editor;