import { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";

function Portrait(props){
    
    const [properties, setProperties] = useState(props.properties)
    // const [name, setName] = useState(props.properties.name);
    // const [pronouns, setPronouns] = useState(props.properties.pronouns);
    // const [description, setDescription] = props.properties.description;
    // const photo = props.properties.url;
    const [portraitDisplay, setPortraitDisplay] = useState(false);

    //this.changeName = this.changeName.bind(this)

    const changeName = () => {
        props.setDetails(properties);
    }    

    useEffect(() =>{
        setPortraitDisplay(true);
    }, [])

    return(
        <CSSTransition
            in={portraitDisplay}
            timeout={500}
            classNames="portraitAnim"
            unmountOnExit
            onEnter={() => setPortraitDisplay(true)}
            onExit={() => setPortraitDisplay(false)}>
            <div className="portrait">
                <div className="tint" onClick={changeName} />
                <div className="portrait-content">
                    <img src={properties.url} alt={properties.name}></img>
                </div>
            </div>
        </CSSTransition>
    );
    
}

export default Portrait;