import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Header from './pages/Registro';
import HomePage from './pages/HomePage';


function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/registro" element={<Login />} /> {/* Usamos el mismo componente */}
                {/* ... otras rutas ... */}
            </Routes>
        </Router>
    );
}

export default App