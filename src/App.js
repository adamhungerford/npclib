import { useEffect, useState } from 'react';
import Grid from './Grid';
import Header from './Header';
import Info from './Info';
import Recap from './Recap.jsx';
import { CSSTransition } from "react-transition-group";
import RecapNav from './RecapNav';

function App() {

  const [headerIndex, setHeaderIndex] = useState(0);
  const [details, setDetails] = useState("");
  const [recapDisplay, setRecapDisplay] = useState(false);

  const [charData, setCharData] = useState([]);
  const [recapData, setRecapData] = useState(false);

  useEffect(() => { 
    fetch("https://gradia.edsite.black/api/characters")
      .then((res) => res.json())
      .then((json) => {
        setCharData(json);
      })

    fetch("https://gradia.edsite.black/api/story")
      .then((res) => res.json())
      .then((json) => {
        setRecapData(json);
      })
    }, []);

  return (
    <div className="App">
        <Header />

          <div className="toggleContainer">
              <aside id="recapToggle" onClick={() => setRecapDisplay(true)}>
                <h3>Recap</h3>
              </aside>
          </div>
        
        <CSSTransition 
          in={recapDisplay} 
          timeout={200} 
          classNames="recap"
          unmountOnExit
          onEnter={() => setRecapDisplay(true)}
          onExit={() => (setRecapDisplay(false), setHeaderIndex(0))}>
            <Recap headerIndex={headerIndex} setHeaderIndex={setHeaderIndex} setRecapDisplay={setRecapDisplay} recapData={recapData}/>
        </CSSTransition>

        <CSSTransition
          in={recapDisplay}
          timeout={200}
          classNames="recap"
          unmountOnExit
          onEnter={() => setRecapDisplay(true)}
          onExit={() => setRecapDisplay(false)}>
            <RecapNav headerIndex={headerIndex} setHeaderIndex={setHeaderIndex} recapData={recapData} />
          </CSSTransition>

        <Info details={details}/>
        <main>
          <Grid details={details} setDetails={setDetails} charData={charData} />
        </main>    
        <footer>
        <a href="https://www.flaticon.com/free-icons/dragon" 
        title="dragon icons">Dragon favicon created by Freepik - Flaticon</a> <!--| <a 
        href="http://edsite.black">Return to EDSITE</a>-->
        {/* <br />"Superstition Mountain, Apache Trail, Arizona (no.1), 1929" by George Elbert Burr */}
        </footer>
    </div>
  );
}

export default App;
