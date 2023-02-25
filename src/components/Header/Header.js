import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';


function Header() {

  return(
    <header className='Header'>
        <div className="header--left">
        <Link to="/">
            <img src="https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png" alt="image d'un chat et logo du site" />
            <h1>MyCat</h1>
        </Link>
        </div>

        <div className="header--right">
            <Link to="Favorites">
                Favorites <i className="fa-solid fa-star" />
            </Link>
        </div>
    </header>
 )
}
export default Header;