import React from 'react';
import data from '../data.json';

const Header = () => {
    const { logo, navLinks, buttonText } = data.header;

    return (
        <header>
            <div className="container">
                <nav className="navbar navbar-expand-md ">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="logo" className="img-fluid" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            {navLinks.map((link, index) => (
                                <li className="nav-item" key={index}>
                                    <a className="nav-link" href="#">{link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="header-custom-btn-box">
                        <a href="#" className="custum-btn">
                            {buttonText}
                            <span className="icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    strokeWidth="1.5" stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                                </svg>
                            </span>
                        </a>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;