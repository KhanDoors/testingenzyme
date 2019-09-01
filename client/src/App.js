import React from "react";
import "./app.scss";
import Header from "./components/header";
import Headline from "./components/headline";

const tempArr = [
  {
    fName: "Joe",
    lName: "Shmo",
    email: "joeshmo@whocares.com",
    age: 99,
    onlineStatus: false
  }
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <section className="main">
          <Headline header="Posts" desc="Click the Button" tempArr={tempArr} />
        </section>
      </header>
    </div>
  );
}

export default App;
