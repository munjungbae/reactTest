import './ListItem.css';
import { memo } from 'react'
import {useContext} from 'react';
import { TodoDispatchContext } from '../App';

const ListItem = ({id, isDone, content, date}) => {
    const {onUpdate, onDelete} = useContext(TodoDispatchContext);
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
        onDelete(id);
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

// 고차 컴포넌트.
// export default memo(ListItem, (prevProps, nextProps) => {
//     //memo => 리액트 로직 (리턴 값과 현재 값을 비교.)
//     //return false 를 주면 무조건 리 랜더링 발생.
//     //return true  를 주면 리 랜더링이 발생하지 않는다.
//     if(prevProps.id !== nextProps.id) {
//         return false;
//     }
//     if(prevProps.isDone !== nextProps.isDone) {
//         return false;
//     }
//     if(prevProps.content !== nextProps.content) {
//         return false;
//     }
//     if(prevProps.date !== nextProps.date) {
//         return false;
//     }
//     return true;
// });

export default memo(ListItem); 