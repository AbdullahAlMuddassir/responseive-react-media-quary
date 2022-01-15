import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home/Home';
import { Navigate,BrowserRouter,Routes,Route} from 'react-router-dom';
import NotFound from './Pages/NotFound/NotFound';
import Booking from './Pages/Booking/Booking/Booking';
import Login from './Pages/Login/Login/Login';
import Header from './Pages/Shared/Header/Header';
import AuthProvider from './Contexts/AuthProvider';
import PrivateRoute from './Pages/Login/PirvateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Navigate to="/home"/>}/>
        <Route path="/home" element={<Home/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/booking/:serviceId" element={
          <PrivateRoute>
            <Booking/>
          </PrivateRoute>}/>
        <Route path="*" element={<NotFound/>} />
      </Routes>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
