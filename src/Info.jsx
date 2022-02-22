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
                <div className="asideText">
                    <h1>{this.props.details.name}</h1>
                    <h3>{this.props.details.pronouns}</h3>
                    <p><i>{this.props.details.description}</i></p>
                    <img className="infoPortrait" alt="Wide character portrait" src={this.props.details.url || 
                    dargon} width="250px" height="250px" />
                </div>
            </aside>
        )
    }
}

export default Info;