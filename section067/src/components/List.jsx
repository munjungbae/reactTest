import './List.css';
import ListItem from './ListItem';
import {useMemo, useState} from 'react';

const List = ({todos, onUpdateIsDone, onDelete , onUpdate}) => {
    const [search, setSearch] = useState('');


    const onChangeSearch = (value) => {
        setSearch(value.target.value)
    }

    function filterSearch() {
        if(search === '') {
            return todos;
        } else {
            return todos.filter((value) => {
                return value.content.toLowerCase().includes(search.toLowerCase());
            })
        }
    }

    const filterTodos = filterSearch();


    return (
        <>
        <div className='list'>
        <select>
            <option value="user">작성자</option>
            <option value="content">제목</option>
        </select>
        <input type="text" value={search} placeholder='글 제목을 입력 해 주세요' onChange={onChangeSearch}/>
        </div>
            {filterTodos.map((object)=>{
                return <ListItem key={object.id} {...object} onUpdateIsDone={onUpdateIsDone} onDelete={onDelete} onUpdate={onUpdate}/>
            })
        }
        </>
    );
}

export default List;