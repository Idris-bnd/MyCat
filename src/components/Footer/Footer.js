import React from 'react';
import './Footer.scss';


function Footer() {

  return(
    <footer className='Footer'>
        <div className="socialNetworks">
            <a className='linkedin' href="https://www.linkedin.com/in/idris-ben-ahmed-61773023a/">
                <i className="fa-brands fa-linkedin" />
            </a>

            <a className='github' href="https://github.com/Idris-bnd">
                <i className="fa-brands fa-square-github" />
            </a>
        </div>
        <p>© 2023 Idris BEN AHMED.</p>
    </footer>
 )
}
export default Footer;