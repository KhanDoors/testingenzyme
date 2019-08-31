import React from "react";
import "./app.scss";
import Header from "./components/header";
import Headline from "./components/headline";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <section className="main">
          <Headline header="Posts" desc="Click the Button" />
        </section>
      </header>
    </div>
  );
}

export default App;
