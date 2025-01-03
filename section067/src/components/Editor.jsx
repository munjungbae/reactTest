import './Editor.css';
import {useState, useRef} from 'react';

const Editor = ({onInsert}) => {
    const [content, setContent] = useState('');
    const [user, setUser] = useState('');

    const inputRef = useRef();
    const inputRef2 = useRef();

    const onSubmit = () => {
        if(content === '') {
            alert('내용을 입력 바랍니다')
            inputRef2.current.focus();
            return;
        }else if (user === '') {
            alert('내용을 입력 바랍니다')
            inputRef.current.focus();
            return;
        }
        onInsert(user,content);
        setUser('');
        setContent('');
    }

    const onChangeUser = (value) => {
        setUser(value.target.value)
    }
    const onChangeContent = (value) => {
        setContent(value.target.value)
    }

    return (
        <>
        <div className='editor'>
            <input type="text" ref={inputRef2} placeholder='내용입력' value={content} onChange={onChangeContent}/>
            <input type="text" ref={inputRef} placeholder='작성자' value={user} onChange={onChangeUser}/>
            <button onClick={onSubmit}>입력</button>
        </div>
        </>
    );
}

export default Editor;