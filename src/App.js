
import './App.css';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { useContext } from 'react';
import { authContext } from './context/AuthContext';
import Detail from './pages/detail/Detail';

function App() {
  const { accessToken } = useContext(authContext)
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact element={accessToken ? <Home /> : <Login />}>
            <Route path="/cat" element={<Home />} />
            <Route path="/dog" element={<Home />} />
            <Route path="/rabbit" element={<Home />} />
            <Route path="/bird" element={<Home />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/animals/:id" element={accessToken ? <Detail /> : <Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  )
}

export default App;
