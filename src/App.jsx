import './App.css'
import { HashRouter, Routes, Route } from "react-router-dom";
import { Menu } from './components/Menu';
import { HomePage } from './components/HomePage';
import { BlogPage } from './components/BlogPage';
import { ProfilePage } from './components/ProfilePage';
import { BlogPost } from './components/BlogPost';
import LoginPage from './auth/LoginPage';
import LogoutPage from './auth/LogoutPage';
import { AuthProvider, AuthRouter } from './auth/auth';


function App() {

  return (
    <>
      <div>
      
      <HashRouter>
        <AuthProvider>
          <Menu/>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/blog' element={<BlogPage />}>
              <Route path=':slug' element={<BlogPost />} />
            </Route>
            <Route path='/login' element={<LoginPage />} />
            <Route  
              path='/logout' 
              element={
                <AuthRouter>
                  <LogoutPage /> 
                </AuthRouter>
              }/>
            <Route  
              path='/profile' 
              element={
                <AuthRouter>
                  <ProfilePage /> 
                </AuthRouter>
              }/>
            <Route path='*' element={<p>Not Found</p>} />
          </Routes>
        </AuthProvider>
      </HashRouter>
      </div>
    </>
  )
}

export default App
