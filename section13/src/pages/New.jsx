import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useContext } from "react";
import { DiaryDispatchContext } from "../App";

const New = () => {
  const [params, setParams] = useSearchParams();
  const { onCreate } = useContext(DiaryDispatchContext);
  const nav = useNavigate();

  const onSubmit = (input) => {
    onCreate(input.createdDate.getTime(), input.emotionId, input.content);
    //뒤로가기 방지하면서 / 페이지 이동
    nav("/", { replace: true });
  };
  return (
    <div>
      <h4>쿼리스트링으로 넘어오는 값{params.get("value")}</h4>
      <Header
        title={"새 일기 쓰기"}
        left={<Button onClick={() => nav(-1)} text={"< 뒤로 가기"} />}
      />
      <Editor onSubmit={onSubmit} />
    </div>
  );
};
export default New;
