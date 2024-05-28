
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './assets/scss/style.scss';
import Home from './pages/Home';
import SearchPage from './pages/SearchPage';
import VideoPage from './pages/VideoPage';
import ChannelPage from './pages/ChannelPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<SearchPage />} />
        <Route path='/Video' element={<VideoPage />} />
        <Route path='/Channel' element={<ChannelPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
