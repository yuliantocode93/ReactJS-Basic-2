import "./App.css";
import { useState, useEffect, useRef } from "react";

function App() {
  const [profile, setProfile] = useState(null);

  const fetchDataProfile = async () => {
    const response = await fetch("https://api.github.com/users/yuliantocode93");
    const data = await response.json();
    setProfile(data);
  };
  useEffect(() => {
    // fetch("https://api.github.com/users/yuliantocode93")
    //   .then((response) => response.json())
    //   .then((data) => setProfile(data));

    fetchDataProfile();
  }, []);

  if (!profile) {
    return "Loading...";
  }
  return (
    <div className="App">
      <h1>Data Fetching</h1>

      <hr />
      <div>nama : {profile.name}</div>
      <div>
        <img src={profile.avatar_url} />
      </div>
      <div>lokasi : {profile.location}</div>
    </div>
  );
}

export default App;
