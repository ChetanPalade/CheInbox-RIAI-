import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './pages/Login';
import CheBox from './pages/CheBox';

function App() {
  return (
    <div>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<CheBox/>} />
          <Route path="/login" element={<Login/>} />
        </Routes> 
       </BrowserRouter>
    </div>
  )
}

export default App;
