import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login';
import ToDo from './components/ToDo';
import Footer from './components/Footer';

function App() {
  return (
    <section>
      <Navbar />
      <Routes>
        <Route path='/' element={<ToDo/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
      <Footer/>
    </section>
  );
}

export default App;
