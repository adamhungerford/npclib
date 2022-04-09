import { useState } from "react";
import story from "./story";

function RecapNav (headerIndex, setHeaderIndex) {

    const [headerArray] = useState(story("story"));

    function updateHeaderVal(e){
        if(e.target.innerText.includes("Act")){
            var actIndex = headerArray.findIndex(
                function(header) {
                    return header.actName === e.target.innerText
                }
            )
            var wantedTitle = headerArray[actIndex].sessions[0].title;
            headerIndex.setHeaderIndex(story("headers").indexOf(wantedTitle));


        } else {
            headerIndex.setHeaderIndex(story("headers").indexOf(e.target.innerText));
        }
    }
    
    return(
        <aside id="recapNav">
            <h2>Navigation</h2>
            <ul style={{"padding": "0", "margin": "0", "margin-top": "10px"}}>
            {headerArray.map((val, key) =>{
                return(
                    <>
                        <a href={"#" + val.actName} onClick={updateHeaderVal}>
                            <li>{val.actName}</li>
                        </a>
                        <ul>
                        {val.sessions.map((v2, k2) => {
                            return(
                                <a href={"#" + v2.title}>
                                    <li onClick={updateHeaderVal}>{v2.title}</li>
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

export default RecapNav;