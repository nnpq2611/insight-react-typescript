import React from 'react';
import logo from '../assets/images/insightlogo.png';

const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <ul>
                    <li className="nav-item">
                        <div className="logo-insight">
                        <img src={logo} alt="logo-insight" />
                        {/* <img src = "../assets/images/insightlogo.png" alt = "logo-insight" /> */}
                        </div>
                    </li>
                    <li>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <div className="navbar-nav">
                                <ul className="nav-item">
                                    <li className="nav-item">
                                        <button className="btn">
                                            <i className="fa-light fa-home"></i>
                                            <span>Trang chủ</span>
                                        </button>
                                    </li>
                                    <li className="nav-item">
                                        <button className="btn">
                                            <i className="fa-light fa-home"></i>
                                            <span>Quản lý vé</span>
                                        </button>
                                    </li>
                                    <li className="nav-item">
                                        <button className="btn">
                                            <i className="fa-light fa-home"></i>
                                            <span>Đổi soát vé</span>
                                        </button>
                                    </li>
                                    <li className="nav-item">
                                        <button className="btn">
                                            <i className="fa-light fa-home"></i>
                                            <span>Cài đặt</span>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>                                
                    </li>
                    
                </ul>
                
            </div>
            {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <form className="d-flex" role="search">
                    <input className="form-control fst-italic me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <i className="fa-regular fa-magnifying-glass"></i>
                </form>
            </div>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <i className="fa-light fa-envelope"></i>
                    </li>
                    <li className="nav-item">
                        <i className="fa-light fa-bell"></i>
                    </li>
                    <li className="nav-item ortrait">
                   
                    </li>
                </ul>
            </div>             */}
        </nav>
    </div>
  )
}

export default Navbar
