import "./App.css";
import { useState, useEffect, useRef } from "react";

function App() {
  const [nama, setNama] = useState("");
  useEffect(() => {
    console.log("Nama yang di inputkan: ", nama);
    if (nama.length < 3) {
      console.error("harus lebih dari 2 huruf");
    }
  }, [nama]);

  const onSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const formJSON = Object.fromEntries(formData.entries());
    console.log(formJSON);
  };

  return (
    <div className="App">
      <h1>Form React</h1>

      <hr />

      <form className="form" onSubmit={onSubmit}>
        <div>
          <label htmlFor="nama">Name Siswa</label>
          <input id="nama" value={nama} onChange={(e) => setNama(e.target.value)} />
          <div>Nama yang di input adalah {nama}</div>
          {nama.length > 0 && nama.length < 3 && (
            <div className="error" style={{ color: "red" }}>
              nama tidak boleh kurang dari 3
            </div>
          )}
        </div>
      </form>
    </div>
  );
}

export default App;
