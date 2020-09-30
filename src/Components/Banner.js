import React, { Component } from 'react';
import BannerImage from '../Images/banner.svg';

class Banner extends Component {
    render() {
        return (
            <div className="banner">
                <img src={BannerImage} alt="banner"/>
            </div>
        );
    }
}

export default Banner;