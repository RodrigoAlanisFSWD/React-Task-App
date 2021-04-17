import logo from '../logo.svg';
import './Main.css';

function Main() {
    return  (
        <div className="main">
            <img src={logo} alt="react" className="main__img"/>
            <h1 className="main__title">
                Welcome To My React Project!
            </h1>
            <a href="https://github.com/RodrigoAlanisWeb" className="main__subtitle">
                Go To My Github Profile! <i class="fab fa-github"></i>
            </a>
        </div>
    )
}

export default Main;