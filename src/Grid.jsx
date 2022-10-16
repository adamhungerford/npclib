import React, {Component} from "react";
import Portrait from "./Portrait";
import lib from "./lib.js";

class Grid extends Component{

    constructor(props){
        super(props);
        this.state = {
            selected: null,
            details: this.props.details,
            setDetails: this.props.setDetails,
            library: lib().Library
        }
    }

    componentDidMount(){
    }

    render(){
        return(
        <div className="gridContainer">            
            {Array.from(new Set(this.props.charData.map((character) => character.affiliation))).map((affiliation) => {
                return(
                    <>                    
                        <h1>{affiliation}</h1>
                        <div className="grid">
                            {this.props.charData.map((character) => {
                                if(affiliation == character.affiliation){
                                    return(
                                        <Portrait properties={character} details={this.props.details} setDetails={this.props.setDetails}/>
                                    )
                                }
                            })}
                        </div>
                    </>
                )
            })}
        </div>
        );
    }
}

export default Grid;