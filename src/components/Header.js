import '../components/style.css';
import logo from '../images/logo.png'

function Header(){
    return (
        <div className="logo">
            <img src={logo} alt="logo" />
        </div>
    )
}

export default Header;