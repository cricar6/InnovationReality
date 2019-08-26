import React, {Component} from 'react';
import {Link} from "react-router-dom";

import "./Menu.sass";

export class Menu extends Component {
    render () {
        return <div className="menu">
            <Link to="/postit">
                <div className="menu__main-button">
                    <div className="menu__main-button__icon">

                    </div>
                    <div className="menu__main-button__label">
                        Registrar
                    </div>
                </div>
            </Link>
        </div>
    }
}