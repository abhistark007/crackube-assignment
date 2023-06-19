import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import l1 from '../assets/l1.svg';
import l2 from '../assets/l2.svg';
import r1 from '../assets/r1.svg';
import r2 from '../assets/r2.svg';
import r3 from '../assets/r3.svg';
import r4 from '../assets/r4.svg';

function Header() {
  return (
    <div className='header'>
        <h1>We tackle interesting topics every day</h1>

        <div className="header__bottom">
            <div className="header__bottom__left">
                <SearchIcon/>
                <input type="text" placeholder='Find courses'/>
            </div>


            <div className="header__bottom__right">
                <div className="header__bottom__right__left">
                    <img src={l1} alt="vector 1" />
                    <img src={l2} alt="vector 2" />
                </div>

                <div className="header__bottom__right__right">
                    <img src={r1} alt="vector 1" />
                    <img src={r2} alt="vector 2" />
                    <img src={r3} alt="vector 3" />
                    <img src={r4} alt="vector 4" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header