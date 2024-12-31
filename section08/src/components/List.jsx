import './List.css';
import ListItem from './ListItem';
import {useState} from 'react';

const List = ({todos, onUpdate, onDel}) => {
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

    return (
        <>
        <div className='list'>
            <h4>Todo List</h4>
            <input type="text" value={search} onChange={onChangeSearch} placeholder='검색어를 입력 해 주세요'/>
        </div>
            <div className='item'>
                {filterItem.map((object/*, index, array*/)=>{
                    //map으로 값을 받아 올 시 여러 값이 전달되기 때문에 구별 할 수 있는 key값을 전달해야 한다.
                    return <ListItem key={object.id} {...object} onUpdate={onUpdate} onD={onDel}/>;
                })}
            </div>
        </>
    );
}

export default List;