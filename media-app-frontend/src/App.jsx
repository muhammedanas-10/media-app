
import './App.css'
import { GiMusicSpell } from "react-icons/gi";
import Header from './Components/Header';
import Footer from './Components/Footer';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import PageNotFound from './Pages/PageNotFound';
import Home from './Pages/Home';
import WatchHistory from './Pages/WatchHistory';


function App() {
  
  return (
    <>
<Header/>
<Routes>
  <Route path='/' element={<LandingPage/>}/>
  <Route path='/home' element={<Home/>}/>
  <Route path='/watch-history' element={<WatchHistory/>}/>
  <Route path='*' element={<PageNotFound/>}/>

</Routes>
<Footer/>
    </>
  )
}

export default App
