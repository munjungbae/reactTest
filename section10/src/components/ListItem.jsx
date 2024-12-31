import './ListItem.css';
import {useState} from 'react'

const ListItem = ({id, isDone, content, date, onUpdate, onD}) => {
    // const[bValue, setbValue] = useState(false);
    // const clickCheck = () => {
    //     if (bValue === false) {
    //         setbValue(true);
    //     } else {
    //         setbValue(false);
    //     }
    // }
    const onChangeCheck = () => {
        onUpdate(id);
    }
    const onDeleteObject = () => {
        onD(id);
    }
    return (
        <div className='listItem'>
            <input /*onClick={clickCheck}*/ onChange={onChangeCheck} checked={isDone} type="checkbox"/>
            <p className='content'>{content}</p>
            <p className='date'>{new Date(date).toLocaleDateString}</p>
            <button onClick={onDeleteObject}>삭제</button>
        </div>
    );
}

export default ListItem;