import { Link, useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();

    return (
        <header className="your-header-styles">
            {/* ... otros elementos del header ... */}
            <div className="flex gap-4">
                <Link 
                    to="/login"
                    className="your-button-styles"
                >
                    Iniciar Sesión
                </Link>
                <Link 
                    to="/registro"
                    className="your-button-styles"
                >
                    Registrarse
                </Link>
            </div>
        </header>
    );
}

export default Header