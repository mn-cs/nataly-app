import React from 'react';
import style from './Body.module.scss';

const Body = () => {
    return  (
        <div className={style.body}>
            <div className={style.group}>
                <div className={style.img}>image</div>
                <div className={style.text}>text</div>
            </div>
            <div className={style.group}>
                <div className={style.img}>image</div>
                <div className={style.text}>text</div>
            </div>
            <div className={style.group}>
                <div className={style.img}>image</div>
                <div className={style.text}>text</div>
            </div>
        </div>
    );
}
export default Body;