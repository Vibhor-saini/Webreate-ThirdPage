import './navbar.css';
import Logo from './img/WebreateLogo.png';


function navbar(){
    return <div>

<p className="top">Digital Marketing Agency - Grow Revenue With Us!!</p>
<div class="navbar">
      <div class="left">
        <img src={Logo} />
      </div>
      <div class="right">
        <p>MENU</p>
      </div>
    </div>

    </div>
}

export default navbar;