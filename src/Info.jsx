import { Component } from "react";
import dargon from "./dargon.png";

class Info extends Component{

    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        return(
            <aside id="info">
                <h1>{this.props.details.name}</h1>
                <h3>{this.props.details.pronouns}</h3>
                <p><i>{this.props.details.description}</i></p>
                <div className="fade"></div>
                <img className="infoBackground" src={this.props.details.url || 
                dargon} width="400px" height="400px" />
            </aside>
        )
    }
}

export default Info;