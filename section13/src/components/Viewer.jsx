import "./Viewer.css";
import { getEmotionImage } from "../util/get-emotion-image";
import { emotionList } from "../util/constants";
const Viewer = () => {
  const emotionId = 1;
  // src/util/constants.js 가져오기
  const emotionItem = emotionList.find(
    (item) => String(item.emotionId) === String(emotionId)
  );
  return (
    <div className="Viewer">
      <section className="img_section">
        <h4>오늘의 감정</h4>
        <div className="emotion_img_wrapper">
          <img src={getEmotionImage(1)} />
          <div>{emotionItem.emotionName}</div>
        </div>
      </section>
      <section className="content_section">
        <h4>오늘의 일기</h4>
        <div className="content_wrapper">
          <p>일기….</p>
        </div>
      </section>
    </div>
  );
};

export default Viewer;
