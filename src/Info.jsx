import { Component } from "react";

class Info extends Component{

    constructor(props){
        super(props);
        this.state = {}
    }

    discoverSrc(details){
        console.log(details);
        if(details === "" || details === null || details === undefined ){
            return(<></>);
        } else {
            return(<aside id="info">
            <div className="asideText">
                <h1>{details.name}</h1>
                <h3>{details.pronouns}</h3>
                <p><i>{details.description}</i></p>
                <img src={details.url} alt={details.name} 
                    className="infoPortrait" width="250px" height="250px"></img>
            </div>
        </aside>);
        }
    }

    render(){
        return(
            <>
                {this.discoverSrc(this.props.details)}
            </>
        )
    }
}

export default Info;