import './Header.css';

const Header = ({title, left, right}) => {
    return(
        <header className='header'>
            <div>{left}</div>
            <div>{title}</div>
            <div>{right}</div>
        </header>
    );
};

export default Header;