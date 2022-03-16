import React, {Component} from "react";
import Portrait from "./Portrait";
import lib from "./lib.js";

class Grid extends Component{

    constructor(props){
        super(props);
        this.state = {
            portraits: null,
            selected: null,
            details: this.props.details,
            setDetails: this.props.setDetails,
            library: lib().Library
        }
    }

    makePortraits(array){
        var portraitsArray = []
        var readFrom = array
        for(var i=0; i<readFrom.length; i++){
                portraitsArray.push(<Portrait 
                    details={this.props.details}
                    setDetails={this.props.setDetails} 
                    properties={readFrom[i]}/>)
        }
        this.setState({portraits: portraitsArray})
        return portraitsArray;
    }

    componentDidMount(){
        this.makePortraits(this.state.library[0].characters);
    }

    render(){
        return(
        <div className="gridContainer">
            {this.state.library.map((val, key) => {
            return(<>
                    <h1 id={val.header}>{val.header}</h1>
                    <div className="grid">
                        {val.characters.map((v2, k2) => {
                            return(
                                <Portrait 
                                details={this.props.details}
                                setDetails={this.props.setDetails} 
                                properties={v2} />
                            )
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