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
                {/* <h1>ACT 1: WIDESEAL</h1>

                <h2>Session 0: The Eternal Burning</h2>
                Ten years ago, the world exploded. A cataclysmic firestorm called the Eternal Burning, or the Burning for short, razed most of civilization to the ground. The few cities that survived became authoritarian, walled-off settlements. You are refugees living in Wideseal, a recently-established safe haven. Wideseal provides safety from the dragons and other threats, but its nascency means most citizens are forced to work hard labor for long hours to keep the settlement running. While the dragons pose a constant threat, the city also suffers sabotage from within by the eschatological cults which have sprung up since the Burning began. Can you avoid the ire of the Wideseal lawmages, keep yourself out of the scuffles between the cults, and dodge deadly dragonfire - all while trying to make ends meet?
                
                <h2>Session 1: Aphids</h2>
                Morning dawns on Wideseal as Gal is coaxed out of bed with the help of the egg of the Wideseal Ostrich. On her way out to work, she is stopped by the foreman Guido Pilter, who suspects her of sneaking out of camp the other night. Gal denies the allegations.
                <br></br>Meanwhile, Piper is set to work in the farms, watching flurgroot grow. As she notices a flurgroot aphid lurking, she sets out to kill it, inadvertently zapping a number of flurgroots around it. She brings this to the attention of Enmides Brook, the captain of the guard in Raidyll, who has business with Guido. Piper follows Enmides a ways, until he and Guido disappear into the Wideseal Enigma.
                <br></br>Meanwhile, the Mariner receives tell of a meeting tonight from Nadir, and also notices Enmides and Guido talking. Guido looks apprehensive.
                <br></br>Later, Piper is informed of the Mariners meeting as Gal is approached by Enmides, who scouts her for an opportunity that he claims will make the people of Wideseal much safer. Gal is instructed to retrieve some supplies from the infirmary, and on her way back spots a tent peg askew. While Gal follows Enmides deeper into the Enigma, Piper and the Mariner are tasked with destroying the dossier the lawmages are putting together on the Mariners. 
                <br></br>
                <i>Gourds include the fruits of some flowering plant species in the family Cucurbitaceae, particularly Cucurbita and Lagenaria. The term refers to a number of species and subspecies, many with hard shells, and some without.</i>
                
                <h2>Session 2: The Wideseal Enigma</h2>
                As the sun sets and the night begins, Piper and the Mariner stake out the Enigma. They are eventually able to sneak in despite Guido's best efforts. Meanwhile, Enmides leads Gal down the right-hand path to reveal a suit of mechanical armor - the Gradian Gourd. Unbeknownst to Enmides, Gal hears a voice in her head calling for help.
                <br />The pair of Mariners make a short trip down the left-hand path before electing instead to also use the right-hand path. After a pitched battle against some harmless targets, they are discovered by Enmides and Gal. The Mariner hears a voice calling for help.
                <br />Piper does some quick fibbing to convince Enmides that they were following someone else who snuck in without permission. The four of them agree that if anyone did sneak in, they would be in or near the records room. After opening the lock, Piper hears a voice calling for help outside of the Enigma.
                <br />Piper heads outside and is just barely able to see the huge form of a pink dragon locked in battle with something on the other side of the Enigma. It crashes against the side of the building, and Gal, the Mariner, and Enmides watch as the power goes out...
                <br />
                <i>Paleontology, also spelled palaeontology or palæontology, is the scientific study of life that existed prior to, and sometimes including, the start of the Holocene epoch.</i>

                <h2>Session 3: Emergency Power</h2>
                The emergency power within the Wideseal Enigma kicks in as Enmides, Gal, and the Mariner are confronted by a berserk Gradian Gourd. They are able to hold it off until it crashes through the wall and absconds.
                <br />Piper, outside, scales the wall surrounding Wideseal and hops down, hurrying towards the fight outside the Enigma. Donning a quick magical disguise, Piper turns the dragon invisible, claiming to the Platoon to have stolen its soul. (Astonishingly, they believe her.)
                <br />Meanwhile, Enmides storms out of the Enigma, as the Gourd charges into the horizon. Neither Enmides nor the rest of the Platoon can find Piper, and the emerging Mariner and Gal cannot catch up to the Gourd.
                <br />A concerned Enmides elects to deputize our heroes, so as not to stretch the Platoon so thin, and promises to give them badges and a mission tomorrow at 8.
                <br />Finally attending to the task at hand, the Mariner and Piper return to the records room and destroy the files relating to the Mariners. Silt chides them for getting so close to Enmides, but they assure him the situation remains advantageous.
                <br />
                <i>Petroleum, also known as crude oil and oil, is a naturally occurring, yellowish-black liquid found in geological formations beneath the Earth's surface.</i>
            
                <h1>ACT 2: DEPUTIES</h1>

                <h2>Session 4: Marshals of the Minerals</h2>
                Many of Wideseal spend the remainder of the day by cleaning up the mess left by the skirmish. As Gal clears up debris, she is approached by Guido (along with the smith's apprentice Aarthi Khatri). Guido makes an elaborate apology for suspecting Gal of treason, granting her his (extremely rusty) family wrench. Guido also mentions the disappearance of Zeereth Vrinn, Gal's and Piper's mutual friend. 
                <br />Meanwhile, the Mariner meets Puddle, a new Mariner. Puddle is a huge fan of the comparatively more seasoned Mariner, despite their best efforts to shake him off. 
                <br />Over at the farms, Silt and Piper discuss recent events. Silt still isn't so sure about deputization, but concedes that if the Mariner is going along with it, it must be fine. 
                <br />The next morning, Enmides outlines our heroes' first job (and wakes Gal up courtesy of the egg of the Wideseal Ostrich). The Gyle Oil Well has been experiencing subtle acts of sabotage - the party is to find out who is responsible and to stop them. (They are also to retrieve one vial of Gyle Oil.) The kahmogi Gyle twins greet the party at the door, though they seem somewhat hostile to each other. Arle Gyle, the mechanic, hands the party off to her brother Lyster (the bookkeeper), who leads them on the tour. Along the way, a troubled Lyster explains the situation - each Gyle suspects the other of sabotage, and mysterious scorch marks have started to appear around the building. 
                <br />In the gift shop, the party convinces Lyster to talk to his sister openly, but he returns as quickly as he went with terrible news: Arle has mysteriously fallen unconscious!
                <br />
                <i>Because chameleons are ectothermic, another reason why they change colour is to regulate their body temperatures, either to a darker colour to absorb light and heat to raise their temperature, or to a lighter colour to reflect light and heat, thereby either stabilizing or lowering their body temperature.</i> */}
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
                                        <p><i>{v2.stinger}</i></p>
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