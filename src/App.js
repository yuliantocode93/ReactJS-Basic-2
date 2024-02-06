import "./App.css";
import { useState, useEffect, useRef } from "react";

function App() {
  const headingRef = useRef();
  const imputRef = useRef();
  const [lokasi, setLokasi] = useState("Jakarta");

  useEffect(() => {
    console.log("lokasi === ", lokasi);
    console.log("heading", headingRef.current);
    headingRef.current.textContent = `Saya ingin ke jawa`;

    console.log("h1 height === ", headingRef.current.clientHeight);
    console.log("h1 className === ", headingRef.current.className);
    console.log("h1 ID === ", headingRef.current.id);
  }, [lokasi]);

  return (
    <div className="App">
      <h1 id="ini-h1" className="ini-class-name" ref={headingRef}>
        Saya ingin ke {lokasi}
      </h1>

      <hr />

      <input ref={imputRef} />
      <button onClick={() => imputRef.current.focus()}>Focus</button>
    </div>
  );
}

export default App;
