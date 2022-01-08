import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home/Home';
import { Navigate,BrowserRouter,Routes,Route} from 'react-router-dom';
import NotFound from './Pages/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home"/>}/>
        <Route path="/home" element={<Home/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
