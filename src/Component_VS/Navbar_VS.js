import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <div>
              {/* ======= Header/Navbar ======= */}
              <nav className="navbar navbar-default navbar-trans navbar-expand-lg fixed-top">
                <div className="container">
                  <button
                    className="navbar-toggler collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarDefault"
                    aria-controls="navbarDefault"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span />
                    <span />
                    <span />
                  </button>

                  <a className="navbar-brand text-brand" href="/">
                    <span className="color-b">Đại Lý Bất Động Sản</span>
                  </a>
                  <button
                    type="button"
                    className="btn btn-link nav-search navbar-toggle-box-collapse d-md-none"
                    data-toggle="collapse"
                    data-target="#navbarTogglerDemo01"
                    aria-expanded="false"
                  >
                    <span className="fa fa-search" aria-hidden="true" />
                  </button>
                  <div
                    className="navbar-collapse collapse justify-content-center"
                    id="navbarDefault"
                  >
                    <ul className="navbar-nav">
                      <li className="nav-item"><Link to={"/"}>
                        <a className="nav-link active" href="/">Trang Chủ
                        </a></Link>
                      </li>

                      <li className="nav-item">
                        <a className="nav-link" href="about">
                          Thông Tin 
                        </a>
                      </li>
                      <li className="nav-item"><Link to={"/List"}>
                        <a className="nav-link" href="property-grid">
                          Nhà Đất
                        </a></Link>
                      </li>
                      <li className="nav-item"><Link to={"/Details"}>
                        <a className="nav-link" href="blog-grid.html">
                          Blog
                        </a></Link>
                      </li>
                      <li className="nav-item dropdown">
                        <a
                          className="nav-link dropdown-toggle"
                          href="#"
                          id="navbarDropdown"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Trang Liên Quan
                        </a>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="navbarDropdown"
                        >
                          <a
                            className="dropdown-item"
                            href="property-single.html"
                          >
                            Thông Tin Nhà Đất
                          </a>
                          <a className="dropdown-item" href="blog-single.html">
                            Blog 
                          </a>
                          <a className="dropdown-item" href="agents-grid.html">
                            Mạng Lưới Doanh Nghiệp
                          </a>
                          <a className="dropdown-item" href="agent-single.html">
                            Thông Tin Doanh Nghiệp
                          </a>
                        </div>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="contact.html">
                          Liên Hệ
                        </a>
                      </li>
                    </ul>
                  </div>
                  <button
                    type="button"
                    className="btn btn-b-n navbar-toggle-box-collapse d-none d-md-block"
                    data-toggle="collapse"
                    data-target="#navbarTogglerDemo01"
                    aria-expanded="false"
                  >
                    <span className="fa fa-search" aria-hidden="true" />
                  </button>
                </div>
              </nav>
              {/* End Header/Navbar */}
            </div>
        );
    }
}
