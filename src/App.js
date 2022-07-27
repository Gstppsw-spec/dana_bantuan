import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./component/Login";
import Home from "./component/Home";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import Beranda from "./halaman/Beranda";
import AlurPengajuan from "./halaman/AlurPengajuan";
import DaftarBantuanHasil from "./halamanBantuan/DaftarBantuanHasil";
import TambahBantuan from "./halamanBantuan/TambahBantuan"
import UpdateBantuan from "./halamanBantuan/UpdateBantuan"
import HasilBantuan from "./halaman/HasilBantuan"

function App() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Beranda/>}/>
          <Route exact path="/alur-pengajuan" element={<AlurPengajuan/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/hasilBantuan/:kata" element={<HasilBantuan/>}/>
          <Route exact path="/dashboard" element={<Home />} />
          <Route exact path="/bantuan">
            <Route index element={<DaftarBantuanHasil/>}/>
            <Route path="bantuan/baru" element={<TambahBantuan/>}/>
            <Route path="bantuan/edit/:id" element={<UpdateBantuan/>}/>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;