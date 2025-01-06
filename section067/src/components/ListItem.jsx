import './ListItem.css';
import {useState} from 'react';
// import {useRef} from 'react';

const ListItem = ({id, user, isDone, content, date, onUpdateIsDone, onDelete, onUpdate}) => {
    const [contentUpdate, setContentUpdate] = useState();
    // const contentUpdate = useRef();

    const onClickCheck = () => {
        onUpdateIsDone(id);
    }

    const onClickDelete = () => {
        onDelete(id);
    }

    const onChangeUpdate = (e) => {
        setContentUpdate(e.target.value);
    }
    const onClickUpdate = () => {
        const contentInsert = prompt('내용을 입력 해 주세요')
        onUpdate(id, contentInsert);
    }

    return (
        <div className='listMain'>
        <div  className='listItem'>
           <input type="checkbox" checked={isDone} onChange={onClickCheck} />
           <p className='content'>{content}</p>
           <p className='cuser'>{user}</p>
           <p className='date'>{new Date(date).toLocaleDateString()}</p>
           <button onClick={onClickDelete}>삭제</button>
           <button value={contentUpdate} onClick={onClickUpdate} onChange={onChangeUpdate}>수정</button>
        </div>
        </div>
    );
}

export default ListItem;