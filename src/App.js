//import Dropdown from './components/Dropdown';
import Error404 from './components/Error404';
import Footer from './components/Footer';
import Header from './components/Header';
import AboutPage from './pages/AboutPage';
import Homepage from './pages/HomePage';
import {Routes, Route} from "react-router-dom"
import LodgingPage from './pages/LodgingPage';
import data from "./logements.json"


function App() {

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' data={data} element={<Homepage/>}></Route>
        <Route path='/about' data={data} element={<AboutPage/>}></Route>
        <Route path='/lodging/:id' data={data} element={<LodgingPage/>}></Route>
        <Route path='*' element={<Error404 />} />
      </Routes>


      <Footer/>
    </div>
  );
}

export default App;
