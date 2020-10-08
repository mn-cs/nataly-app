import React from 'react';
import style from './Footer.module.scss';

const Footer = () => {
    return  (
        <div className={style.footer}>
            <div className={style.group}>
                <div className={style.txt}>About</div>
                <div className={style.txt}>Contact</div>
                <div className={style.txt}>Story</div>
            </div>
            <div className={style.group}>
                <div className={style.txt}>more blogs</div>
                <div className={style.txt}>working hours</div>
                <div className={style.txt}>study hours</div>
            </div>
            {/* <div className="group">
                
            </div> */}
        </div>
    );
}
export default Footer;