import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './components/Register/Register';
import LogIn from './components/LogIn/LogIn';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AuthProvider from './Context/AuthProvider';
import BookService from './components/BookService/BookService';
import PackageDetail from './components/PackageDetail/PackageDetail';
import ManageOrders from './components/ManageOrders/ManageOrders';

function App() {
  return (
  <AuthProvider>
      <BrowserRouter>
   <Header></Header>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='home' element={<Home/>}/>
      <Route path='/service/:_id' element={<BookService/>}/>
      <Route path='package/:_id' element={<PackageDetail/>} />
      <Route path='manageOrders' element={<ManageOrders/>}/>
      <Route path='register' element={<Register/>}/>
      <Route path='login' element={<LogIn/>}/>
     </Routes>
     <Footer></Footer>
    </BrowserRouter>
  </AuthProvider>
  );
}

export default App;
