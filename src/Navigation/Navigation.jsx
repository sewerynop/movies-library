import React, {Component} from 'react';
import './Navigation.css'

class Navigation extends Component {
    render() {
        return(
            <div className="nav">
            <ul>
                <li><a href=".">HOME</a></li>
                <li><a href=".">ACTION</a></li>
                <li><a href=".">SiFi</a></li>
                <li><a href=".">MORE</a></li>
            </ul>
            </div>
        )
    }
};
export default Navigation;