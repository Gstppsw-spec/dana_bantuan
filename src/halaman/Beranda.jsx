import profile from ".././img/balam.png";
import React, { useState } from "react";
import ".././style/beranda-pengajuan.scss";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const Beranda = (props) => {
  const navigate = useNavigate();
  const [bantuan, setBantuan] = useState("");

  const searchButtonHandlerDua = (e) => {
    e.preventDefault();
    if(bantuan.length){
      navigate(`/hasilBantuan/${bantuan}`, { state: { kata: { bantuan } } });
    } else{
      return (
        <div>
          {Swal.fire({
            icon: "error",
            text: "NIK masih kosong !",
          })}
        </div>
      );
    }
    
  };

  return (
    <div>
      <div className="header">
        <div className="pertama container">
          <table width="100%">
            <tbody>
              <tr>
                <td>
                  <div className="min-logo">
                  SISTEM INFORMASI PENYALURAN DANA BANTUAN
                  </div>
                </td>
                <td align="right">
                  <img src={profile} style={{ height: "50px" }}></img>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="menu-container" id="menu-container">
        <div className="navigasi container">
          <ul id="menu">
            <Link to="/">
              <li className="active">
                <a>Beranda</a>
              </li>
            </Link>

            <Link to="/alur-pengajuan">
              <li className="active">
                <a>ALUR PERMOHONAN</a>
              </li>
            </Link>

            <Link to="/login">
              <li className="active">
                <a>Login</a>
              </li>
            </Link>
          </ul>
        </div>
      </div>

      <div>
        <div className="satu">
          <div align="center"></div>
          <div id="headline_wrapper">
            <div id="headline_background">
              <div className="container">
                <div className="row-fluid">
                  <div className="span7">
                    <h3>
                      Selamat Datang di Sistem Informasi Peyaluran Dana Bantuan
                    </h3>
                    <span>
                      "Melalui sistem ini Anda dapat melihat status perkembangan
                      pencairan dana bantuan yang
                      diberikan oleh Badan Pengelolaan Keuangan dan Aset Daerah
                      Kota Bandar Lampung."
                    </span>
                  </div>
                  <div className="span5 form-box">
                    <br></br>
                    <div>
                      <h4 style={{color: "gray"}}>CEK STATUS PENCAIRAN DANA BANTUAN</h4>
                      <div className="form">
                        <form id="mahasiswa-login">
                          <label style={{fontSize: 14, fontWeight: 'bold'}}>NOMOR INDUK KEPENDUDUKAN (NIK)</label>
                          <input
                            className="span12"
                            placeholder="NOMOR INDUK KEPENDUDUKAN"
                            type="text"
                            value={bantuan}
                            id="PerkembanganPencairan_NIM"
                            name="PerkembanganPencarian[NIM]"
                            onChange={(event) => {
                              setBantuan(event.target.value);
                            }}
                            required
                          />

                          <br></br>

                          <input
                            onClick={searchButtonHandlerDua}
                            className="btn btn-info btn-large btn-block"
                            value="Lihat Perkembangan Pencarian"
                            type="submit"
                            name="yt0"
                          />
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer fixed-bottom">
        <div className="container">
          <div align="center">
            <small>Sistem Penyaluran Dana Santunan Kematian &copy; 2022</small>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  bottomMargin: {
    marginBottom: "1em",
  },
  textCenter: {
    textAlign: "center",
  },
};

export default Beranda;
