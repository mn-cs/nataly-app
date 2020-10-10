import React from 'react';
import style from './Header.module.scss';

const Header = () => {
    return  (
        <div className={style.header}>
            <div className={style.logo}>
                Natalie's blog &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; hopary gandz
            </div>
            <div className={style.menu}>
                
            </div>
        </div>
    );
}
export default Header;