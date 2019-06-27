import React from 'react';
import style from './header.css';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

const Header = () => {

    const logo = () =>
        (
            <Link to="/" className={style.logo}>
                <img alt="nba logo" src="/images/nba_logo.png" />
            </Link>
        )

    const navBars = () =>
        (
            <div className={style.bars}>
                <FontAwesome name="bars"
                    style={{
                        color: '#dfdfdf',
                        padding: '5px',
                        cursor: 'pointer',

                    }}
                />
            </div>
        )



    return (
        <header className={style.header}>
            <div className={style.headerOpt}>
                {navBars()}
                {logo()}
            </div>
        </header>

    )

}

export default Header;