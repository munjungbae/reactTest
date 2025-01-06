import Header from '../components/Header'
import Button from '../components/Button'
import DiaryList from '../components/DiaryList';

const Home = () => {
    const time = new Date().getTime();
    const date = new Date(time).toLocaleDateString();

    return (
        <>
        <Header left={<Button text={'<'}/>} title={date} right={<Button text={'>'}/>}/>
        <DiaryList/>
        </>
    );
}

export default Home;