import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login';
import ToDo from './components/ToDo';
import Footer from './components/Footer';
import Register from './components/Register';
import Home from './components/Home';
import Calendar from './components/Calendar';
import CompletedTask from './components/CompletedTask';

function App() {
  return (
    <section>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/todo' element={<ToDo />} />
        <Route path='/calendar' element={<Calendar/>} />
        <Route path='/completedTasks' element={<CompletedTask/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      <Footer />
    </section>
  );
}

export default App;
