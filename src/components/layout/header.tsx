import React from "react";
import './header.css';
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const goBack = (event: React.MouseEvent<HTMLElement>) => {
        navigate("/");
    };
    const goToAbout = (event: React.MouseEvent<HTMLElement>) => {
        navigate("/about");
    };

    return (
        <header>
            <div className="header">
                <div className="header__element--title">
                    <h1>Minimal</h1>
                </div>
                <div className="header__element--container">
                    <div className="header__element">
                        <button className="header__btn" onClick={goToAbout}>about</button>
                    </div>
                    <div className="header__element">
                        <button className="header__btn">developer</button>
                    </div>
                    <div className="header__element">
                        <button className="header__btn">plans</button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;