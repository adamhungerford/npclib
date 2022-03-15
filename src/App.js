import { useState } from 'react';
import Grid from './Grid';
import Header from './Header';
import Info from './Info';

function App() {

  const [details, setDetails] = useState("");

  return (
    <div className="App">
        <Header />
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
