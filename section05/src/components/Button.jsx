function Button({text, color, size, children}) {
//내부함수 정의 <선언식, 표현식, 화살표함수>
const onClickButton = (event) => {
  console.log(event);
  alert(text);
}


      //Props => 함수컴퍼넌트에 매개변수로 값 전달하기
    return(
      <button onClick={onClickButton} style={{color:color}}>
        {text}
        {children}
      </button>
    );
  }
  
  Button.defaultProps = {
    text: '게시판',
    color: 'green',
  }
  export default Button;