import {useState, useRef} from "react";

const Register = () => {
    const countRef = useRef(0);
    const inputRef = useRef();
    const [input, setInput] = useState({
        name: '',
        birth: '',
        country: '',
        bio: '',
    });

    const onChanege = (e) => {
        countRef.current++;
        setInput({...input, [e.target.name] : e.target.value});
        console.log({...input, [e.target.name] : e.target.value})
    }
    //전송 시 패턴 검색   
    const onSubmit = () => {
        if(input.name === '') {
            alert('이름을 입력 해 주세요')
            inputRef.current.focus();
            console.log(inputRef);
        }
    }

    return (
        <>
        <div>
            <input ref={inputRef} name="name" onChange={onChanege} type="text" placeholder="이름" />
        </div>
        <div>
            <input value={input.birth} name="birth" type="date" onChange={onChanege}/>
        </div>
        <div>
            <select value={input.country} name="country" onChange={onChanege}>
                <option value="kr">한국</option>
                <option value="us">미국</option>
                <option value="uk">영국</option>
            </select>
        </div>
        <div>
            <textarea value={input.bio} name="bio" onChange={onChanege}></textarea>
        </div>
        <div>
            <button onClick={onSubmit} >전송</button>
        </div>
        </>
    );
};

export default Register;