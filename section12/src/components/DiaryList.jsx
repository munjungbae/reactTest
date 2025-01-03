import DiaryItem from './DiaryItem';
import Button from './Button';
import './DiaryList.css'

const DiaryList = () => {
    return (
        <>
       <div className='diary_list'>
            <div className='menu_bar'>
                <select>
                    <option value="latest">최신순</option>
                    <option value="oldest">제목순</option>
                </select>
                <Button text={'새 일기 쓰기'} type={'GREEN'}/>
            </div>
            <div className="listWrapper">
                <DiaryItem/>
                <DiaryItem/>
                <DiaryItem/>
                <DiaryItem/>
            </div>
        </div>
        </>
    );
};

export default DiaryList;