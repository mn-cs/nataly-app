import React from 'react';
import style from  './Nav.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
    //const [clickButton, setClickButton] = useState();
    const handleMenubarClick = () => {
        alert("Dear Nataly I'm not ready yet");
    }
    return  (
        <div className={style.nav}>
            <div className={style.menu} 
                onClick = { handleMenubarClick }
            >
                <FontAwesomeIcon icon={  faBars } /> 
            </div>
        </div>
    );
}
export default Nav;