import React, {Component} from "react";
import story from "./story";

class Recap extends Component{
    constructor(props){
        super(props);
        this.state = {
            story: story("story"),
            headerArray: story("headers")
        }
    }

    render(){
        return(
            <div id="recap">
                {this.state.story.map((val, key) =>{
                    return(
                        <>
                            <header style={{ "box-shadow": `none`, "margin-top": "0"}}><h1>{val.actName}</h1></header>
                            <div id={val.actName} style={{"scroll-margin-top": "90px"}}></div>
                            {val.sessions.map((v2, k2) => {
                                return(
                                    <main className="sandwich" style={{ "box-shadow": `none`}}>
                                        <h2 id={v2.title} className="recapHeader">{v2.title}</h2>
                                        {v2.recap.split("\n").map((v3, k3) => {
                                            return(
                                            <>
                                                <p>{v3}</p>
                                            </>)
                                        })}
                                        <p className="stinger"><i>{v2.stinger}</i></p>
                                    </main>
                                )
                            })}
                            
                        </>
                    )
                })}
                <main className="sandwichEnd" style={{ "box-shadow": `none`}}>
                    <a href={"#" + this.state.headerArray[this.props.headerIndex % this.state.headerArray.length]}>
                        <button onClick={() => this.props.setHeaderIndex(this.props.headerIndex -1 < 0? 0: this.props.headerIndex -1)} id="prev">
                            <h2>&#60;&#60;</h2>
                        </button>
                    </a>

                    <button id="closeRecap" onClick={() => this.props.setRecapDisplay(false)}>
                        <h2>Close Recap</h2>
                    </button>

                    <a href={"#" + this.state.headerArray[this.props.headerIndex % this.state.headerArray.length]}>
                        <button onClick={() => this.props.setHeaderIndex(this.props.headerIndex +1)} id="next">
                            <h2>&#62;&#62;</h2>
                        </button>
                    </a>
                </main>
            </div>
        )
    }
}

export default Recap;