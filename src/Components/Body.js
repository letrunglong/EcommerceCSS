import React, { Component } from 'react';
import { ReactComponent as StarRate } from '../Images/stars.svg';
import { ReactComponent as StarLow } from '../Images/starslow.svg';
import { ReactComponent as Arrow } from '../Images/arrows.svg';
import { ReactComponent as Aspirin } from '../Images/aspirin.svg';
import { ReactComponent as ArrowLeft } from '../Images/arrowleft.svg';

class OneProduct extends Component {
    renderStars() {
        let arrStars = [1, 2, 3, 4, 5]
        let data = arrStars.map((val, index) => {
            return <StarRate class="star op" />
        })
        return data;
    }
    render() {
        return (
            <div className={this.props.class}>
                <div className="aspirin_img"><Aspirin /></div>
                <div className="aspirin_rate">
                    {
                        this.renderStars()
                    }
                </div>
                <div className="aspirin_title">Nhãn hiệu thuốc 01</div>
                <div className="aspirin_price">
                    <a className="price1">150</a>
                    <div className="price2">100 ICB</div>
                </div>
                <button className="aspirin_button">Thêm vào giỏ hàng</button>
            </div>
        );
    }
}

class OneTitle extends Component {
    render() {
        return (
            <div className="item">
                <input type="checkbox" className="checkBox"></input>
                <a>{this.props.title}</a>
            </div>
        );
    }
}

class OneTitleCheck extends Component {
    render() {
        return (
            <label className="container">One
                <input type="checkbox" defaultChecked="checked" />
                <span className="checkmark" />
            </label>
        );
    }
}



class Body extends Component {
    renderItems() {
        let arrProduct = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
        let data = arrProduct.map((val, index) => {
            let isTop = index < 4 ? "top" : "";
            return <OneProduct class={"one_item " + isTop} />
        })
        return data;
    }
    render() {
        return (
            <div className="main">
                <div className="body_left">

                    {/* Danh muc san pham */}
                    <div className="product first">
                        <p className="title">DANH MỤC SẢN PHẨM</p>
                        <div className="search">
                            <input type="search" placeholder="Nhập tên danh mục" />
                            <div className="fa fa-search" />
                        </div>
                        <div className="product_list">
                            <div className="list_left">
                                <div className="item first">
                                    <input type="checkbox" className="checkBox"></input>
                                    <a>Chăm sóc cá nhân(3852)</a>
                                </div>
                                <OneTitle title="Hỗ trợ tim mạch(1015)" />
                                <OneTitle title="Chống lão hóa sớm(5900)" />
                                <OneTitle title="Hỗ trợ tiêu hóa (530)" />
                                <OneTitle title="Huyết áp (3852)" />
                                <OneTitle title="Hỗ trợ khớp (9852)" />
                                <OneTitle title="Trị bệnh 01 (6868)" />
                                <OneTitle title="Trị bệnh 02 (6868)" />
                                <OneTitle title="Trị bệnh 03 (6868)" />
                                <OneTitle title="Trị bệnh 04 (6868)" />
                                <OneTitle title="Trị bệnh 05 (6868)" />
                            </div>
                            <div className="list_right">
                                <div className="ke" />
                            </div>
                        </div>
                    </div>

                    {/* Danh muc nha cung cap */}

                    <div className="product">
                        <p className="title">DANH MỤC NHÀ CUNG CẤP</p>
                        <div className="search">
                            <input type="search" placeholder="Nhập tên danh mục" />
                            <div className="fa fa-search" />
                        </div>
                        <div className="product_list">
                            <div className="list_left">
                                <div className="item first">
                                    <input type="checkbox" className="checkBox"></input>
                                    <a>Trung tâm Y tế Số 1</a>
                                </div>
                                <OneTitle title="Trung tâm Y tế Số 2" />
                                <OneTitle title="Đại lý ICB Quận 1" />
                                <OneTitle title="Đại lý ICB Quận 2" />
                                <OneTitle title="Sức khỏe là vàng 01" />
                                <OneTitle title="Sức khỏe là vàng 02" />
                                <OneTitle title="Thực phẩm hỗ trợ chi nhánh 01" />
                                <OneTitle title="Thực phẩm hỗ trợ chi nhánh 02" />
                                <OneTitle title="Bệnh viện Từ Dũ" />
                                <OneTitle title="Bệnh viện Toàn Cầu" />
                                <OneTitle title="Đông y Bến Nghé - Quận 1" />
                            </div>
                            <div className="list_right">
                                <div className="ke" />
                            </div>
                        </div>
                    </div>

                    {/* Danh gia */}

                    <div className="product">
                        <p className="title">Đánh giá</p>
                        <div className="product_list rate">
                            <div className="rate5">
                                <a><StarRate className="star" /></a>
                                <a><StarRate className="star" /></a>
                                <a><StarRate className="star" /></a>
                                <a><StarRate className="star" /></a>
                                <a><StarRate className="star" /></a>
                                <div>(Từ 5 sao)</div>
                            </div>
                            <div className="rate4">
                                <a><StarRate className="star" /></a>
                                <a><StarRate className="star" /></a>
                                <a><StarRate className="star" /></a>
                                <a><StarRate className="star" /></a>
                                <a><StarLow /></a>
                                <div>(Từ 4 sao)</div>
                            </div>
                            <div className="rate3">
                                <a><StarRate className="star" /></a>
                                <a><StarRate className="star" /></a>
                                <a><StarRate className="star" /></a>
                                <a><StarLow className="star" /></a>
                                <a><StarLow /></a>
                                <div>(Từ 3 sao)</div>
                            </div>
                        </div>
                    </div>

                    {/* khung gia */}

                    <div className="product">
                        <p className="title">Khung giá sản phẩm</p>
                        <div className="product_list price">
                            <div className="_1m">1.000.000</div>
                            <div>99.000.000</div>
                            <div className="arrow"><Arrow className="arrowimg" /></div>
                        </div>
                    </div>

                    {/* Danh muc noi bat */}

                    <div className="product highlight">
                        <p className="title">Danh mục nổi bật</p>
                        <div className="product_list">
                            <div className="list_left">
                                <OneTitle title="Sản phẩm mới" />
                                <OneTitle title="Sản phẩm đạt doanh số cao" />
                                <OneTitle title="Sản phẩm đang giảm giá" />
                            </div>
                        </div>
                    </div>

                </div>

                {/* end body left */}


                <div className="body_right">
                    <div className="right_top">
                        {this.renderItems()}
                    </div>
                    {/* multipage */}
                    <div className="right_bot">
                        <div className="left">
                            <ArrowLeft className="arr_left" />
                            <p>Về đầu</p>
                        </div>
                        <div className="num">
                            <a className="active">1</a>
                            <a>2</a>
                            <a>3</a>
                            <a>4</a>
                            <a>5</a>
                            <a>6</a>
                        </div>
                        <div className="right left">
                            <p>Về cuối</p>
                            <ArrowLeft className="arr_right" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Body;