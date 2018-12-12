import React, {Component} from 'react';
import './Navigation.css'

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {addClass: ""}
        this.handleClick = this.handleClick.bind(this);
        }

        handleClick = (menu) => {
            this.setState({
                addClass: menu
            });
        }

    render() {
        return(
            <div className="nav">
                <ul>
                    <li><a onClick={() => this.handleClick("")} 
                        className={this.state.addClass === "" ? "active" : ""}
                        href=".">HOME</a>
                    </li>
                    <li><a onClick={() => this.handleClick("#action")} 
                        className={this.state.addClass === "#action" ? "active" : ""} 
                        href="#action">ACTION</a>
                    </li>
                    <li><a onClick={() => this.handleClick("#sifi")} 
                        className={this.state.addClass === "#sifi" ? "active" : ""} 
                        href="#sifi">SiFi</a>
                    </li>
                    <li><a onClick={() => this.handleClick("#more")} 
                        className={this.state.addClass === "#more" ? "active" : ""} 
                        href="#more">MORE</a>
                    </li>
                </ul>
            </div>
        )
    }
};

export default Navigation;