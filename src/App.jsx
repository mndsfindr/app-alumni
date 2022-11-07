import './index.css';
import Konsultasi from './components/Konsultasi/konsultasi'
import AddTraining from './components/TambahTraining/AddTraining';
import Sidebar from './components/Sidebar/sidebar';
import Notifikasi from './components/notifikasi/notifikasiPencarikerja';
import NotifikasiAsesor from './components/notifikasi/notifikasiAsesor';
import TambahPerusahaan from './components/TambahPerusahaan/tambahPerusahaan';
import DetailKonsultasi from './components/Konsultasi/detailKonsultasi';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
      <>
        <Sidebar />
        <Routes>
        <Route  exact path='/AddTraining' element={<AddTraining />} />
        <Route  exact path='/notifikasi' element={localStorage.role == "Asesor" ? <NotifikasiAsesor /> : <Notifikasi/>} />
        <Route  exact path='/tambahPerusahaan' element={<TambahPerusahaan />} />
        <Route  exact path='/konsultasi' element={<Konsultasi />} />
        <Route  exact path='/detailKonsultasi' element={<DetailKonsultasi />} />
        </Routes>
      </>
      </Router>
    </>
  );
}

export default App;
