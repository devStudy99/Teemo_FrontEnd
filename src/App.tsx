// import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import './App.css';
import Header1 from '@components/Header/Header1';
import { Route, Routes } from 'react-router-dom';
import Write from '@components/Write';
import Detail from '@components/Detail';
import BoardList from '@components/BoardList';
// import MyPage from '@components/MyPage';

function App() {
  return (
    <>
      {/* <Header /> */}
      <Header1 />
      <Routes>
        <Route path="/write" element={<Write />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/boardList" element={<BoardList />} />
        {/* <Route path="/mypage" element={<MyPage />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
