import "./App.css";

function App({ library }) {
  const onSubmit = () => {
    console.log("click");
  };

  const data = {
    nama: "made",
    alamat: "bali",
    sekolah: {
      nama: "SMA 1 Bali",
      alamat: "badung",
    },
  };

  const {
    nama,
    alamat,
    sekolah: { nama: namaSekolah, alamat: alamatSekolah },
  } = data;
  console.log({ nama, alamat, namaSekolah, alamatSekolah });

  const array = ["badung", "denpasar", "bedugul", "uluwatu", "canggu"];
  console.log(array);

  const [lokasiSatu, lokasiDua, ...sisa] = array;
  console.log("lokasiSatu === ", lokasiSatu);
  console.log("lokasiSatu === ", lokasiDua);
  console.log("lokasiDua === ", sisa);

  return (
    <div className="App">
      <h1>Belajar {library}</h1>
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
}

export default App;
