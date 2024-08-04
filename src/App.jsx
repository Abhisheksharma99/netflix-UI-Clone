import './App.css';
import { BrowserRouter as Router , Route, Routes} from 'react-router-dom';
import  Login  from './pages/Login';
import  SignUp  from './pages/SignUp';
import  Netflix  from './pages/Netflix';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/login' element={<Login/>} />
        <Route exact path='/signup' element={<SignUp/>} />
        <Route exact path='/' element={<Netflix/>} />
      </Routes>
    </Router>
  );
}

export default App;
