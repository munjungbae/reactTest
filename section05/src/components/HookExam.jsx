import {useState} from "react";

//사용자가 만든 hooks 
function useInput() {
    const [name, setName] = useState('');
    const onChange = (e) => {
        setName(e.target.value);
    };
    return [name, onChange];    
}

const HookExam = () => {
    const[name, setName] = useInput();
    const[name2, setName2] = useInput();

    return (
        <>
        <div>
            <input type="text" value={name} onChange={setName}/>
        </div>
        <div>
            <input type="text" value={name2} onChange={setName2}/>
        </div>
        </>
    );
}

export default HookExam;