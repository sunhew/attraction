import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { headerMenus } from '../../data/header';

const Header = (hideMenu) => {
    const [checkedIndex, setCheckedIndex] = useState(null);
    const navigate = useNavigate();

    const handleDivClick = (index, url) => {
        setCheckedIndex(index);
        navigate(url);
    };

    const handleButtonClick = () => {
        navigate('/producerpik'); // 경로를 소문자로 통일
    };

    return (
        <header id="header" role="banner">
            <div className="header__upbutn">
                <button onClick={handleButtonClick}>제작자 픽</button>
            </div>
            <h1 className="header__logo">
                <a href="/">
                    <span>coffeemenu</span>
                </a>
            </h1>
            
            <nav className="header__menu">
                <ul className="menu container">
                    {headerMenus.map((menu, key) => (
                        <li key={key} className="menu-item">
                            <div
                                className={`menu-link ${checkedIndex === key ? 'checked' : ''}`}
                                onClick={() => handleDivClick(key, menu.src)}
                            >
                                <div className={`check__icon ${checkedIndex === key ? 'checked' : ''}`}>
                                    <span className={`indicator ${checkedIndex === key ? 'On' : ''}`}></span>
                                </div>
                                <span className="menu-title">{menu.title}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;