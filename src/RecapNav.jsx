function RecapNav(props) {

    var headerArray = [];
    var actArray = Array.from(new Set(props.recapData.map(session => session.act)));
    var sessionArray = props.recapData;
    actArray.forEach(act => {
        headerArray.push(act);
        sessionArray.forEach(session => {
            if(session.act === act){
                headerArray.push(session.title);
            }
        })
    })

    function updateHeaderVal(e){
        return headerArray.indexOf(e.target.innerText);
    }
    
    return(
        <aside id="recapNav">
            <h2>Navigation</h2>
            <ul style={{"padding": "0", "margin": "0", "marginTop": "10px"}}>
            {Array.from(new Set(props.recapData.map(item => item.act))).map((act) =>{
                return(
                    <div key={act}>
                        <a key={act} href={"#" + act} onClick={updateHeaderVal}>
                            <li key={act}>{act}</li>
                        </a>
                        <ul key={act + "List"}>
                        {props.recapData.map(session => {
                            if(session.act === act){
                                return(
                                    <a key={session.title} href={"#" + session.title}>
                                        <li key={session.title} onClick={updateHeaderVal}>{session.title}</li>
                                    </a>
                                )
                            } else {
                                return "";
                            }
                        })}
                        </ul> 
                    </div>
                )
            })}
            </ul>
        </aside>
    )
}

export default RecapNav;