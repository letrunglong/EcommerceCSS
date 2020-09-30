import React, { Component } from 'react';
import {ReactComponent as ReactLogo} from '../Images/logo.svg';
import {ReactComponent as CartLogo} from '../Images/cart.svg';
import {ReactComponent as LoginImage} from '../Images/login.svg';

class Header extends Component {
    render() {
        return (
            <div className="nav">
                    <div className="image">
                    <ReactLogo/>
                </div>
                <div className="search">
                    <a href ="#">
                    <input type="search" placeholder="Tìm kiếm sản phẩm" />
                    <div className="fa fa-search"></div>
                    </a>
                </div>
                <div className="new">
                    <a href="#">ICB NEWS</a>
                </div>
                <div className="cart">
                    <CartLogo className = "cartlogo"/>
                    <p>Vào giỏ hàng</p>
                </div>
                <div className="log">
                    <LoginImage className= "imgLogin"/>
                    <p>Đăng ký/Đăng nhập</p>
                </div>
            </div>
        );
    }
}

export default Header;