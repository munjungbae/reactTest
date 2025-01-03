import './List.css';
import ListItem from './ListItem';
import {useMemo, useState, useContext} from 'react';
import { TodoStateContext } from '../App';

const List = () => {
    const todos =  useContext(TodoStateContext);
    const [search, setSearch] = useState('');
    
    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    };

    //useState에 해당 되는 search 내용이 변경되면 List가 리랜더링 된다(useState)
    //이 경우 필터링을 사용하여 랜더링 될 때마다 필터링 값을 출력.
    const getFilterTodos = () => {
        if(search === '') {
            return todos;
        } else {
            return todos.filter((object/*, index, array*/)=> {
                return object.content.toLowerCase().includes(search.toLowerCase());
            })
        }
    };
    
    const filterItem = getFilterTodos();

    //랜더링 발생 시 전제 개수, 업무를 완료 한 개수, 업무를 미완성 한 개수 연산
    // const getAnalyzeData = () => {
    //     const totalCount = todos.length;
    //     const doneCount = todos.filter((object)=>{
    //         return object.isDone === true;
    //     }).length;
    //     const unDoneCount = totalCount - doneCount;
    //     return {totalCount, doneCount, unDoneCount}
    // }
    // };
    //랜더링 발생 시 전제 개수, 업무를 완료 한 개수, 업무를 미완성 한 개수 연산*useMemo 사용하여 랜더링 개선
    const {totalCount, doneCount, unDoneCount} = useMemo(()=> {
        const totalCount = todos.length;
        const doneCount = todos.filter((object)=>{
            return object.isDone === true;
        }).length;
        const unDoneCount = totalCount - doneCount;
        return {totalCount, doneCount, unDoneCount}
    },[todos])

    return (
        <>
        <div className='list'>
            <div>
                <p>할일 : {totalCount}</p>
                <p>완료 : {doneCount}</p>
                <p>해야할 일 : {unDoneCount}</p>
            </div>
            <h4>Todo List</h4>
            <input type="text" value={search} onChange={onChangeSearch} placeholder='검색어를 입력 해 주세요'/>
        </div>
            <div className='item'>
                {filterItem.map((object/*, index, array*/)=>{
                    //map으로 값을 받아 올 시 여러 값이 전달되기 때문에 구별 할 수 있는 key값을 전달해야 한다.
                    // return <ListItem key={object.id} {...object} onUpdate={onUpdate} onD={onDel}/>;
                    return <ListItem key={object.id} {...object}/>;
                })}
            </div>
        </>
    );
}

export default List;