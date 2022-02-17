import { useState } from 'react';
import Grid from './Grid';
import Header from './Header';
import Info from './Info';

function App() {

  const [details, setDetails] = useState("");

  return (
    <div className="App">
      <Header />
      <main>
        <Grid details={details} setDetails={setDetails} />
      </main>
      <footer></footer>
      <Info details={details} setDetails={setDetails}/>
    </div>
  );
}

export default App;
