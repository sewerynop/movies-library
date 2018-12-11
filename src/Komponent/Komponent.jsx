import React, {Component} from 'react';

class Komponent extends Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
        this.handleClick = this.handleClick.bind(this);
    }

    // changeText(event) {
    //     this.setState({
    //         name: event.target.value,
            
    //     });
    // }

    handleClick(){
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    render() {
        return(
            <div>
                <p>Komponent</p>
                <label htmlFor="name">Enter Text</label>
                <input type="text" id="name"/>
                <h3></h3>
                <ul>
                    <li><a onClick={this.handleClick} 
                        className={this.state.isToggleOn ? "active" : "" } 
                        href="#adresss">ADRESSS</a>
                    </li>
                    <li><a onClick={this.handleClick} 
                        className={this.state.isToggleOn ? "" : "active" } 
                        href="#next-adress">NEXT-ADRESS</a>
                    </li>
                </ul>

            </div>
        )
    };
}
export default Komponent;