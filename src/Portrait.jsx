import { Component } from "react";

class Portrait extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: this.props.properties.name,
            pronouns: this.props.properties.pronouns,
            description: this.props.properties.description,
            photo: this.props.properties.url,
        }
        this.changeName = this.changeName.bind(this)
    }

    changeName(){
        this.props.setDetails(this.props.properties);
    }    

    render(){
        return(
            <div className="portrait">
                <div className="tint" onMouseOver={this.changeName} />
                <div className="portrait-content">
                    <img src={this.state.photo} alt={this.state.name}></img>
                </div>
            </div>
        );
    }
}

export default Portrait;