import Hero from "./components/Hero";
import Demo from "./components/Demo";
import "./App.css";

function App() {
  return (
    <main>
      <div className="main">
        <div className="main-gradient animation:spin 1s infinite" />
      </div>

      <div className="app">
        <Hero />
        <Demo />
      </div>
    </main>
  );
}

export default App;
