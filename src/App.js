import { useState } from 'react';
import Grid from './Grid';
import Header from './Header';
import Info from './Info';
import Recap from './Recap.jsx';
import { CSSTransition } from "react-transition-group";
import RecapNav from './RecapNav';

function App() {

  const [details, setDetails] = useState("");
  const [recapDisplay, setRecapDisplay] = useState(false);

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
          onExit={() => setRecapDisplay(false)}>
          <Recap setRecapDisplay={setRecapDisplay}/>
        </CSSTransition>

        <CSSTransition
          in={recapDisplay}
          timeout={200}
          classNames="recap"
          unmountOnExit
          onEnter={() => setRecapDisplay(true)}
          onExit={() => setRecapDisplay(false)}>
            <RecapNav />
          </CSSTransition>

        <Info details={details}/>
        <main>
          <Grid details={details} setDetails={setDetails} />
        </main>    
        <footer>
        <a href="https://www.flaticon.com/free-icons/dragon" 
        title="dragon icons">Dragon favicon created by Freepik - Flaticon</a> | <a 
        href="http://edsite.black">Return to EDSITE</a>
        <br />"Superstition Mountain, Apache Trail, Arizona (no.1), 1929" by George Elbert Burr
        </footer>
    </div>
  );
}

export default App;
