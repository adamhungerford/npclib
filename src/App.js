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
          <a href="http://edsite.black">
            <button>
              <h1>Return to EDSITE</h1>
            </button>
          </a>
        </footer>
    </div>
  );
}

export default App;
