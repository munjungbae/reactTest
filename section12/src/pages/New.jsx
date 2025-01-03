import { useSearchParams } from 'react-router-dom';


const New = () => {
    const [params, setParams] = useSearchParams();
    
    console.log(params.get('name'));

    return (
        <>
            <h1>New {params.get('name')}</h1>
        </>
    );
}

export default New;