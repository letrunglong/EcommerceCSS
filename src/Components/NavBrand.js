import React, { Component } from 'react';
import { ReactComponent as Clinic } from '../Images/Logo/clinic.svg';
import Siri from '../Images/Logo/sri.svg';
import { ReactComponent as ReViva } from '../Images/Logo/reviva.svg';
import { ReactComponent as Senior } from '../Images/Logo/senior.svg';
import { ReactComponent as Lab } from '../Images/Logo/lab.svg';
import { ReactComponent as Ita } from '../Images/Logo/ita.svg';
import { ReactComponent as Arrow } from '../Images/arrowleft.svg';


class NavBrand extends Component {
    render() {
        return (
            <div className= "nav_brand">
                <div className="brand_list">
                    <Arrow className="side _01"/>
                    <Clinic/>
                    <img src = {Siri} alt="sri"/>
                    <ReViva/>
                    <Senior/>
                    <Lab/>
                    <Ita/>
                    <Arrow className="side _02"/>
                </div>
            </div>
        );
    }
}

export default NavBrand;