import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [lokasi, setLokasi] = useState("Jakarta");
  const [lokasiLain, setLokasiLain] = useState("bogor");
  // console.log("lokasi === ", lokasi);

  useEffect(() => {
    console.log("lokasi === ", lokasi);
  }, [lokasi, lokasiLain]);

  useEffect(() => {
    console.log("lokasi lain === ", lokasiLain);
  }, []);

  return (
    <div className="App">
      <h1>Saya ingin ke {lokasi}</h1>
      <button onClick={() => setLokasi("Bandung")}>Bandung</button>
      <button onClick={() => setLokasi("Kuta")}>Kuta</button>

      <hr />

      <h1>Lokasi lain : {lokasiLain}</h1>
      <button onClick={() => setLokasiLain("bali")}>Bali</button>
      <button onClick={() => setLokasiLain("jakarta")}>Jakarta</button>
    </div>
  );
}

export default App;
