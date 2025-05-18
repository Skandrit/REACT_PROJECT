import { Link } from "react-router-dom";

function Header({ cartCount }) {
    return (
        <header className="red-header">
            <div className="header-container">
                <nav className="nav-links">
                    <Link to="/" className="nav-link">Главная</Link>
                    <Link to="/cart" className="nav-link cart-link">
                        Корзина
                        {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
                    </Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;