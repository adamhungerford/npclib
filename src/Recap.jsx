import React, {Component} from "react";
import story from "./story";

class Recap extends Component{
    constructor(props){
        super(props);
        this.state = {
            story: story().Story,
        }
    }

    render(){
        return(
            <div id="recap">
                <button id="closeRecap" onClick={() => this.props.setRecapDisplay(false)}>X</button>
                {this.state.story.map((val, key) =>{
                    return(
                        <>
                            <header style={{ "box-shadow": `none`, "margin-top": "0"}}><h1 id={val.actName}>{val.actName}</h1></header>
                            {val.sessions.map((v2, k2) => {
                                return(
                                    <main className="sandwich" style={{ "box-shadow": `none`}}>
                                        <h2 id={v2.title}>{v2.title}</h2>
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
                                <button onClick={() => this.props.setRecapDisplay(false)}>
                                    <h2>Close Recap</h2>
                                </button>
                            </main>
                
            </div>
        )
    }
}

export default Recap;