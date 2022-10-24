import React from 'react';

import './hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container">
                <header className="header">
                    <a className="logo" href="#">
                        <img className="logo__img" src="src/assets/images/icons/logo.svg" alt="логотип"/>
                        <span className="logo__description">Dreamkam tour</span>
                    </a>

                    <nav className="menu">
                        <ul className="menu__list">
                            <li className="menu__item">
                                <a className="menu__link" href="#">
                                    Расписание тура
                                </a>
                            </li>
                            <li className="menu__item">
                                <a className="menu__link" href="#">
                                    Как записаться
                                </a>
                            </li>
                            <li className="menu__item">
                                <a className="menu__link" href="#">
                                    Команда
                                </a>
                            </li>
                        </ul>
                    </nav>

                    <button className="button">Забронировать</button>
                </header>
            </div>
        </section>
    );
};

export default Hero;