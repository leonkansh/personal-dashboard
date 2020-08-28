import React from 'react';
import './App.css';

import Weather from "./Weather";
import News from "./News";
import ToDo from "./ToDo";
// import Covid from "./Covid";
import Covid2 from "./Covid2";


function App() {
  return (
    <main>
      <h1>Greetings, Leon</h1>
      <Weather />
      <section>
        <div>
          <h3>Latest headlines</h3>
          <News />
        </div>
        <div>
          <h3>Today's Agenda</h3>
          <ToDo />
        </div>
        <div id="cases">
          <h3>Cases in the US</h3>
          <p id="root"></p>
          {/* <Covid/> */}
          <Covid2 />
        </div>
      </section>
    </main>
  );
}

export default App;