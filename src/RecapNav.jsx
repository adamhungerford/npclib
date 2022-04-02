import { Component } from "react";
import story from "./story";

class RecapNav extends Component{
    constructor(props){
        super(props);
        this.state = {
            headerArray: story("story")
        }
    }


    componentDidMount(){
        console.log(this.state.headerArray);
    }

    render(){
        return(
            <aside id="recapNav">
                <h2>Navigation</h2>
                <ul style={{"padding": "0", "margin": "0", "margin-top": "10px"}}>
                {this.state.headerArray.map((val, key) =>{
                    return(
                        <>
                            <a href={"#" + val.actName}>
                                <li>{val.actName}</li>
                            </a>
                            <ul>
                            {val.sessions.map((v2, k2) => {
                                return(
                                    <a href={"#" + v2.title}>
                                        <li>{v2.title}</li>
                                    </a>
                                )
                            })}
                            </ul> 
                        </>
                    )
                })}
                </ul>
            </aside>
        )
    }
}

export default RecapNav;