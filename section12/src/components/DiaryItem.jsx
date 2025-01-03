import { getEmotionImage } from "../util/get-emition-image";
import Button from "./Button";
import './DiaryItem.css'

const DiaryItem = () => {
    return(
        <div className="diaryItem">
        <div className="img_section">
            <img src="../../src/assets/emotion1.png" alt="" />
        </div>
        <div className="info_section">
            <div>
                <p>{new Date().toLocaleDateString()}</p>
                <p>일기내용</p>
            </div>
            <div>

            </div>
        </div>
        <div className="button_section">
            <Button text={'수정하기'}/>
        </div>
        </div>
    );
};

export default DiaryItem;