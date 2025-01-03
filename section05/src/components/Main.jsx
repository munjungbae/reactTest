import "./Main.css"

function Main() {
    const number = 9;
    const obj = {name: "문정배", age: 27, isLogin: false};


    return(
        <>
        {obj.isLogin === true ?
        (<div className="logout"> 로그아웃 </div>)
        :
        (<div style={{backgroundColor:"yellow", padding:"20", border:"3px solid red"}}>로그인</div>)}
        </>
    );
  }

export default Main;