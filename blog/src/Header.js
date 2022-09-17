import React from 'react';
import './Header.css';

function Header() {
    return (
        <div className='header'>
            <img className='header_logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png'></img>

            <div className='header_search'>
                <input className='header_earchInput' type="text"></input>
            </div>
            <div className='header_nav'>
                <div className='header_option'>
                    <span className='header_optionLineOne'>안녕하세요 </span>
                    <span className='header_optionLineOne'>로그인하기</span>
                </div>

                <div className='header_option'>
                    <span className='header_optionLineOne'>돌아가기 </span>
                    <span className='header_optionLineOne'>주문내역</span>

                </div>

                <div className='header_option'>
                    <span className='header_optionLineOne'>반가워요 </span>
                    <span className='header_optionLineOne'>하이하이</span>

                </div>
            </div>
        </div>

    );
}

export default Header;