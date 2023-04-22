import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import RegisterUser from './pages/RegisterUser';
import LoginUser from './pages/LoginUser';
import Home from './pages/Home';
import Detail from './pages/Detail';
import CheckOut from './pages/CheckOut';
import OrderCompleted from './pages/OrderCompleted';
import Container  from 'react-bootstrap/Container';

function App() {

  return (
    <>
        <Header/>
        <Container fluid as='main'>       
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/register' element={<RegisterUser/>}/>
            <Route path='/login' element={<LoginUser/>}/>
            <Route path='/checkout' element={<CheckOut/>}/>
            <Route path='/item/:id' element={<Detail/>}/>
            <Route path='/order_completed' element={<OrderCompleted/>}/>
          </Routes>
        </Container>
        <Footer/>
    </>
  )
}

export default App;

