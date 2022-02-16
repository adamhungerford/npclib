import React, {Component} from "react";
import placeholder from "./placeholder.png"

class Grid extends Component{
    render(){
        return(
        <>
            <div className="grid">
                <div className="portrait">
                    <div className="portrait-content">
                        <img src={placeholder}></img>
                    </div>
                </div>
                <div className="portrait">
                    <div className="portrait-content">
                        <img src={placeholder}></img>
                    </div>
                </div>
                <div className="portrait">
                    <div className="portrait-content">
                        <img src={placeholder}></img>
                    </div>
                </div>
                <div className="portrait">
                    <div className="portrait-content">
                        <img src={placeholder}></img>
                    </div>
                </div>
                <div className="portrait">
                    <div className="portrait-content">
                        <img src={placeholder}></img>
                    </div>
                </div>
            </div>
        </>
        );
    }
}

export default Grid;