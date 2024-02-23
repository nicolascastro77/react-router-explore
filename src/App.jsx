import './App.css'
import { HashRouter, Routes, Route } from "react-router-dom";
import { Menu } from './components/Menu';
import { HomePage } from './components/HomePage';
import { BlogPage } from './components/BlogPage';
import { ProfilePage } from './components/ProfilePage';

function App() {

  return (
    <>
      <div>
      
      <HashRouter>
        <Menu/>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/blog' element={<BlogPage />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='*' element={<p>Not Found</p>} />
        </Routes>
      </HashRouter>
      </div>
    </>
  )
}

export default App
