// 값 가져오기
import {useParams} from 'react-router-dom';

const Diary = () => {
    const params = useParams();
    return (
        <>
            <h1>{params.id}Diary 입니다.</h1>
        </>
    );
}

export default Diary;