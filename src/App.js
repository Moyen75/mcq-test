import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Quize from './components/Quize/Quize';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/quize' element={<Quize></Quize>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
