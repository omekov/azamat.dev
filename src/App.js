import React from 'react'
import Header from './component/header'
import Headline from './component/headline'
import './app.scss'
function App() {
  return (
    <div data-test="AppComponent">
      <Header></Header>
      <section className="main">
        <Headline header="Posts" desc="Click the button to render posts!" />
      </section>
    </div>
  );
}

export default App;
