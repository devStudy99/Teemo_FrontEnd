import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Write from '@components/Write';
import Detail from '@components/Detail';
import BoardList from '@components/BoardList';
import MyPage from '@components/MyPage';
import MyWrite from '@components/MyWrite';
import Analysis from '@components/Analysis';
import Analysis2 from '@components/Analysis2';
import SignUp from '@pages/SignUp';
import Login from '@pages/Login';
// import MyPage from '@components/MyPage';
import Welcome from '@pages/Welcome';
import Main from '@pages/cashBook/Main';
import WriteCashBook from '@pages/cashBook/WriteCashBook';
import Budget from '@pages/cashBook/Budget';
import TimoFeed from '@pages/TimoFeed';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/write" element={<Write />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/boardList" element={<BoardList />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/mywrite" element={<MyWrite />} />
        <Route path="/analysis" element={<Analysis />} />
        <Route path="/analysis2" element={<Analysis2 />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Welcome />} />
        <Route path="/main" element={<Main />} />
        <Route path="/accounts/add" element={<WriteCashBook />} />
        <Route path="/budget" element={<Budget />} />
        <Route path="/feed" element={<TimoFeed />} />
        {/* <Route path="/mypage" element={<MyPage />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
